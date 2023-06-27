<template>
  <div id="app">
    <el-calendar>
      <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
      <template slot="dateCell" slot-scope="{ date, data }">
        <div class="box" :class="getStyle(date)">
          {{
            data.day
              .split('-')
              .slice(2)
              .join('-')
          }}
          <div>{{ getStatu(date) }}</div>
          <img v-if="getStyle(date) == 'zhi'" src="./assets/zhi.png" alt="" style="width: 20px;" />
          <img v-if="getStyle(date) == 'bai'" src="./assets/zhi.png" alt="" style="width: 20px;" />
          <img v-if="getStyle(date) == 'ye'" src="./assets/ye.png" alt="" style="width: 20px;" />
          <img v-if="getStyle(date) == 'xiu'" src="./assets/xiu.png" alt="" style="width: 20px;" />
        </div>
      </template>
    </el-calendar>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {},
  data() {
    return {
      date1: '2023-06-25'
    }
  },
  methods: {
    getStatu(date) {
      let arr = ['治', '白', '夜', '休', '休']
      let diff = (date.getTime() - new Date(this.date1).getTime()) / (1000 * 3600 * 24)
      return arr.splice(diff % 5, 1)[0]
    },
    getStyle(date) {
      let arr = ['zhi', 'bai', 'ye', 'xiu', 'xiu']
      let diff = (date.getTime() - new Date(this.date1).getTime()) / (1000 * 3600 * 24)
      return arr.splice(diff % 5, 1)[0]
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.box {
  width: 100%;
  height: 100%;
  text-align: center;
}
.zhi {
  background: #f0ebeb;
}
.bai {
  background: #f0ebeb;
}
.ye {
  /* background: #77818b; */
  /* color: #fff; */
}
.xiu {
  /* background: #1cad76; */
}
.current.is-today {
  background: rgb(242, 248, 254);
}
</style>
