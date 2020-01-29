<template>
  <div>
    <nav-bar class="home-nav">
      <div slot="center">首页</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar.vue"
  import HomeSwiper from "./childComps/HomeSwiper.vue"
  import RecommendView from "./childComps/RecommendView.vue"

  import {getHomeMultidata} from "network/home.js";

  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      RecommendView
    },
    data() {
      return {
        banners: [],
        recommends: []
      }
    },
    created() {
      getHomeMultidata().then(res => {
        console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    }
  }
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: white;
  }
</style>
