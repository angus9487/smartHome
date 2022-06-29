<template>

  <div class="siderBardiv">
    <!--  <div>-->
    <!--    <iframe class="homeAssistantS" frameborder="no" src="http://ha.shunqin.store/lovelace-sh/0?kiosk"></iframe>-->
    <!--  </div>-->
    <div class="datediv">
      <div class="timeStr">{{ timeStr }}</div>
      <div>{{ dateStr }}</div>
    </div>
    <div>
      <el-menu router
               style="top: 15%"
               default-active="overview"
               background-color="transparent"
               class="el-menu-vertical-demo"
               :collapse="isCollapse"
               @open="handleOpen"
               @close="handleClose"
      >
        <el-menu-item index="overview" route="overview">
          <el-icon>
            <HomeFilled/>
          </el-icon>
          <template #title>家庭总览</template>
        </el-menu-item>
        <el-menu-item index="allDevice" route="allDevice">
          <el-icon>
            <home-filled/>
          </el-icon>
          <template #title>房间状况</template>
        </el-menu-item>
        <el-menu-item index="ha" route="ha">
          <el-icon>
            <document/>
          </el-icon>
          <template #title>Three</template>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon>
            <setting/>
          </el-icon>
          <template #title>Four</template>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="persondiv">
      <div class="timeStr">{{ timeStr }}</div>
      <div>{{ dateStr }}</div>
    </div>

  </div>
</template>
<script>
import {
  Document,
  Setting,
  HomeFilled,
} from '@element-plus/icons-vue'

export default {
  components: {
    HomeFilled,
    Setting,
    Document
  },
  methods: {
    start() {
      this.timer = setInterval(this.setTime, 1000)
    },
    setTime() {
      let nowdate = new Date()
      // let year = nowdate.getFullYear();
      let month = nowdate.getMonth() + 1
      let date = nowdate.getDate()
      let day = nowdate.getDay()
      let week = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
      let h = nowdate.getHours()
      let m = nowdate.getMinutes()
      let s = nowdate.getSeconds()
      h = this.checkTime(h)
      m = this.checkTime(m)
      s = this.checkTime(s)
      this.timeStr = " " + h + ":" + m
      this.dateStr = month + "月" + date + "日" + week[day]
    },
    checkTime(i) {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
  },
  data() {
    return {
      timeStr: '',
      dateStr: '',
      isCollapse: false,
      timer: null
    }
  },
  mounted() {
    this.start();
  },
  unmounted() {
    clearInterval(this.timer);
  }
}
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 130px;
  min-height: 200px;
}

.homeAssistantS {
  width: 140px;
  height: 200px;
}

.timeStr {
  font-size: 40px;
  font-weight: 400;
}

.siderBardiv {
  height: 680px;
  position: relative;
}

.datediv {
  text-align: center;
  margin: 5px 5px 180px;
}

.persondiv {
  position: absolute;
  bottom: 10px;
}

</style>