<template>
  <div id="app">
    <div class="menu">
      <section class="logo">
        <i class="mdi mdi-home"></i>
        <span>lxjq168.com</span>
      </section>
      <section class="navs">
        <!-- 导航列表 -->
        <ul>
          <li
            v-for="(value, key) in nav"
            :key="key"
            @click="onUrl(value.url, key)"
            v-bind:class="{ active: active == key }"
          >
            <i class="mdi mdi-home"></i>
            <span>{{ value.name }}</span>
          </li>
        </ul>
      </section>
    </div>
    <div class="wrap">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      nav: [
        { icon: "mdi mdi-home", name: "网站首页", url: "/" },
        { icon: "mdi mdi-home", name: "系统设置", url: "/setting" },
        { icon: "mdi mdi-home", name: "子站管理", url: "/sub" },
        { icon: "mdi mdi-home", name: "导航管理", url: "/nav" },
        { icon: "mdi mdi-home", name: "文章管理", url: "/article" },
        { icon: "mdi mdi-home", name: "产品管理", url: "/product" },
        { icon: "mdi mdi-home", name: "页面管理", url: "/page" },
        { icon: "mdi mdi-home", name: "生成管理", url: "/generate" },
        { icon: "mdi mdi-home", name: "留言管理", url: "/message" }
      ],
      active: 0
    };
  },
  created() {},
  mounted() {
    this.nav.forEach((v, i) => {
      if (this.$route.path.startsWith(v.url) > 0) {
        this.active = i;
      }
    });
  },
  computed: {},
  methods: {
    onUrl(url, key) {
      this.nav.forEach((v, i) => {
        if (i == key) {
          this.active = i;
        }
      });
      this.$router.push({
        path: url
      });
    }
  },
  watch: {}
};
</script>

<style lang="less">
@import url("./assets/css/normalize.css");
@import url("./assets/css/minireset.css");
@import url("./assets/css/style.css");

html,
body {
  overflow: hidden;
}
#app {
  height: 100vh;
  display: flex;
  flex-direction: row;
  .menu {
    min-width: 180px;
    display: flex;
    flex-direction: column;
    .logo {
      line-height: 60px;
      text-align: center;
      background:#333333;
      color: #fff;
      &:hover{
        background: #20a53a;
        cursor: pointer;
      }
      i {
        margin-right: 5px;
      }
      span {
        font-size: 12px;
        font-family: "Times New Roman", Times, serif;
        color: #fff;
        font-style: italic;
      }
    }
    .navs {
      flex: 1;
      background: #353d44;
      ul {
        li {
          line-height: 44px;
          background:#2c3138;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 16px;
          color: #d6d7d9;
          border-left: 2px solid #333333;
          border-right: 2px solid #333333;
          text-align: center;
          cursor: pointer;
          &:hover {
            background-color: #2c3138;
            border-left: #20a53a 2px solid;
            border-right: #333333 2px solid;
            color: #fff;
          }
          i{
            margin-right: 5px;
          }
        }
      }
      .active {
        border-left: #20a53a 2px solid;
        background: #2c3138;
      }
    }
  }
  .wrap {
    flex: 1;
    min-width: 1020px;
    display: flex;
    flex-direction: column;
    overflow-x: auto;
    background: #e6e9ee;
  }
}

</style>
