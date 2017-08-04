<template>
  <div>
      <dropzone id="dropzone" url="/ast-from-config" v-on:vdropzone-success="plotFile"></dropzone>

      <div v-for="(trees, group) in astData">
          <h3>{{group}}</h3>
          <div v-for="tree in trees" style="display: inline-block; vertical-align: top; max-width: 300px;">
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
import CodeGraph from './code-graph.vue'

// Start cytoscape ----------------------------
//
export default {
    components: {CodeGraph, Dropzone},
    data () {
        return {
            astData: {}
        }
    },
    methods: {
        plotFile (file, response) { this.astData = response }
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
    width: 250px;
    height: 250px;
}
</style>


