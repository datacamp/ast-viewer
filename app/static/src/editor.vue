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

    <button v-on:click="graphCodeAndAst">Submit Code</button>

    <!-- NODE GRAPH -->

    <div class="container">
    <code-graph graph-type="parser" :graph-data="codeData" :opt-collapse="optCollapse"></code-graph>

    show fields: <input type="checkbox" v-model="optFields" v-on:change="graphAst"></br>
    <code-graph graph-type="ast" :graph-data="astData" :opt-fields="optFields"></code-graph>

    </div>
  </div>
</template>

<script>

var antlr = require('antlr4')
var utils = require('./utils.js')
var graphs = require('./graphs.js')

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

        var editor1 = this.editor = ace.edit('editor1')
        editor1.setTheme("ace/theme/tomorrow_night_eighties");
        editor1.session.setMode("ace/mode/sql");
        editor1.setAutoScrollEditorIntoView(true);
        editor1.setOption("maxLines", 30);
        editor1.setOption("minLines", 5);

        this.code = this.editor.getValue()
        this.editor.on('change', () => this.code = this.editor.getValue())
        // graph ast request ----------------------------------------------------------
        var self = this;
        var xhr = this.xhr = new XMLHttpRequest();
        xhr.responseType = 'json';

        xhr.addEventListener("readystatechange", (e) => {
            console.log('rsc');
            if (xhr.readyState == 4 && xhr.status == 200) {
                var response = xhr.response;
                console.log(response);
                this.astData = response

            }
        }, false);

    },
    computed: {
        grammars () { return grammars },
        crntGrammar () { return this.grammars.filter(({name}) => name == this.grammarName)[0]}
    },
    methods: {

        graphAst () {
            console.log('creating request');
            var code = encodeURIComponent(this.code);
            var start = encodeURIComponent(this.parserStart);
            var parser = encodeURIComponent(this.grammarName);
            var url = `/ast?code=${code}&start=${start}&parser=${parser}`
            this.xhr.open('GET', url, true);
            this.xhr.send();
        },

        graphCode () {
            var grammar = this.crntGrammar.funcs
            this.codeData = parseFromGrammar(grammar, this.code, this.parserStart)
        },
        resetStartPoint () {
            this.parserStart = this.crntGrammar.start
        },
        graphCodeAndAst () {
            this.graphCode()
            this.graphAst()
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

