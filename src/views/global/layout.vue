<script setup lang="ts">
import Header from "@/components/layout/Header.vue"
import Menu from "@/components/layout/Menu.vue"
</script>

<template>
  <div class="wl-layout">
    <div class="wl-layout-header">
      <Header/>
    </div>
    <div class="wl-layout-main">
      <Menu/>
      <div class="pageContainer">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wl-layout {
  &-header {
    width: 100vw;
    height: 60px;
  }

  &-main {
    display: flex;

    .pageContainer {
      flex: 1;
      max-height: calc(100vh - 60px);
    }
  }
}
</style>
