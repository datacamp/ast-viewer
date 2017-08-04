import Vue from 'vue/dist/vue.esm.js'
import VueRouter from 'vue-router'
import CodeEditor from './src/editor.vue'
import Gallery from './src/gallery.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/gallery', component: Gallery},
    { path: '/editor',  component: CodeEditor, 
        props: (route) => ({defaultCode: route.query.code, defaultGrammar: route.query.grammar, defaultStart: route.query.start}) }
]

const router = new VueRouter({
    routes
})

new Vue({
    router
}).$mount('#app');
