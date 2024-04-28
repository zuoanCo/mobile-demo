// import "@babel/polyfill"
// import Es6Promise from "es6-promise"

// Es6Promise.polyfill();

import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import 'amfe-flexible'

import utils from './utils'

const gloablMixins = {
    created() {
        this.$utils = new (utils as any);
    }
}

const app = createApp(App);

app.mixin(gloablMixins);

app.mount('#app');
