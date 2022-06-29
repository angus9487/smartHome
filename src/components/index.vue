<template>
  <div>
    <el-container style="width: 1100px;height: 700px;position: center">
      <el-aside style="width: 140px;height: 700px;">
        <AsideBar/>
      </el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import AsideBar from '@/components/aside/asideBar.vue'

export default {
  name: 'Index-Tab',
  components: {
    AsideBar,
    // Temperature,
    // FloorPlan
  },
  methods: {},
};
</script>
<style>
</style>
