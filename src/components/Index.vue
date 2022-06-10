<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <AsideBar/>
      </el-aside>
      <el-container>
        <el-header>Header
        </el-header>
        <el-main>
          <Temperature/>
          <el-button @click="printHealth()">main</el-button>
        </el-main>
        <el-footer>footer
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import AsideBar from './AsideBar.vue'
import Temperature from "@/components/temperature";
import {healthCheck} from "@/request/baseapi";

export default {
  name: 'Index-Tab',
  components: {
    AsideBar,
    Temperature
  },
  methods: {
    printHealth() {
      healthCheck().then(res => {
        console.log(res.status);
      }).catch(err => {
        console.log(err);
      });
    }
  },
};
</script>
<style>
</style>
