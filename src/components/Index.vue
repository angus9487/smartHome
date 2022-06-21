<template>
  <div>
    <el-container style="width: 1100px;height: 750px;position: center">
      <el-aside style="width: 140px;height: 700px;">
        <AsideBar/>
      </el-aside>
<!--      <el-container style="width: 1000px;height: 750px">-->
<!--        <el-header style="height: 90px;">-->
<!--          <iframe style="width: 800px;height: 100%;" frameborder="0" scrolling="no" hspace="0"-->
<!--                  src="https://i.tianqi.com/?c=code&a=getcode&id=48&num=6&icon=1"></iframe>-->
<!--          <iframe allowtransparency="true" frameborder="0" width="575" height="96" scrolling="no"-->
<!--                  src="//tianqi.2345.com/plugin/widget/index.htm?s=2&z=1&t=0&v=0&d=5&bd=0&k=&f=&ltf=009944&htf=cc0000&q=1&e=0&a=1&c=54511&w=575&h=96&align=center"></iframe>-->
<!--        </el-header>-->
        <el-main style="width: 1000px;height: 750px;">
          <FloorPlan ref="child"/>
        </el-main>
<!--      </el-container>-->
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
