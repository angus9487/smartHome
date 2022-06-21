import {createApp} from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import VueECharts from 'vue-echarts'
import VueFullscreen from 'vue-fullscreen'
import VueRouter from 'vue-router'
import "echarts";
import Vue from 'vue'

const app = createApp(App)

app.component('v-chart', VueECharts)
app.use(ElementPlus, VueFullscreen, VueRouter)
// app.use(fullscreen)
app.mount('#app')