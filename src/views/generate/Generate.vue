<template>
  <div class="generate">
    <!-- 头部信息 -->
    <header-style :title="header"></header-style>
    <!-- 提示信息 -->
    <section class="tips">
      <p>生成管理</p>
    </section>
    <!-- 列表部分 -->
    <section class="nav-list">
      <div class="bg-list">
        <ul>
          <li
            v-for="(siglelist, key) in paragraph"
            :key="key"
            :class="{ active: active == key }"
          >
            {{ siglelist }}
          </li>
        </ul>
      </div>
      <div class="part-table">
        <section class="left-part">
          <button>创建分类</button>
          <ul>
            <li class="action">
              <span>分类</span>
              <div>操作</div>
            </li>
            <li class="open-list">
              <div>
                <i class="mdi mdi-home"></i>
              </div>
            </li>
          </ul>
        </section>
        <section class="right-part">
          <section class="btn">
            <button>录入数据</button>
            <button>录入数据</button>
          </section>
          <ul>
            <li>
              <div class="number"><input type="checkbox" />编号</div>
              <p>标题</p>
              <span>内容</span>
            </li>
            <li></li>
          </ul>
        </section>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      header: "生成管理",
      paragraph: [
        "文章预览",
        "地区",
        "前缀",
        "关键字",
        "后缀",
        "配词",
        "描述",
        "图片",
        "内容片段",
        "生成规则",
        "扩展",
        "长尾",
        "疑问"
      ],
      active: 0
    };
  },
  components: {}
};
</script>

<style scoped lang="less">
.generate {
  width: 100%;
  height: 100%;
  padding: 10px;
  .tips {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 50px;
    padding: 10px;
    background: #fff;
    font-size: 14px;
    margin-top: 10px;
  }
  .nav-list {
    .bg-list {
      width: 100%;
      background: #fff;
      ul {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 0 10px;
        border-top: 1px solid #dbdbdb;
        border-bottom: 1px solid #dbdbdb;

        li {
          margin: 10px 10px 10px 0;
          padding: 10px;
          display: inline-block;
          background-color: #f5f6fa;
          border: 1px solid #ddd;
          padding: 0 15px;
          line-height: 30px;
          font-size: 14px;
          color: #555;
          &:hover {
            background-color: #eaeaea;
          }
        }
        .active {
          background: #20a53a;
          border-color: #20a53a;
          &:hover {
            background-color: #20a53a;
          }
        }
      }
    }
    .part-table {
      display: flex;
      flex-direction: row;
      padding: 10px;
      background: #fff;
      font-size: 12px;
      .left-part {
        width: 250px;
        border-right: 1px solid #dbdbdb;
        margin-right: 10px;
        ul {
          margin: 10px 10px 10px 0;
          li {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-left: 1px solid #dbdbdb;
            border-bottom: 1px solid #dbdbdb;
            border-right: 1px solid #dbdbdb;
          }
          .action {
            background-color: #f5f6fa;
            height: 35px;
            border-top: 1px solid #dbdbdb;
            span {
              width: 158px;
              margin-left: 10px;
            }
            div {
              flex: 1;
            }
          }
          .open-list {
            height: 44px;
            div {
              display: flex;
              flex-direction: row;
            }
          }
        }
      }
      .right-part {
        flex: 1;
        ul {
          margin: 10px 0;
          li {
            display: flex;
            flex-direction: row;
            align-items: center;
            height: 44px;
            border-left: 1px solid #dbdbdb;
            border-bottom: 1px solid #dbdbdb;
            border-right: 1px solid #dbdbdb;
            .number {
              width: 150px;
              input {
                margin: 0 8px;
              }
            }
            &:first-child {
              background-color: #f5f6fa;
              height: 35px;
              border-top: 1px solid #dbdbdb;
            }
          }
        }
      }
    }
  }
}
button {
  margin-right: 5px;
}
</style>

