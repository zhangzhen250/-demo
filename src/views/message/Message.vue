<template>
  <div class="nav">
    <!-- 头部部分 -->
    <header>
      <section>
        <i class="mdi mdi-home"></i>
        <a href="" class="home_title">网站首页</a>
        /
        <span class="status">留言管理</span>
      </section>
    </header>
    <!-- 系统设置 -->
    <div class="sub-setting">
      <!-- 导向 -->
      <div class="sub-create">
        <div>
          <span>留言管理</span>
        </div>
      </div>

      <!-- 展示列表 -->
      <div class="photoshow">
        <div class="list">
          <ul>
            <li class="thead">
              <div><input type="checkbox" />编号</div>
              <p>姓名</p>
              <p>电话</p>
              <span>地址</span>
              <section>
                <span>内容</span>
                <div>
                  <span>
                    状态
                  </span>
                  <p>操作</p>
                </div>
              </section>
            </li>
            <li class="table">
              <div><input type="checkbox" />2</div>
              <p>李晓明</p>
              <p>1321546131</p>
              <span>http://cialicheap.com</span>
              <section>
                <span>Parlodel Viagra Salud Valium ...</span>
                <div>
                  <span>正常</span>
                  <div>
                    <a href="">修改</a>
                    <span>|</span>
                    <a href="">删除</a>
                  </div>
                </div>
              </section>
            </li>
          </ul>
        </div>
        <div class="options">
          <!-- 按钮选项 -->
          <button>全选</button>
          <select>
            <option value="1">操作选项</option>
            <option value="2">删除</option>
          </select>
          <button>提交</button>
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
.nav {
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
            span {
              width: 318px;
            }
            p {
              width: 120px;
            }
            section {
              display: flex;
              flex-direction: row;
              align-items: center;
              span {
                width: 450px;
              }
              div {
                display: flex;
                flex-direction: row;
                align-items: center;
                width: 200px;
                span {
                  width: 80px;
                }
                p {
                  width: 120px;
                }
              }
            }
          }
          .thead {
            background: #f5f6fa;
            border-top: 1px solid #dbdbdb;
          }
          .table {
            section {
              display: flex;
              flex-direction: row;
              align-items: center;
              div{
                span{
                  width: 80px;
                }
                div{
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  width:120px;
                  span{
                    width: 3px;
                    margin: 0 5px;
                  }
                  a{
                    color: #20a53a;
                    &:hover{
                      text-decoration: underline;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    .options {
      padding: 10px 10px;

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
}
</style>
