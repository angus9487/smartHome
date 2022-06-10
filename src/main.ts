import {createApp} from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import VueECharts from 'vue-echarts'
import "echarts";

const app = createApp(App)

app.component('v-chart', VueECharts)
app.use(ElementPlus)
app.mount('#app')