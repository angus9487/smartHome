import {createApp} from 'vue'
// import routes from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import VueECharts from 'vue-echarts'
import VueFullscreen from 'vue-fullscreen'
import router from './router'
import "echarts";

// createApp(App).component('v-chart', VueECharts).use(ElementPlus).use(router).mount('#app')

const app = createApp(App)
app.component('v-chart', VueECharts)
app.use(router)
app.use(ElementPlus)
// app.use(VueFullscreen)
// app.use(router)
// app.use(fullscreen)
app.mount('#app')