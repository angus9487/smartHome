<template>
  <div class="timeImage" style="position: relative" v-if="renderComponent">
    <img :style="indexdark" src="dark.png" alt="dark">
    <!--    <img v-for="(value,key) in iconList" :src="iconState.$key === undefined ? 'undefined.png' : iconState.$key"-->
    <!--         :style="value.style" v-bind:key="key" @cancel="callService" :alt="iconState.$key"/>-->
    <img v-for="icon in iconList" :src="icon[1].src" :style="icon[1].style" v-bind:key="icon[0]"
         @click="callService(icon[0])" :alt="icon[0]"/>
    <img v-for="image in imageDatas" :src="image.src" :style="image.zindex" v-bind:key="image.key" :alt="image.key"/>
  </div>
</template>
<script>
import {doService} from "@/request/haws";

export default {
  name: 'Index-Tab',
  methods: {
    updateState(entities) {
      let newState = new Map;
      Object.values(entities)
          .sort()
          .forEach((entity) => {
            let entId = entity.entity_id
            if (this.diviceList.includes(entId)) {
              newState.set(entId, entity.state)
            }
          })
      this.states = newState;
      this.updateImage()
      this.updateIcon()
    },
    callService(entity) {
      console.log(entity)
      let serviceData = {
        entity_id: entity,
      }
      doService("toggle", serviceData)
    },
    updateImage() {
      console.log("updateImage")
      this.imageDatas = [{
        "key": "logo", "zindex": "z-index: 2", "src": "logo.png"
      },
        {
          "key": "cc", "zindex": "z-index: 5", "src": "ciwo.png"
        }]
    },
    updateIcon() {
      let state
      this.iconList.forEach((v, k) => {
        state = this.states.get(k)
        if (state === "on") {
          v.src = "lighton.png"
        } else if (state === "off") {
          v.src = "lightoff.png"
        } else {
          v.src = "undefined.png"
        }
      })
    },
    init() {
      this.iconList.set("switch.zhu_wei_ding_deng",
          {
            "style": "z-index: 10;margin-top: 5.5%;left: 5%;zoom:0.7;",
            "src": "undefined.png"
          })
      this.iconList.set("switch.zhu_wei_jing_qian_deng",
          {
            "style": "z-index: 10;margin-top: 5.5%;left: 10%;zoom:0.7;",
            "src": "undefined.png"
          })
      this.iconList.set("switch.zhu_wo_da_deng",
          {
            "style": "z-index: 10;margin-top: 5.5%;left: 15%;zoom:0.7;",
            "src": "undefined.png"
          })
      this.iconList.set("switch.zhu_wo_she_deng",
          {
            "style": "z-index: 10;margin-top: 5.5%;left: 30%;zoom:0.7;",
            "src": "undefined.png"
          })
      this.iconList.forEach((v, k) => {
        this.diviceList.push(k);
      })
      console.log(this.diviceList)
      // console.log(this.iconList.keys())
      // this.$forceUpdate;
    }
  },
  data() {
    return {
      count: 0,
      renderComponent: true,
      indexdark: "z-index: 8",
      imageDatas: [],
      states: new Map,
      iconList: new Map,
      diviceList: []
    };
  },
  mounted() {
    this.init();
  }
};
</script>
<style>
.timeImage img {
  max-width: 100%;
  left: 0px;
  top: 0px;
  position: absolute;
}

/*.img1 {*/
/*  z-index: 1;*/
/*  position: absolute;*/
/*}*/
/*.img2 {*/
/*  z-index: 2;*/
/*  position: absolute;*/
/*}*/
</style>
