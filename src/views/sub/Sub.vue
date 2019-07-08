<template>
  <div class="sub">
    <!-- 头部部分 -->
    <header>
      <section>
        <i class="mdi mdi-home"></i>
        <a href="" class="home_title">网站首页</a>
        /
        <span class="status">子站管理</span>
      </section>
    </header>
    <!-- 系统设置 -->
    <div class="sub-setting">
      <!-- 导向 -->
      <div class="sub-create">
        <div>
          <span>子站管理</span>
          <button>子站创建导向</button>
        </div>
      </div>

      <!-- 展示列表 -->
      <div class="photoshow">
        <div class="list">
          <ul>
            <li class="thead">
              <div><input type="checkbox" />编号</div>
              <p>网站名称</p>
              <span>子域名</span>
              <article>
                <span>百度收录</span>
                <span>360收录</span>
                <span>搜狗收录</span>
                <span>文章数量</span>
                <span>产品数量</span>
              </article>
              <span>创建时间</span>
              <section>
                <p>状态</p>
                <span>操作</span>
              </section>
            </li>
            <li class="table">
              <div><input type="checkbox" />编号</div>
              <p>网站名称</p>
              <div class="into">
                <span>shangrao</span>
                <a href="">[访问]</a>
              </div>
              <article>
                <span>0</span>
                <span>0</span>
                <span>0</span>
                <span>0</span>
                <span>0</span>
              </article>
              <span>2018-05-03</span>
              <section>
                <p>正常</p>
                <div>
                  <button>修改</button>
                  <button>删除</button>
                </div>
              </section>
            </li>
          </ul>
        </div>
        <div class="options">
          <!-- 按钮选项 -->
          <section class="btn-check">
            <button>全选</button>
            <select>
              <option value="1">操作选项</option>
              <option value="2">删除</option>
            </select>
            <button>提交</button>
          </section>

          <!-- 分页列表 -->
          <section class="fy-list">
            分页栏展示
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>
<style scoped lang="less">
.sub {
  width: 100%;
  height: 100%;
  background: #e6e9ee;
  padding: 10px 10px 0 10px;
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
      a {
        color: #333;
        margin: 0 10px;
        &:hover {
          color: #23527c;
        }
      }
      span {
        color: #444444;
        margin-left: 10px;
      }
    }
  }
  .sub-setting {
    width: 100%;
    height: 529px;
    background: #ffffff;
    .sub-create {
      height: 50px;
      background: #ffffff;
      margin: 10px 0;
      padding: 0 10px;

      div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 50px;
        border-bottom: 1px solid #dbdbdb;
        span {
          font-size: 15px;
        }
      }
    }
    .photoshow {
      width: 100%;
      .list {
        width: 100%;
        ul {
          display: flex;
          flex-direction: column;
          padding: 10px;
          li {
            display: flex;
            flex-direction: row;
            align-items: center;
            width: 100%;
            height: 35px;
            font-size: 12px;
            border-left: 1px solid #dbdbdb;
            border-bottom: 1px solid #dbdbdb;
            border-right: 1px solid #dbdbdb;
            div {
              width: 150px;
              input {
                margin: 0 10px;
              }
            }
            p {
              width: 252px;
            }
            span {
              width: 180px;
            }
            article {
              span {
                width: 80px;
                margin-right: 32px;
              }
            }
          }
          .thead {
            background: #f5f6fa;
            border-top: 1px solid #dbdbdb;
            section {
              display: flex;
              flex-direction: row;
              width: 200px;
              p {
                width: 80px;
              }
              span {
                width: 120px;
              }
            }
          }
          .table {
            .into {
              width: 180px;
            }
            article {
              span {
                display: inline-block;
                width: 80px;
                margin-right: 0;
              }
            }
            section {
              display: flex;
              flex-direction: row;
              align-items: center;
              width: 200px;
              p {
                width: 80px;
              }
              div {
                width: 120px;
                button {
                  width: 40px;
                  height: 25px;
                  padding: 0;
                  &:first-child {
                    margin-right: 10px;
                  }
                }
              }
            }
          }
        }
      }
    }
    .options {
      display: flex;
      justify-content: space-between;
      padding: 10px 10px;
      .btn-check {
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
      .fy-list{

      }
    }
  }
}
</style>
