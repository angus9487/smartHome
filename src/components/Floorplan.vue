<template>
  <div class="zonglan" style="position: relative">
    <el-card class="box-card" style="width: 100px; height: 100px; left: 50px;margin-top: 100px; position: absolute">
      <div v-for="o in 4" :key="o" class="text item" style="color: antiquewhite;font-size: 12px; font-weight: 100;"
           :id="o">{{ 'List item ' + o }}
      </div>
    </el-card>
    <svg style="width: 100% ;height: 100%" viewBox="0 0 100 100">
      <polyline points="2,2 2,10 10,10 10,20 20,20" style="fill:none; stroke: #5ae6b7; stroke-width:0.3px;"></polyline>
      <polyline points="80,82 85,95 105,95" style="fill:none; stroke: chocolate; stroke-width:0.3px;"></polyline>
    </svg>
    <img style="z-index: -5" src="dark.png" alt="dark" class="backImg">
    <!--    <img style="z-index: -5" src="back.jpg" alt="back" class="backImg">-->

    <img style="z-index: -4" src="logo.png" alt="dark">
    <img v-for="icon in iconList" :src="icon[1].src" :style="icon[1].style" v-bind:key="icon[0]"
         @click="callService(icon[0])" :alt="icon[0]"/>
    <!--        <img v-for="image in imageDatas" :src="image.src" style="z-index: -4" v-bind:key="image.key" :id="image.key"-->
    <!--             alt="eagle" class="backImg"/>-->
  </div>
</template>
<script>
import {doService} from "@/request/haws";
import {devicesData} from "@/components/main/data";

export default {
  name: 'Index-Tab',
  methods: {
    initConn(con) {
      let getState = {"type": "get_states"}
      con.sendMessagePromise(getState).then(v => this.updateState(v))
      this.trigger(con)
    },
    trigger(con) {
      console.log("trigger")
      let message = {
        "type": "subscribe_trigger",
        "trigger": []
      }
      this.deviceIdList.forEach(v => {
        message.trigger.push({
          "platform": "state",
          "entity_id": v
        })
      })
      con.subscribeMessage(this.updateTriggerData, message)
    },
    updateTriggerData(data) {
      // console.log(data)
      let entity = (data.variables.trigger.entity_id)
      let state = (data.variables.trigger.to_state.state)
      if (state === "on") {
        this.iconList.get(entity).src = "lighton.png"
      } else if (state === "off") {
        this.iconList.get(entity).src = "lightoff.png"
      } else {
        this.iconList.get(entity).src = "undefined.png"
      }
    },
    updateState(entities) {
      let newState = new Map;
      Object.values(entities)
          .sort()
          .forEach((entity) => {
            let entId = entity.entity_id
            if (this.deviceIdList.includes(entId)) {
              newState.set(entId, entity.state)
            }
          })
      this.states = newState;
      this.updateImage()
      this.updateIcon()
      console.log('LeaderLine')
    },
    callService(entity) {
      // console.log(entity)
      let serviceData = {
        entity_id: entity,
      }
      doService("toggle", serviceData)
    },
    updateImage() {
      // console.log("updateImage")
      // this.imageDatas = [{
      //   "key": "logo", "zindex": "z-index: 2", "src": "logo.png"
      // },
      //   {
      //     "key": "cc", "zindex": "z-index: 5", "src": "ciwo.png"
      //   }]
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
    start() {
      // 将定时器名字赋值到变量中
      this.timer = setInterval(() => {
        console.log("开始---");
      }, 3000);
    },
    init() {
      console.log("init")
      for (let location of Object.keys(devicesData)) {
        devicesData[location].light.forEach(v => {
          if (v.icon) {
            this.iconList.set(v.id, v.icon)
          }
          this.deviceIdList.push(v.id);
        })
      }
      // this.deviceList.forEach(v => {
      //   this.iconList.set(v.id, v)
      //   this.deviceIdList.push(v.id);
      // })

      // this.iconList.forEach((v, k) => {
      //   this.diviceList.push(k);
      // })
      // console.log(this.diviceList)
      // console.log(this.iconList.keys())
      // this.$forceUpdate;
    }
  },
  mounted() {
    this.init();
  },
  data() {
    return {
      count: 0,
      imageDatas: [],
      states: new Map,
      deviceIdList: [],
      iconList: new Map
    };
  }
};
</script>
<style>
.zonglan img {
  /*max-width: 100%;*/
  left: 0;
  top: 0;
  position: absolute;
}

.zonglan {
  width: 928px;
  height: 580px;
  left: 0;
  margin-top: 0;
}

.backImg {
  /*width: 100%;*/
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: absolute;
}

.body {
  font-size: 100%
}

.h1 {
  font-size: 6.2em;
  font-weight: 500;
}

.el-card {
  background: transparent !important;
}
</style>
