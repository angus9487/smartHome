<template>
  <div class="common-layout">
    <el-container style="width: 100%;height: calc(100vh);">
      <el-aside width="10%">
        <AsideBar/>
      </el-aside>
      <el-container style="height: 100%">
        <el-header>
          <iframe style="width: 80%;height: 200px;" frameborder="0" scrolling="no" hspace="0"
                  src="https://i.tianqi.com/?c=code&a=getcode&id=48&num=6&icon=1"></iframe>
        </el-header>
        <el-main>
          <FloorPlan ref="child" style="top:10px"/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import AsideBar from '@/components/AsideBar.vue'
import FloorPlan from '@/components/Floorplan'
import {connect, getConnection, subscribe} from '@/request/haws'
import {subscribeEntities} from "home-assistant-js-websocket";

export default {
  name: 'Index-Tab',
  components: {
    AsideBar,
    // Temperature,
    FloorPlan
  },

  methods: {},
  async mounted() {
    console.log("index connect");
    await connect();
    getConnection().then(con => {
      subscribeEntities(con, (state) => {
        console.log("index subscribeEntities");
        this.$refs.child.updateState(state);
        // console.log(state)
      });
    });
  }
};
</script>
<style>
</style>
