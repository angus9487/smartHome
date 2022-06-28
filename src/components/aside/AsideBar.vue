<template>
  <!--  <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">-->
  <!--    <el-radio-button :label="false">expand</el-radio-button>-->
  <!--    <el-radio-button :label="true">collapse</el-radio-button>-->
  <!--  </el-radio-group>-->

  <div >
    <iframe class="homeAssistantS" frameborder="no" src="http://ha.shunqin.store/lovelace-sh/0?kiosk"></iframe>
  </div>

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
</template>
<script lang="ts" setup>
import {ref} from 'vue'
import {
  Document,
  Setting,
  HomeFilled,
} from '@element-plus/icons-vue'

const isCollapse = ref(false)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
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
</style>