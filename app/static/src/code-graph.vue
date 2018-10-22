<template>
  <div class="cy-container">
      <div class="cy"></div>
  </div>
</template>

<script>
var antlr = require('antlr4')
var utils = require('./utils.js')
var graphs = require('./graphs.js')
var _ = require('lodash')

// Start cytoscape ----------------------------
//
export default {
    props: ['graphType', 'graphData', 'optFields', 'optCollapse'],
    mounted () {
        this.cy = graphs.init_cyto(this.$el.querySelector(".cy"))

        this.cy.on('select', ({cyTarget}) => graphs.markPath(this.cy, cyTarget))
        this.cy.on('vclick', () => this.cy.elements().removeClass('mark'))
        if (!_.isEmpty(this.graphData)) this.runPlot()
    },
    watch: {
        optFields (val) {
            var label = val ? 'data(text)' : ''
            this.cy.style().selector('edge').style('label', label).update()
        },

        graphData () { 
            this.runPlot()
        }
    },
    methods: {
        graphAst (data) {
            var builder = utils.AstCytoBuilder();
            var elements = builder.astToCyto(data)

            this.cy.elements().remove()
            this.cy.add(elements);
            this.cy.layout({
                name: 'dagre',
                rankDir: 'TB',
                nodeDimensionsIncludeLabels: true
            }).run();
        },

        graphCode (elements) {
            // reset cytoscape graph
            this.cy.elements().remove();
            this.cy.add(elements);

            if (!this.optCollapse) this.cy.edges('.collapsed').remove();
            else this.cy.nodes('[?trivial]').remove();

            this.cy.layout({
                name: 'dagre',
                rankDir: 'TB',
                nodeDimensionsIncludeLabels: true
            }).run();
        },

        runPlot () {
            this.graphType == 'ast' ? this.graphAst(this.graphData) : this.graphCode(this.graphData) 
        }
    }
}

</script>

<style scoped>

.cy {
    width: 100%;
    height: 100%;
}

</style>
