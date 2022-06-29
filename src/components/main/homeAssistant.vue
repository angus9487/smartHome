<template>
  <div>
<!--    <iframe class="homeAssistant" frameborder="no" src="http://192.168.1.10:8123/lovelace-floorplan/default_view?hide_sidebar"></iframe>-->
    <iframe class="homeAssistant"  frameborder="no" src="http://ha.shunqin.store/lovelace-floorplan/default_view?hide_sidebar"></iframe>
  </div>
  <div>
    <el-button type="info" circle size="large">22℃</el-button>
    <el-button type="success" circle size="large">22℃</el-button>
  </div>
</template>
<script>

export default {
  name: 'Home_Assistant'
}
</script>
<style>
.homeAssistant{
  width: 940px;
  height: 650px;
}
</style>