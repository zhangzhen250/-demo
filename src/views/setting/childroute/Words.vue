<template>
  <div class="banner">
    <div class="container">
      <!-- 数据展示部分  -->
      <div class="photoshow">
        <div class="list">
          <ul>
            <li>
              <div class="tr">
                <div><input type="checkbox" />编号</div>
                <p>搜索词</p>
              </div>
              <div class="td">
                <p>热度</p>
                <span>操作</span>
              </div>
            </li>
            <li v-for="(value, key) in veraldata" :key="key">
              <div class="tr">
                <div><input type="checkbox" />{{ value.num }}</div>
                <p>{{ value.describe }}</p>
              </div>

              <div class="td">
                <p>{{ value.order }}</p>
                <span>
                  <button>修改</button>
                  <button>删除</button>
                </span>
              </div>
            </li>
          </ul>
        </div>
        <div class="options">
          <button>全选</button>
          <select>
            <option value="1">操作选项</option>
            <option value="2">删除</option>
          </select>
          <button>提交</button>
        </div>
      </div>

      <!-- 需要提交数据的部分 -->
      <div class="photodata">
        <ul>
          <li>
            <div>搜索词：</div>
            <input type="text" value="" />
          </li>
          <li>
            <div>热度：</div>
            <input type="text" value="" />
          </li>
          <li>
            <div></div>
            <button>提交</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "banner",
  data() {
    return {
      veraldata: [
        {
          num: "1",
          image: "http://pic1.nipic.com/2008-08-14/2008814183939909_2.jpg",
          describe: "幻灯图片",
          order: "23"
        },
        {
          num: "2",
          image: "http://pic1.nipic.com/2008-08-14/2008814183939909_2.jpg",
          describe: "幻灯图片",
          order: "50"
        },
        {
          num: "3",
          image: "http://pic1.nipic.com/2008-08-14/2008814183939909_2.jpg",
          describe: "幻灯图片",
          order: "160"
        }
      ],
      imgSize: {
        width: "30px",
        height: "30px"
      }
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
.banner {
  width: 100%;
  padding-bottom: 15px;
  .container {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 10px;
    .photoshow {
      .list {
        ul {
          li {
            line-height: 35px;
            display: flex;
            justify-content: space-between;
            div {
              display: flex;
              justify-content: space-between;
              align-items: center;
              align-content: center;
              vertical-align: middle;
            }
            .tr {
              div {
                display: flex;
                justify-content: left;
                width: 150px;
                text-align: left;
                input {
                  margin: 10px;
                }
              }
              p {
                width: 120px;
              }
              span {
                margin-left: 18px;
              }
              img {
                display: block;
                margin: 8px 12px;
              }
            }
            &:first-child {
              background: #f5f6fa;
              border: 1px solid #dbdbdb;
            }
          }
          .td {
            p {
              width: 120px;
            }
            span {
              display: flex;
              flex-direction: row;
              width: 180px;
              button {
                width: 50px;
                margin-left: 0;
                margin-right: 10px;
              }
            }
          }
          &:last-child {
            li {
              border-left: 1px solid #dbdbdb;
              border-bottom: 1px solid #dbdbdb;
              border-right: 1px solid #dbdbdb;
            }
          }
        }
      }
      .options {
        padding: 10px 0;
        select {
          width: 80px;
          margin: 0 15px;
          padding: 2px;
          border: 1px solid;
          border-top-color: currentcolor;
          border-right-color: currentcolor;
          border-bottom-color: currentcolor;
          border-left-color: currentcolor;
          border-color: #666 #ccc #ccc #666;
          background-color: #fff;
          font-size: 12px;
          color: #333;
        }
      }
    }

    .photodata {
      ul {
        li {
          display: flex;
          flex-direction: row;
          width: 100%;
          line-height: 45px;
          border-left: 1px dotted #e8e8e8;
          border-bottom: 1px dotted #e8e8e8;
          border-right: 1px dotted #e8e8e8;
          div {
            width: 150px;
            line-height: 45px;
            text-align: right;
            padding-right: 10px;
            background-color: #f8f8f8;
            border-right: 1px dotted #e8e8e8;
            font-weight: normal;
            color: #333;
            font-size: 12px;
          }
          &:first-child {
            border-top: 1px dotted #e8e8e8;
          }
          input {
            width: 400px;
            height: 24px;
            align-self: center;
            margin-left: 10px;
            border: 1px solid;
            border-top-color: currentcolor;
            border-right-color: currentcolor;
            border-bottom-color: currentcolor;
            border-left-color: currentcolor;
            border-color: #666 #ccc #ccc #666;
            background-color: #fff;
            font-size: 12px;
            color: #333;
            &:hover {
              border-color: #20a53a;
              background: #fff;
            }
          }
          &:last-child {
            height: 51px;
          }
        }
      }
    }
  }
}

button {
  align-self: center;
  width: 80px;
  font-size: 12px;
  margin-left: 10px;
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
</style>