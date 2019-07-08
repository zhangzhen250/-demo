<template>
  <div class="basic">
    <section>
      <ul>
        <li
          v-for="(message, key) in company"
          :key="key"
          :class="{ other: key == 11 }"
        >
          {{ message }}
        </li>
      </ul>
      <ul>
        <li><input type="text" value="" /></li>
        <li><input type="text" value="" /></li>
        <li><input type="text" value="" /></li>
        <li><input type="text" value="" /></li>
        <li><input type="text" value="" /></li>
        <li><input type="text" value="" /></li>
        <li><input type="text" value="" /></li>
        <li><input type="text" value="" /></li>

        <li><input type="text" value="" /><button>打开图库</button></li>
        <li><input type="text" value="" /><button>打开图库</button></li>

        <li><input type="text" value="" /></li>
        <li class="other"><input class="white" type="text" value="" /></li>
        <li><input type="text" value="" /></li>
        <li><button>提交</button></li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: "banner",
  data() {
    return {
      company: [
        "企业名称：",
        "企业简称：",
        "企业电话：",
        "企业手机：",
        "企业400：",
        "企业QQ：",
        "企业地址：",
        "企业网址：",
        "企业logo：",
        "网站ICO：",
        "经营范围：",
        "企业介绍：",
        "备案号：",
        " "
      ]
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
.basic {
  width: 100%;
  height: 100%;
  padding-bottom: 30px;
  section {
    width: 100%;
    height: 648px;
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 10px;
    margin-top: 15px;
    ul {
      li {
        line-height: 24px;
        font-size: 12px;
        padding: 10px;
        font-size: 12px;
      }
      &:first-child {
        width: 16%;
        li {
          height: 45px;
          text-align: right;
          border-left: 1px dotted #e8e8e8;
          border-top: 1px dotted #e8e8e8;
          border-right: 1px dotted #e8e8e8;
          background: #f8f8f8;
          &:last-child{
            border-bottom: 1px dotted #e8e8e8;
          }
        }
      }
      &:last-child {
        width: 84%;
        .white {
          height: 42px;
        }
        li {
          display: flex;
          flex-direction: row;
          align-items: center;
          width: 100%;
          height: 45px;
          border-top: 1px dotted #e8e8e8;
          border-right: 1px dotted #e8e8e8;
          &:last-child{
            border-bottom: 1px dotted #e8e8e8;
          }
          input {
            width: 50%;
            &:hover {
              border-color: #32dc7c;
            }
          }
          button{
            width: 80px;
            margin-left: 10px;
            
          }
        }
      }
    }
  }
}

.basic > section > ul > li.other {
  height: 63px;
}
.basic > section > ul > li.middle {
  background: red;
}
</style>