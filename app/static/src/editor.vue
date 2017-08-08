<template>
  <div>
    <pre id="editor1"></pre>
    <p>
        parser:
        <select type="text"  v-model="grammarName" v-on:change="resetStartPoint">
            <option v-for="grammar in grammars" :key="grammar.name" :value="grammar.name">
                {{grammar.name}}
            </option>
        </select>

        start: <input type="text" v-model="parserStart">
        <button v-on:click="submit">Submit Code</button>
    </p>

    <div class="container">
        <p>
            ANTLR parse tree:
            <label>collapse tree: <input type="checkbox" v-model="optCollapse"></label>
        </p>
        <code-graph graph-type="parser" :graph-data="antlrData" :opt-collapse="optCollapse"></code-graph>

        <p>
            Base AST:
        </p>
        <code-graph graph-type="ast" :graph-data="baseAstData" :opt-fields="true" style="height:0px"></code-graph>

        <p>
            Alias AST:
        </p>
        <code-graph graph-type="ast" :graph-data="aliasAstData" :opt-fields="true" style="height:0px"></code-graph>

        <p>
            Final AST:
            <label>show fields: <input type="checkbox" v-model="optFields"></label>
        </p>
        <code-graph graph-type="ast" :graph-data="astData" :opt-fields="optFields"></code-graph>
    </div>
  </div>
</template>

<script>

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
    },
    {
        name: 'bash-simple',
        show_parse: false,
        start: 'NA'
    },
    {
        name: 'bash-verbose',
        show_parse: false,
        start: 'NA'
    },
    {
        name: 'bash-vorpal',
        show_parse: false,
        start: 'NA'
    },
]

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
            antlrData: {},
            baseAstData: {},
            aliasAstData: {},
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
        antlrData () {
            this.getAst()
            this.getBaseAst()
            this.getAliasAst()
        },
    },
    methods: {
        fetch (endpoint) {
            var code = encodeURIComponent(this.code);
            var start = encodeURIComponent(this.parserStart);
            var parser = encodeURIComponent(this.grammarName);
            var url = `${endpoint}?code=${code}&start=${start}&parser=${parser}`
            return request
                .get(url)
                .set('Accept', 'application/json')
                .then((res) => {
                    if (res.status == 200) return res.body
                })
        },

        parseCode () {
            if (this.crntGrammar.show_parse)
                this.fetch('/antlr-ast')
                    .then((data) => {
                        this.antlrData = data
                    })
            else
                this.antlrData = {}
        },

        getBaseAst () {
            if (this.crntGrammar.show_parse)
                this.fetch('/base-ast')
                    .then((data) => {
                        this.baseAstData = data
                    })
            else
                this.baseAstData = {}
        },

        getAliasAst () {
            if (this.crntGrammar.show_parse)
                this.fetch('/alias-ast')
                    .then((data) => {
                        this.aliasAstData = data
                    })
            else
                this.aliasAstData = {}
        },

        getAst () {
            this.fetch('/ast')
                .then((data) => {
                    this.astData = data
                })
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

        submit () {
            this.parseCode()
            this.routeToCode()
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

.container {
    width: 90%;
    margin: auto;
    margin-bottom: 200px;
}
</style>

