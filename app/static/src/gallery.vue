<template>
  <div>
      <dropzone id="dropzone" :options="dropzoneOptions" v-on:vdropzone-success="plotFile"></dropzone>

      <div v-for="(trees, group) in astData" :key="group">
          <h3>{{group}}</h3>
          <div v-for="tree in trees" :key="tree.code" style="display: inline-block; vertical-align: top; max-width: 300px;">
            <p>{{tree.code}}</p>
            <code-graph graph-type="ast" :graph-data="tree.ast" :opt-fields="true">
            </code-graph>
          </div>
      </div>
  </div>
</template>

<script>

var request = require('superagent')

import Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'

import CodeGraph from './code-graph.vue'

// Start cytoscape ----------------------------
//
export default {
    components: {CodeGraph, Dropzone},
    data () {
        return {
            dropzoneOptions: {
                url: '/ast-from-config',
                addRemoveLinks: true
            },
            astData: {}
        }
    },
    methods: {
        plotFile (file, response) { this.astData = response }
    }
}


</script>

<style scoped>
.cy-container {
    border: 1px solid black;
    width: 250px;
    height: 250px;
}
</style>


