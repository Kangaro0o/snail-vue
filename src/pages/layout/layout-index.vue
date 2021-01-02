<template>
  <a-layout id="app">
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
      <div class="logo" />
      <a-menu
        theme="dark"
        mode="horizontal"
        :default-selected-keys="['2']"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1"> 主站 </a-menu-item>
        <a-menu-item key="2"> 历史记录 </a-menu-item>
        <a-menu-item key="3"> 关于 </a-menu-item>
        <a-avatar
          class="avatar"
          :size="40"
          src="https://i03piccdn.sogoucdn.com/f8c0b3877c621a46"
        />
      </a-menu>
    </a-layout-header>
    <!-- <a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
      <div
        :style="{ background: '#fff', marginTop: '24px', minHeight: '680px' }"
      >
        Content
      </div>
    </a-layout-content> -->
    <owl-footer />
  </a-layout>
</template>

<script>
import OwlFooter from '@/components/owl-footer'

export default {
  name: 'index',
  components: { OwlFooter }
}
</script>

<style scoped>
#app .logo {
  width: 50px;
  height: 50px;
  background: url("../../static/logo/logo.jpg") no-repeat;
  margin: 7px 24px 7px 0;
  float: left;
}

#app .avatar {
  float: right;
  margin-top: 12px;
}
</style>