var cytoscape = require('cytoscape');
var cydagre = require('cytoscape-dagre');
var dagre = require('dagre');

cydagre( cytoscape, dagre ); // register extension

function init_cyto(el) {
    return cytoscape({
        container: el,
        layout: {name: 'dagre', rankDir: 'LR'},
        style: style
    })
}

function pathToNode(cy, el) {
    var root = cy.$('node').roots()

    var out = cy.elements()
                .aStar({root, goal: el, directed: true})
    
    return out
}

function markPath(cy, el) {
    cy.elements().removeClass('mark')
    var {path} = pathToNode(cy, el)
    if (path) path.addClass('mark')

    return path
}

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
        selector: 'node.unshaped',
        style: {
            'background-color': 'orange'
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
    },
    {
        selector: '.mark',
        style: {
            'line-color': 'orange',
            'font-size': '1.25em',
            'color': 'blue',
            'background-color': 'orange'
        }
    }

];

module.exports = {
    init_cyto,
    style,
    pathToNode,
    markPath
}
