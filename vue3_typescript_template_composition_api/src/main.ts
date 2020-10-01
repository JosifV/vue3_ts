import { createApp } from 'vue'
import App from './App.vue'
import { storeObj } from './store'; //* vuex
import { createStore } from "vuex"; //* vuex

let rootApp = createApp(App as any)

let store = createStore(storeObj) //* vuex
rootApp.use(store) //* vuex

rootApp.mount('#app')