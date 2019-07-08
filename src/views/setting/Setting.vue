<template>
  <div class="setting">
    <!-- 头部部分 -->
    <header>
      <section>
        <i class="mdi mdi-home"></i>
        <a href="" class="home_title">网站首页</a>
        /
        <span class="status">系统设置</span>
      </section>
    </header>
    <!-- 系统设置 -->
    <section class="statu-infor">
      <section class="guiter">系统设置</section>

      <section class="nav-infor">
        <ul>
          <li
            v-for="(value, key) in nav"
            :key="key"
            @click="onUrl(value.url, key)"
            v-bind:class="{ active: active == key }"
          >
            {{ value.name }}
          </li>
        </ul>
        <!-- 子路由展示 -->
        <section class="child_route">
          <router-view></router-view>
        </section>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  name: "setting",
  data() {
    return {
      nav: [
        { name: "基本设置", url: "/setting/" },
        { name: "主域设置", url: "/setting/host" },
        { name: "网站设置", url: "/setting/site" },
        { name: "幻灯设置", url: "/setting/banner" },
        { name: "搜索记录", url: "/setting/words" }
      ],
      active: 0
    };
  },
  mounted() {
    this.nav.forEach((v, i) => {
      if (this.$route.path.startsWith(v.url) > 0) {
        this.active = i;
      }
    });
  },
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
  }
};
</script>
<style scoped lang="less">
.setting {
  height: 100%;
  background: #e6e9ee;
  padding: 10px 10px 0 10px;
}
header {
  line-height: 40px;
  background: #fff;
  display: flex;
  justify-content: space-between;
}
header > section {
  display: flex;
  flex-wrap: wrap;
}
header > section > i {
  margin-left: 12px;
  font-size: 14px;
  color: #444444;
}
.home_title {
  font-size: 15px;
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
.statu-infor {
  width: 100%;
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
.nav-infor {
  width: 100%;
  height: 100%;

  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 12px 0;
    border-bottom: 1px solid #dbdbdb;
    li {
      width: 86px;
      line-height: 30px;
      text-align: center;
      border: 1px solid #ddd;
      background: #f5f6fa;
      margin-right: 10px;
      font-size: 14px;
      color: #555;
      &:hover {
        cursor: pointer;
        background: #eaeaea;
      }
      button {
        vertical-align: middle;
        background-color: #fff;
        border: 1px solid #ccc;
        border-radius: 3px;
        cursor: pointer;
        letter-spacing: 1px;
        padding: 5px 10px;
        color: #555;
      }
    }
    .active {
      background: #20a53a;
      color: #fff;
      &:hover {
        background: #20a53a;
      }
    }
  }
  
}

.child_route{
    width: 100%;
    height: 100%;
  }
</style>
