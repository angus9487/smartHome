<template>
  <div>
    <el-container style="width: 1150px;height: 700px;position: center">
      <el-aside style="width: 140px;height: 700px;">
        <AsideBar/>
      </el-aside>
        <el-main>
          <FloorPlan ref="child"/>
        </el-main>
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
