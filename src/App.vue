<template>
  <Index/>
<!--  <div>-->
<!--    <img src="homekit-bg-orange.jpg" style="width: 100%;height: 100%" class="header-background" alt="bg"/>-->
<!--  </div>-->
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import Index from '@/components/index.vue'; // @ is an alias to /src

@Options({
  components: {
    Index,
  },
})
export default class HomeView extends Vue {
}
</script>

<style>
/*#app {*/
/*  font-family: Avenir, Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*}*/


.header-background {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -9;
}
</style>
