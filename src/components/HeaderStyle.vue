<template>
  <header>
    <section>
      <i class="mdi mdi-home"></i>
      <a href="">网站首页</a>
      /
      <span>{{title}}</span>
    </section>
    <slot></slot>
  </header>
</template>

<script>
export default {
  data() {
    return {};
  },
  props:["title"],
  created() {},
  mounted() {},
  computed: {},
  methods: {},
  watch: {}
};
</script>

<style scoped lang="less">
header {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 40px;
    background: #fff;
    display: flex;
    justify-content: space-between;
    font: 14px Tahoma, "Microsoft Yahei", "Simsun";
    section {
      display: flex;
      flex-wrap: wrap;
      font-size: 14px;
      i {
        margin-left: 12px;
        font-size: 14px;
        color: #444444;
      }
      a{
        color: #333;
        margin: 0 10px;
        &:hover{
          color:#23527c;
        }
      }
      span{
        color: #444444;
      }
    }
  }
</style>
