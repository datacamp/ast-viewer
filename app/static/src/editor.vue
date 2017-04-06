<template>
  <div>
    <pre id="editor1"></pre>
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
    <button v-on:click="routeToCode">Save</button>

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
    },
    {
        name: 'python',
        start: 'NA'
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


        this.code = this.defaultCode ? this.defaultCode : "SELECT id FROM artists WHERE id > 100"
        this.parserStart = this.defaultStart ? this.defaultStart : 'sql_script'
        this.grammarName = this.defaultGrammar ? this.defaultGrammar : 'plsql'

        this.editor.setValue(this.code)

        this.editor.on('change', () => this.code = this.editor.getValue())

        this.parseCode()

    },
    computed: {
        grammars () { return grammars },
        crntGrammar () { return this.grammars.filter(({name}) => name == this.grammarName)[0]},
    },
    watch: {
        codeData () { 
            this.getAst() 
        },
        defaultCode () {
            // TODO: this should be a method, or just use prop, not prop + this.code
            this.code = this.defaultCode ? this.defaultCode : "SELECT id FROM artists WHERE id > 100"
            this.editor.setValue(this.code)
            setTimeout(() => this.parseCode())
        },
        defaultGrammar () {
            this.grammarName = this.defaultGrammar ? this.defaultGrammar : 'plsql'
        },
        defaultStart () {
            if (!this.defaultStart) this.resetStartPoint()
            else this.parserStart = this.defaultStart
        }
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
            if (this.crntGrammar.name != "python")
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
            if (!this.defaultStart) this.parserStart = this.crntGrammar.start
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
    margin: auto;
    height: 200px;
    width: 60%;
}
.scrollmargin {
    height: 80px;
    text-align: center;
}

.cy-container {
    border: 1px solid black;
    width: 800px;
    height: 400px;
}
</style>

