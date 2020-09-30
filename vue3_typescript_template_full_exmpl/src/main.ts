import { createApp } from 'vue'
import App from './App.vue'

import router from "./routes"; //* router
import { createStore } from "vuex"; //* vuex
import { storeObj } from './store'; //* vuex

let rootApp = createApp(App as any)

let store = createStore(storeObj) //* vuex
rootApp.use(store) //* vuex
rootApp.use(router) //* router

rootApp.mount('#app')