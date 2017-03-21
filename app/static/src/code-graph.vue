<template>
  <div>
    <div class="cy"></div>
  </div>
</template>

<script>
var antlr = require('antlr4')
var utils = require('./utils.js')
var graphs = require('./graphs.js')

// Start cytoscape ----------------------------
//
export default {
    props: ['graphType', 'graphData', 'optFields', 'optCollapse'],
    mounted () {
        console.log("YOU MOUNTED OR NOT")
        this.cy = graphs.init_cyto(this.$el.querySelector(".cy"))
    },
    watch: {
        optFields (val) {
            var label = val ? 'data(text)' : ''
            this.cy.style().selector('edge').style('label', label).update()

        },
        graphData () { 
            console.log('logging')
            this.graphType == 'ast' ? this.graphAst(this.graphData) : this.graphCode(this.graphData) 
        }

    },
    methods: {

        graphAst (data) {
            var builder = utils.AstCytoBuilder();
            var elements = builder.astToCyto(data)

            this.cy.elements().remove()
            this.cy.add(elements);
            this.cy.layout({name: 'dagre', rankDir: 'TB'});
        },

        graphCode (elements) {
            // reset cytoscape graph
            this.cy.elements().remove();
            this.cy.add(elements);

            if (!this.optCollapse) this.cy.edges('.collapsed').remove();
            else this.cy.nodes('[?trivial]').remove();

            this.cy.layout({name: 'dagre', rankDir: 'TB'});
        }
    }
}

</script>

<style>

.cy {
    border: 1px solid black;
    width: 800px;
    height: 400px;
}
</style>
