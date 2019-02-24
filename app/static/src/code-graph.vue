<template>
  <div v-on:mousedown="drag" class="cy-container" ref="container">
      <div class="cy"></div>
  </div>
</template>

<script>
var utils = require('./utils.js')
var graphs = require('./graphs.js')
var _ = require('lodash')

// Start cytoscape ----------------------------
//
export default {
    props: ['graphType', 'graphData', 'optFields', 'optCollapse'],
    mounted () {
        this.cy = graphs.init_cyto(this.$el.querySelector(".cy"))

        this.cy.on('select', 'node', ({target}) => graphs.markPath(this.cy, target))
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
        drag (event) {
            if (event.offsetY > parseInt(getComputedStyle(this.$refs.container, '').height) - 10) {
                this.dragStart = event.y;
                const containerResize = this.containerResize
                // const cy_resize = this.cy.resize.bind(this.cy)
                document.addEventListener("mousemove", containerResize, false);
                document.addEventListener("mouseup", function(){
                    document.removeEventListener("mousemove", containerResize, false);
                    // cy_resize()
                }, false);
            }
        },

        containerResize (event) {
            const dy =  event.y - this.dragStart;
            this.dragStart = event.y;
            this.$refs.container.style.height = (parseInt(getComputedStyle(this.$refs.container, '').height) + dy) + "px";
            this.cy.resize()
        },

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
            this.cy.resize()
        }
    }
}

</script>

<style scoped>

.cy-container {
    border: 1px solid #888;
    width: 100%;
    height: 400px;
    padding-bottom: 10px;
    position: relative;
    overflow: hidden;
}

.cy-container:after {
    content: "...";
    line-height: 4px;
    text-align: center;
    background-color: #ccc;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 10px;
    cursor: ns-resize;
}

.cy {
    width: 100%;
    height: 100%;
}

</style>
