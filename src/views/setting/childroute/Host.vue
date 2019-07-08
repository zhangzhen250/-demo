<template>
  <div class="host">
    <section>
      <ul>
        <li>主域名:</li>
        <li></li>
      </ul>
      <ul>
        <li><input type="text" :value="hostname" /></li>
        <li><button>提交</button></li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: "host",
  data() {
    return {
      hostname: "lxjq168.com"
    };
  },
  created() {},
  mounted() {},
  computed: {},
  methods: {},
  watch: {}
};
</script>

<style scoped lang="less">
.host {
  width: 100%;
  height: 97px;
  margin: 15px 0;
  section {
    display: flex;
    flex-wrap: wrap;
    ul {
      display: flex;
      flex-direction: column;
      &:first-child {
        width: 150px;
        text-align: right;
        li {
          line-height: 45px;
          padding-right: 10px;
        }
      }
      &:last-child {
        flex: 1;
        line-height: 45px;
        li {
          padding-left: 10px;
        }
      }
      li {
        height: 45px;
        border: 1px dotted #e8e8e8;
        input {
          min-width: 400px;
          height: 24px;
          color: #000000;
          font-size: 12px;
          padding: 0 5px;
        }
        button {
          width:80px;
          vertical-align: middle;
          background-color: #fff;
          border: 1px solid #ccc;
          border-radius: 3px;
          cursor: pointer;
          letter-spacing: 1px;
          padding: 5px 10px;
          color: #555;
          &:hover {
            background-color: #20a53a;
            border-color: #20a53a;
            color: #fff;
          }
        }
      }
    }
  }
}
</style>