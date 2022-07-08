<template>
  <router-view />
  <van-tabbar route>
    <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item replace to="/message" icon="search">消息</van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant'

export default {
  name: 'HelloWorld',
  components: {
    Tabbar,
    TabbarItem
  },
  data() {
    return {}
  }
}
</script>
