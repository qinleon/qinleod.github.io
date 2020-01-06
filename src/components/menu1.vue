<template>
  <div class="hello">
   menu1
  </div>
</template>

<script>
export default {
  name: 'menu1',
  props: {
    msg: String
  },
  mounted:function(){
    this.$message('这是一条消息提示');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
