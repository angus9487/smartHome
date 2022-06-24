<template>
  <OverView/>
  <span>This is a message {{ roomName }}</span>
  <el-space wrap size="large">
    <el-card class="box-card" v-for="o in 10" :key="o">
      <div>{{ 'List item ' + o }}</div>
    </el-card>
  </el-space>
</template>

<script>
import {devicesData} from '@/components/main/data'
import OverView from '@/components/room/overview'

export default {
  props: ['tabName', 'roomOn'],
  name: 'Room_Detail',
  components: {
    OverView
  },
  methods: {},
  watch: {
    roomOn(newVal) {
      if (this.roomOn === this.tabName) {
        if ("home" === this.roomOn) {
          console.log(devicesData[newVal])
        } else {
          console.log(newVal)
          console.log(devicesData[newVal])
          this.roomName = newVal //对父组件传过来的值进行监听，如果改变也对子组件内部的值进行改变
        }
      }
    }
  },
  data() {
    return {
      roomName: 'home'
    }
  }
}
</script>
<style>
.box-card {
  width: 90px;
  height: 90px;
}
</style>