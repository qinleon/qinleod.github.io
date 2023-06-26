<template>
  <div id="app">
    <el-calendar>
      <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
      <template slot="dateCell" slot-scope="{ date, data }">
        <div style="text-align:center">
          {{
            data.day
              .split('-')
              .slice(2)
              .join('-')
          }}
          <div>{{ getStatu(date) }}</div>
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
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.current.is-today {
  background: rgb(242, 248, 254);
}
</style>
