var antlr = require('antlr4')
var utils = require('./utils.js')
console.log(utils)

var grammar = {
    plsql: require('./grammar/antlr_plsql/js/index.js').default,
    tsql: require('./grammar/antlr_tsql/js/index.js').default
}
//var Lexer = grammar.plsql.Lexer
//var Parser = grammar.plsql.Parser
var Lexer = grammar.tsql.Lexer
var Parser = grammar.tsql.Parser
console.log(grammar)
//var Lexer = require('./grammar/plsqlLexer.js').plsqlLexer;
//var Parser = require('./grammar/plsqlParser.js').plsqlParser;
var CustomListener = require('./CustomListener.js');

function getCode() {
    var editor = ace.edit('editor1');
    return editor.getValue()
}

function getParserStart() {
    var input = document.querySelector(".input-parser-start");
    return input.value
}

function getParserName() {
    return document.querySelector(".input-parser-name").value;
}

// graph code request ---------------------------------------------------------
var btn = document.querySelector(".btn-code-submit");
btn.addEventListener("click", function(){
    graphCode();
    graphAst();
});


function graphCode(){
    var input = getCode();
    var parser = getParserName()
    //var input = "(123 + 1) * 2\n"
    var chars = new antlr.InputStream(input);
    var lexer = new grammar[parser].Lexer(chars);
    var tokens  = new antlr.CommonTokenStream(lexer);
    var parser = new grammar[parser].Parser(tokens);
    parser.buildParseTrees = true;

    // get the parser start point from input box!
    var tree = parser[getParserStart()]();
    var listener = new CustomListener.Listener();
    antlr.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);

    // get nodes and edges from listener
    var elements =  {
        nodes: Object.keys(listener.nodeMap).map(key => listener.nodeMap[key]),
        edges: listener.nodeEdges
    };

    // reset cytoscape graph
    cy.elements().remove();
    cy.add(elements);

    if (!collapse) cy.edges('.collapsed').remove();
    else cy.nodes('[?trivial]').remove();

    cy.layout({name: 'dagre', rankDir: 'TB'});
    console.log(cy)
}

// graph ast request ----------------------------------------------------------
var xhr = new XMLHttpRequest();
xhr.responseType = 'json';

xhr.addEventListener("readystatechange", function(e){
    console.log('rsc');
    if (xhr.readyState == 4 && xhr.status == 200) {
        var response = xhr.response;
        console.log(response);
        var builder = utils.AstCytoBuilder();
        var elements = builder.astToCyto(response)

        cy2.elements().remove()
        cy2.add(elements);
        cy2.layout({name: 'dagre', rankDir: 'TB'});

    }
}, false);

function graphAst(){
    console.log('creating request');
    var code = encodeURIComponent(getCode());
    var start = encodeURIComponent(getParserStart());
    var parser = encodeURIComponent(getParserName());
    var url = `/ast?code=${code}&start=${start}&parser=${parser}`
    xhr.open('GET', url, true);
    xhr.send();
}

// collapse options -----------------------------------------------------------
var collapse = true;
var cb = document.querySelector(".cb-collapse")
cb.addEventListener("change", function(){
    collapse = collapse ? false: true;
})




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

var cy = cytoscape({
    container: document.getElementById('cy-1'),
    layout: {name: 'dagre', rankDir: 'LR'},
    style: style
});

var cy2 = cytoscape({
    container: document.getElementById('cy-2'),
    layout: {name: 'dagre', rankDir: 'LR'},
    style: style
})

