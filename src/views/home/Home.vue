<template>
  <div class="home">
    <!-- 头部状态菜单栏 -->
    <header>
      <section>
        <i class="mdi mdi-home"></i>
        <a href="" class="home_title">网站首页</a>
        /
        <span class="status">站点状态</span>
      </section>

      <section class="out">
        <span>lxjq</span>
        <a href="">退出</a>
      </section>
    </header>

    <!-- 状态信息栏 -->
    <section class="statu-infor">
      <section class="guiter">状态信息</section>
      <section class="nav-infor">
        <ul>
          <li>
            <span>网站</span>
            <section>
              <span v-if="total.loading">
                加载中
              </span>
              <template v-else>
                <p>{{ total.sub }}个</p>
                <span>套餐{{ total.limit }}个</span>
              </template>
            </section>
          </li>
          <li>
            <span>收录</span>
            <section>
              <p>0个</p>
              <span class="internet-companies">
                <p>百度：<i>(0)</i></p>
                <p>360：<i>(0)</i></p>
                <p>搜狗：<i>(0)</i></p>
              </span>
            </section>
          </li>
          <li>
            <span>流量</span>
            <section>
              <p>0个</p>
              <span>历史3708个</span>
            </section>
          </li>
        </ul>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      total: {
        loading: true,
        sub: 0,
        limit: 0
      },
      crawl: {
        baidu: 0,
        so: 0,
        sogou: 0
      },
      visit: {
        today: 0,
        total: 0
      }
    };
  },
  mounted() {
    this.onAjaxTotal();
    this.onAjaxTotal();
  },
  methods: {
    onAjaxTotal() {
      this.total.loading = true;
      this.$http.get("https://api.ipify.org/?format=json").then(json => {
        this.total.loading = false;
        this.total.sub = 11;
        this.total.sub = 33;
      });
    }
  }
};
</script>

<style scoped lang="less">
.home {
  height: 100%;
  background: #e6e9ee;
  padding: 10px 10px 0 10px;
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
      &:first-child {
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
        }
      }
    }
  }
}

.home_title {
  text-decoration: none;
  color: #000000;
  font-family: "Microsoft Yahei";
  margin: 0 12px;
}
.home_title:hover {
  color: #164022;
}
.status {
  font-size: 15px;
  text-decoration: none;
  color: #000000;
  font-family: "Microsoft Yahei";
  margin: 0 12px;
}
header .out > span {
  font-size: 15px;
  color: #000000;
  font-family: "Microsoft Yahei";
  margin: 0 12px;
}
header .out > a {
  font-size: 15px;
  color: #000000;
  font-family: "Microsoft Yahei";
  margin: 0 12px;
  text-decoration: none;
}
.statu-infor {
  padding: 0 10px;
  background: #ffffff;
  margin-top: 10px;
}
.statu-infor .guiter {
  font-size: 14px;
  color: #666666;
  padding-top: 4px;
  line-height: 36px;
  border-bottom: 1px solid #dbdbdb;
}
.nav-infor > ul {
  display: flex;
  flex-wrap: wrap;
}
.nav-infor > ul > li {
  min-width: 240px;
  height: 110px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin: 12px 15px;
}
.nav-infor > ul > li > span {
  width: 55px;
  line-height: 110px;
  background: #20a53a;
  text-align: center;
  color: #fff;
}
.nav-infor > ul > li > section {
  flex: 1;
  padding: 0 10px;
  border: 1px solid #dddddd;
}
.nav-infor > ul > li > section > p {
  text-align: center;
  line-height: 69px;
  color: #333;
  font-weight: 500;
  font-size: 32px;
  font-family: "Microsoft Yahei";
  border-bottom: 1px solid #e8e8e8;
}
.nav-infor > ul > li > section > span {
  display: block;
  line-height: 35px;
  text-align: center;
  color: #20a53a;
}
.nav-infor > ul > li > section > .internet-companies {
  display: flex;
  flex-wrap: wrap;
  font-size: 12px;
  font-family: "Microsoft Yahei";
}
.nav-infor > ul > li > section > .internet-companies > p > i {
  color: red;
  font-style: normal;
  font-size: 10px;
}
</style>

