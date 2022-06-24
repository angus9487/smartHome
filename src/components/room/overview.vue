<template>
  <div class="overview" >
    <el-space size="150px">
      <el-card class="box-card" :span="3" v-for="o in 10" :key="o">
        <div>{{ 'List item ' + o }}</div>
      </el-card>
    </el-space>
    <!--    <span>This is a overview</span>-->
  </div>
</template>
<script>

export default {
  name: 'Over_View',
}
</script>
<style>
.overview {
  min-width: 900px;
  height: 100px;
}
</style>