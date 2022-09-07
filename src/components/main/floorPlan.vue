<template>
  <el-row>
    <el-col class="top">
      <el-button type="info" plain round>离家</el-button>
      <el-button type="info" plain round>回家</el-button>
      <el-button type="info" plain round>观影</el-button>
      <!--      <iframe class="tianqi" allowtransparency="true" frameborder="0" scrolling="no"-->
      <!--              src="//tianqi.2345.com/plugin/widget/index.htm?s=2&z=1&t=0&v=0&d=5&bd=0&k=&f=&ltf=009944&htf=cc0000&q=1&e=0&a=1&c=54511&w=575&h=96&align=center"></iframe>-->
    </el-col>
    <el-col>
      <div class="zonglan">
        <el-button v-for="climate in climateList" :type="climate[1].icon.type" circle size="large"
                   :style="climate[1].icon.style" @click="this.setClimateUrl(climate[0])"
                   :key="climate[0]">{{ climate[1].state.temperature + '℃' }}
        </el-button>
        <el-dialog
            v-model="dialogVisible"
            title="详细信息"
            center
            width="35%">
          <div align="center">
            <iframe class="kongtiao" frameborder="no" :src="this.climateUrl"></iframe>
          </div>
        </el-dialog>
        <div>
          <img src="dark.png" alt="dark" class="backImg" usemap="#drama" />
          <map id="drama" name="drama">
            <area v-for="area in areaMap" v-bind:key="area[0]" :shape=area[1].shape :coords=area[1].coords @click="callService(area[0])" alt="area[0]" />
          </map>
          <!--        <img src="anniu.png" alt="dark" class="zhuwodetaile" @click="dialogVisible = true">-->
          <img v-for="icon in iconMap" :src="icon[1].src" :style="icon[1].style" v-bind:key="icon[0]"
               @click="callService(icon[0])" :alt="icon[0]"/>
          <div v-for="image in imageMap" v-bind:key="image[0]">
            <img v-if="image[1].show" :src="image[1].src" :style="image[1].style"
                 :alt="image[0]" class="lightImg" />
          </div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>
<script>
import {doService, getConnection} from "@/request/haws";
import {devicesData} from "@/components/main/data";

export default {
  // props: ['connect'],
  // watch: {
  //   connect: function (val) {
  //     this.initConn(val)
  //     console.log("fp watch");   // 接收父组件的值
  //   }
  // },
  components: {},
  name: 'Index-Tab',
  methods: {
    testClick(id) {
      console.log("click:"+id)
    },
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
      if (this.iconMap.has(entity)) {
        this.setIcon(this.iconMap.get(entity), state)
      }
      if (this.imageMap.has(entity)) {
        this.setImage(this.imageMap.get(entity), state)
      }
    },
    setIcon(v, state) {
      if (state === "on") {
        v.src = "lighton.png"
      } else if (state === "off") {
        v.src = "lightoff.png"
      } else {
        v.src = "undefined.png"
      }
    },
    setImage(v, state) {
      v.show = state === "on";
    },
    updateState(entities) {
      let newState = new Map;
      Object.values(entities)
          .sort()
          .forEach((entity) => {
            let entId = entity.entity_id
            if (this.deviceIdList.includes(entId)) {
              newState.set(entId, entity)
            }
          })
      this.states = newState;
      this.updateImage()
      this.updateIcon()
      this.updateClimate()
      // console.log(this.states)
    },
    callService(entity) {
      // console.log(entity)
      let serviceData = {
        entity_id: entity,
      }
      doService("toggle", serviceData)
    },
    updateImage() {
      let state
      this.imageMap.forEach((v, k) => {
        state = this.states.get(k).state
        this.setImage(v, state)
      })
    },
    updateIcon() {
      let state
      this.iconMap.forEach((v, k) => {
        state = this.states.get(k).state
        this.setIcon(v, state)
      })
    },
    updateClimate() {
      let state
      let deviceInfo
      this.climateList.forEach((v, k) => {
        deviceInfo = this.states.get(k)
        state = deviceInfo.state
        v.state.temperature = deviceInfo.attributes.temperature
        if (state === "undefined") {
          v.icon.type = "info"
        } else if (state === "off") {
          v.icon.type = ""
        } else {
          v.icon.type = "success"
        }
      })
    },
    start() {
      // 将定时器名字赋值到变量中
      this.timer = setInterval(() => {
        console.log("开始---");
      }, 3000);
    },
    setClimateUrl(climate) {
      // console.log(climate.substring(8))
      this.dialogVisible = true
      this.climateUrl = 'http://192.168.1.10:8123/lovelace-sh/' + climate.substring(8) + '?kiosk'
    },
    init() {
      getConnection().then(con => {
        this.initConn(con)
      })
      for (let location of Object.keys(devicesData)) {
        if (devicesData[location].light) {
          devicesData[location].light.forEach(v => {
            if (v.icon) {
              this.iconMap.set(v.id, v.icon)
            }
            if (v.image) {
              this.imageMap.set(v.id, v.image)
            }
            if (v.area) {
              this.areaMap.set(v.id, v.area)
            }
            this.deviceIdList.push(v.id);
          })
        }
        if (devicesData[location].climate) {
          let initState = {"state": "off", "current_temperature": 26.0, "temperature": 26.0}
          let climate = devicesData[location].climate
          climate.state = initState
          // climate.icon.type = "info"
          climate.icon.type = "success"
          this.climateList.set(climate.id, climate)
          this.deviceIdList.push(climate.id);
        }
      }
      // console.log(this.imageMap)
    }
  },
  mounted() {
    this.init();
  },
  data() {
    return {
      dialogVisible: false,
      count: 0,
      imageMap: new Map,
      states: new Map,
      deviceIdList: [],
      climateUrl: '',
      climateList: new Map,
      iconMap: new Map,
      areaMap: new Map
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

.baseimg {
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
  position: relative;
  margin-left: 0;
}

.backImg {
  /*width: 100%;*/
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: absolute;
  z-index: 2;
  pointer-events: auto;
}

.lightImg {
  /*width: 100%;*/
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: absolute;
  z-index: 2;
  pointer-events: none;
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

.kongtiao {
  width: 300px;
  height: 350px;
  position: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.top {
  width: 1000px;
  height: 80px;
  margin-top: 0
}

.top button {
  width: 100px;
  height: 40px
}

.tianqi {
  position: center;
  width: 575px;
  height: 96px;
  margin-top: 0px;
}
</style>
