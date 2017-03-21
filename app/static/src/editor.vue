<template>
  <div>
    <pre id="editor1">SELECT id, artists.name as name2 FROM artists WHERE id < 500 AND id > 200</pre>
    <div class="scrollmargin"></div>

    collapse: <input type="checkbox" v-model="optCollapse"><br>
    start: <input type="text" v-model="parserStart">

    parser: 
    <select type="text"  v-model="grammarName" v-on:change="resetStartPoint">
        <option v-for="grammar in grammars" :value="grammar.name">
            {{grammar.name}}
        </option>
    </select>

    <button v-on:click="parseCode">Submit Code</button>

    <!-- NODE GRAPH -->

    <div class="container">
    <code-graph graph-type="parser" :graph-data="codeData" :opt-collapse="optCollapse"></code-graph>

    show fields: <input type="checkbox" v-model="optFields" v-on:change="getAst"></br>
    <code-graph graph-type="ast" :graph-data="astData" :opt-fields="optFields"></code-graph>

    </div>
  </div>
</template>

<script>

var antlr = require('antlr4')
var utils = require('./utils.js')
var graphs = require('./graphs.js')
var request = require('superagent')

var grammars = [
    { 
        name: 'plsql', 
        funcs: require('../grammar/antlr_plsql/js/index.js').default,
        start: 'sql_script'
    },
    {
        name: 'tsql',
        funcs: require('../grammar/antlr_tsql/js/index.js').default,
        start: 'tsql_file'
    }
]

var {parseFromGrammar} = require('./CustomListener.js');

import CodeGraph from './code-graph.vue'

// Start cytoscape ----------------------------
//
export default {
    components: {CodeGraph},
    data () {
        return {
            parserStart: 'sql_script',
            grammarName: 'plsql',
            optCollapse: true,
            optFields: true,
            codeData: {},
            astData: {}
        }
    },
    mounted () {
        // set up ace editor
        this.editor = ace.edit('editor1')
        this.setupEditor(this.editor)

        this.code = this.editor.getValue()
        this.editor.on('change', () => this.code = this.editor.getValue())
    },
    computed: {
        grammars () { return grammars },
        crntGrammar () { return this.grammars.filter(({name}) => name == this.grammarName)[0]},
    },
    watch: {
        codeData () { this.getAst() }
    },
    methods: {

        getAst () {
            console.log('creating request');
            var code = encodeURIComponent(this.code);
            var start = encodeURIComponent(this.parserStart);
            var parser = encodeURIComponent(this.grammarName);
            var url = `/ast?code=${code}&start=${start}&parser=${parser}`
            request
                .get(url)
                .set('Accept', 'application/json')
                .then((res) => {
                    if (res.status == 200) this.astData = res.body

                })
        },

        parseCode () {
            var grammar = this.crntGrammar.funcs
            this.codeData = parseFromGrammar(grammar, this.code, this.parserStart)
        },
        resetStartPoint () {
            this.parserStart = this.crntGrammar.start
        },
        setupEditor(editor) {
            editor.setTheme("ace/theme/tomorrow_night_eighties");
            editor.session.setMode("ace/mode/sql");
            editor.setAutoScrollEditorIntoView(true);
            editor.setOption("maxLines", 30);
            editor.setOption("minLines", 5);
        }
    }
}


</script>

<style>
.ace_editor {
    border: 1px solid lightgray;
    margin: auto;
    height: 200px;
    width: 60%;
}
.scrollmargin {
    height: 80px;
    text-align: center;
}

</style>

