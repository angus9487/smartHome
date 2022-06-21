<template>
<!--  <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">-->
<!--    <el-radio-button :label="false">expand</el-radio-button>-->
<!--    <el-radio-button :label="true">collapse</el-radio-button>-->
<!--  </el-radio-group>-->
  <el-menu style="top: 25%"
      default-active="1"
      background-color="transparent"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
  >
    <el-menu-item index="1">
      <el-icon>
        <HomeFilled/>
      </el-icon>
      <template #title>家庭总览</template>
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon>
        <home-filled/>
      </el-icon>
      <template #title>Two</template>
    </el-menu-item>
    <el-menu-item index="3">
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
  Menu as IconMenu,
  Location,
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
</style>