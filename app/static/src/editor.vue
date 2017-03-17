<template>
  <div>
    <pre id="editor1">SELECT id, artists.name as name2 FROM artists WHERE id < 500 AND id > 200</pre>
    <div class="scrollmargin"></div>

    expand: <input class="cb-collapse" type="checkbox" v-model="optCollapse"><br>
    start: <input type="text" class="input-parser-start" v-model="parserStart">
    parser: <input type="text" class="input-parser-name" v-model="parserName">
    <button class="btn-code-submit" v-on:click="graphCodeAndAst">Submit Code</button>

    <!-- NODE GRAPH -->

    <div class="container">
    <div id="cy-1"></div>
    <div id="cy-2"></div>
    </div>
  </div>
</template>

<script>

var antlr = require('antlr4')
var utils = require('./utils.js')

var grammar = {
    plsql: require('../grammar/antlr_plsql/js/index.js').default,
    tsql: require('../grammar/antlr_tsql/js/index.js').default
}

var CustomListener = require('./CustomListener.js');

// Start cytoscape ----------------------------
//
var cytoscape = require('cytoscape');
var cydagre = require('cytoscape-dagre');
var dagre = require('dagre');

cydagre( cytoscape, dagre ); // register extension

var style = [
    {
        selector: 'node',
        style: {
            'content': 'data(name)',
            'text-valign': 'center',
        }
    },
    {
        selector: 'node.terminal',
        style: {
            'content': 'data(text)',
            'border-width': '0',
            'background-color': 'white'
        }
    },
    {
        selector: 'node.error',
        style: {
            'content': 'data(text)',
            'border-width': '0',
            'background-color': 'red'
        }
    },
    {
        selector: 'edge',
        style: {
            'curve-style': 'bezier',
            'target-arrow-shape': 'triangle',
            'font-size': '.5em',
            'label': 'data(text)'
        }

    },
    {
        selector: 'edge.collapsed',
        style: {
            'line-color': 'blue'
        }
    }

];

export default {
    data () {
        return {
            parserStart: 'sql_script',
            parserName: 'plsql',
            optCollapse: false
        }
    },
    mounted () {
        this.cy = cytoscape({
            container: document.getElementById('cy-1'),
            layout: {name: 'dagre', rankDir: 'LR'},
            style: style
        });

        this.cy2 = cytoscape({
            container: document.getElementById('cy-2'),
            layout: {name: 'dagre', rankDir: 'LR'},
            style: style
        })

        this.editor = ace.edit('editor1')

        // graph ast request ----------------------------------------------------------
        var self = this;
        var xhr = this.xhr = new XMLHttpRequest();
        xhr.responseType = 'json';

        xhr.addEventListener("readystatechange", function(e){
            console.log('rsc');
            if (xhr.readyState == 4 && xhr.status == 200) {
                var response = xhr.response;
                console.log(response);
                var builder = utils.AstCytoBuilder();
                var elements = builder.astToCyto(response)

                self.cy2.elements().remove()
                self.cy2.add(elements);
                self.cy2.layout({name: 'dagre', rankDir: 'TB'});


            }
        }, false);

    },
    computed: {
        code () { return this.editor.getValue() }
    },
    methods: {

        graphAst () {
            console.log('creating request');
            var code = encodeURIComponent(this.code);
            var start = encodeURIComponent(this.parserStart);
            var parser = encodeURIComponent(this.parserName);
            var url = `/ast?code=${code}&start=${start}&parser=${parser}`
            this.xhr.open('GET', url, true);
            this.xhr.send();
        },

        graphCode () {
            var chars = new antlr.InputStream(this.code);
            var lexer = new grammar[this.parserName].Lexer(chars);
            var tokens  = new antlr.CommonTokenStream(lexer);
            var parser = new grammar[this.parserName].Parser(tokens);
            parser.buildParseTrees = true;

            // get the parser start point from input box!
            var tree = parser[this.parserStart]();
            var listener = new CustomListener.Listener();
            antlr.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);

            // get nodes and edges from listener
            var elements =  {
                nodes: Object.keys(listener.nodeMap).map(key => listener.nodeMap[key]),
                edges: listener.nodeEdges
            };

            // reset cytoscape graph
            this.cy.elements().remove();
            this.cy.add(elements);

            if (!this.optCollapse) this.cy.edges('.collapsed').remove();
            else this.cy.nodes('[?trivial]').remove();

            this.cy.layout({name: 'dagre', rankDir: 'TB'});
        },

        graphCodeAndAst () {
            this.graphCode();
            this.graphAst();
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

#cy-1 {
    border: 1px solid black;
    width: 800px;
    height: 400px;
}

#cy-2 {
    border: 1px solid black;
    width: 800px;
    height: 400px;
}
</style>

