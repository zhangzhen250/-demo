<template>
  <div class="site">
    <div>
      <ul>
        <li v-for="(mess, key) in codemessage" :key="key">
          <div>
            <span>{{ mess.sign }}</span>
          </div>
          <section>
            <textarea
              :type="mess.type"
              :value="mess.value"
              :placeholder="mess.placeholder"
            ></textarea>
          </section>
        </li>
        <li>
          <div><span></span></div>
          <section>
            <button>提交</button>
          </section>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "site",
  data() {
    return {
      codemessage: [
        {
          sign: "JS代码:",
          type: "text",
          value: "",
          placeholder: "请填写JS代码"
        },
        {
          sign: "标语1:",
          type: "text",
          value: "流行街区，360°全方位一路保驾护航免你后顾之忧",
          placeholder: ""
        },
        {
          sign: "标语2:",
          type: "textarea",
          value: "9大系列,优质商品,7天更新,9.9元劲爆低价",
          placeholder: ""
        },
        {
          sign: "标语3:",
          type: "text",
          value: "",
          placeholder: "请填写宣传口号或标语，句子不宜过长"
        }
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
.site {
  width: 100%;
  margin: 15px 0 20px;
  padding-bottom: 20px;
  div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    ul {
      width: 100%;
      li {
        display: flex;
        width: 100%;
        border: 1px dotted #e8e8e8;
        div {
          display: flex;
          justify-content: right;
          align-self: center;
          width: 150px;
          span {
            padding-right: 10px;
            text-align: right;
            
           
          }
        }

        section {
          padding: 10px;
          border-left: 1px dotted #e8e8e8;
          textarea {
            width: 400px;
          }
        }
      }
      &:last-child {
        p {
          height: 51px;
        }
        section {
          button {
            width: 80px;
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
}
</style>