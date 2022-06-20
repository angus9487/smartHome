<template>
  <div  >
    <el-container style="width: 1100px;height: 750px;position: center" >
      <el-aside style="width: 140px;height: 700px;" >
        <AsideBar/>
      </el-aside>
      <el-container style="width: 1000px;height: 750px">
        <el-header style="height: 90px;">
          <iframe style="width: 800px;height: 100%;" frameborder="0" scrolling="no" hspace="0"
                  src="https://i.tianqi.com/?c=code&a=getcode&id=48&num=6&icon=1"></iframe>
        </el-header>
        <el-main style="width: 1000px;height: 600px;">
          <FloorPlan ref="child"/>
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
    // console.log("index connect");
    await connect();
    getConnection().then(con => {
      this.$refs.child.initConn(con);
      // subscribeEntities(con, (state) => {
      //   // console.log("index subscribeEntities");
      //   this.$refs.child.updateState(state);
      //   // console.log(state)
      // });
    });
  }
};
</script>
<style>
</style>
