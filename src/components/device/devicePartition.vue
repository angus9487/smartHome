<template>
  <el-tabs type="border-card" @tab-click="handleClick">
    <el-tab-pane label="家庭" name="home">
      <template #label>
            <span class="custom-tabs-label">
              <el-icon><House/></el-icon>
              <span>家庭</span>
            </span>
      </template>
      Route
    </el-tab-pane>
    <el-tab-pane v-for="room in roomList" :label="room.label" :name="room.name" :key="room.name" >
      <RoomDetail :roomOn=roomName :tabName="room.name"></RoomDetail>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import {House} from '@element-plus/icons-vue'
import RoomDetail from '@/components/device/roomDetail.vue'
import {devicesData} from '@/components/main/data'

export default {
  name: 'All_Detail',
  components: {
    RoomDetail,
    House
    // Calendar
  },
  data() {
    return {
      roomName: "",
      roomList: []
    }
  },
  methods: {
    init() {
      for (let location of Object.keys(devicesData)) {
        this.roomList.push({"label": devicesData[location].tab, "name": location})
      }
      console.log(this.roomList)
    },
    handleClick(pane, ev) {
      this.roomName = pane.paneName.toString()
      console.log(pane.uid)
    },
    changeTabName() {
      this.test = ""
    },
  },
  mounted() {
    this.init();
  },
};
</script>
<style>
.el-tabs__content {
  /*padding: 32px;*/
  /*color: #6b778c;*/
  /*font-size: 32px;*/
  /*font-weight: 600;*/
  width: 850px;
  height: 580px
}

.demo-tabs .custom-tabs-label .el-icon {
  vertical-align: middle;
}

.demo-tabs .custom-tabs-label span {
  vertical-align: middle;
  margin-left: 4px;
}
</style>
