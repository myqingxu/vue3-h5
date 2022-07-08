<template>
  <router-view />
  <van-tabbar route>
    <van-tabbar-item replace to="/home" icon="home-o">首页 </van-tabbar-item>
    <van-tabbar-item replace to="/message" icon="search">消息</van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant'
const isAbsent = Symbol()
export default {
  name: 'HelloWorld',
  components: {
    Tabbar,
    TabbarItem
  },
  props: {
    foo: {
      default: isAbsent
    }
  },
  // 一个组件选项，在组件被创建之前，props 被解析之后执行。它是组合式 API 的入口。
  setup(props) {
    console.log('props:', props.foo === isAbsent) // -> true
  }
}
</script>
