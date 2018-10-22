<template>
  <div>
    <pre id="editor1"></pre>
    <div class="scrollmargin"></div>

    parser: 
    <select type="text"  v-model="grammarName" v-on:change="resetStartPoint">
        <option v-for="grammar in grammars" :key="grammar.name" :value="grammar.name">
            {{grammar.name}}
        </option>
    </select>

    start: <input type="text" v-model="parserStart">
    <br>
    <button v-on:click="parseCode">Submit Code</button>
    <button v-on:click="routeToCode">Save</button>

    <!-- NODE GRAPH -->

    <div class="container">
        <label>collapse: <input type="checkbox" v-model="optCollapse"></label>
        <code-graph graph-type="parser" :graph-data="codeData" :opt-collapse="optCollapse"></code-graph>

        <label>show fields: <input type="checkbox" v-model="optFields" v-on:change="getAst"></label>
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
        start: 'sql_script',
        show_parse: true
    },
    {
        name: 'tsql',
        start: 'tsql_file',
        show_parse: true
    },
    {
        name: 'python',
        start: 'NA',
        show_parse: false
    },
    {
        name: 'shell',
        start: 'NA',
        show_parse: false
    }
]

var {parseFromGrammar} = require('./CustomListener.js');

import CodeGraph from './code-graph.vue'

// Start cytoscape ----------------------------
//
export default {
    components: {CodeGraph},
    props: ['defaultCode', 'defaultGrammar', 'defaultStart'],
    data () {
        return {
            grammarName: 'plsql',
            parserStart: 'sql_script',
            code: 'SELECT id FROM artists WHERE id > 100',
            optCollapse: true,
            optFields: true,
            grammars: grammars,
            codeData: {},
            astData: {}
        }
    },
    mounted () {
        // set up ace editor
        this.editor = ace.edit('editor1')
        this.setupEditor(this.editor)

        this.grammarName = this.defaultGrammar ? this.defaultGrammar : this.grammarName
        this.parserStart = this.defaultStart ? this.defaultStart : this.parserStart
        this.code = this.defaultCode ? this.defaultCode : this.code

        this.editor.setValue(this.code)

        this.editor.on('change', () => this.code = this.editor.getValue())

        setTimeout(() => this.parseCode())
    },
    computed: {
        crntGrammar () { return this.grammars.filter(({name}) => name == this.grammarName)[0]},
    },
    watch: {
        codeData () { 
            this.getAst() 
        },
    },
    methods: {

        getAst () {
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
            if (this.crntGrammar.show_parse)
                this.codeData = parseFromGrammar(grammar, this.code, this.parserStart)
            else
                this.codeData = {}
        },

        routeToCode () {
            var code = this.code;
            var start = this.parserStart;
            var parser = this.grammarName;

            var query = {code, start, grammar: parser}
            this.$router.push({path: 'editor', query})
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

<style scoped>
.ace_editor {
    border: 1px solid lightgray;
    height: 200px;
}

.scrollmargin {
    height: 80px;
    text-align: center;
}

.cy-container {
    border: 1px solid black;
    margin: auto;
    width: 90%;
    height: 400px;
}
</style>

