<template>
  <div>
    <el-menu
        default-active="/home"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        @open="handleOpen"
        @close="handleClose"
        router
    >
      <el-menu-item :index="item.path" v-for="(item,index) in routeList" :key="index">
        <el-icon>
          <icon-menu/>
        </el-icon>
        <template #title>{{ item.title }}</template>
      </el-menu-item>
    </el-menu>
    <div class="menu-switch">
      <el-switch
          v-model="isCollapse"
          style="--el-switch-on-color: #13ce66; --el-switch-off-color: #409eff"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import {Menu as IconMenu,} from '@element-plus/icons-vue'
import mainRoutes from "../../router/router/mainRoutes.ts"

const isCollapse = ref(true)
const list = JSON.parse(JSON.stringify(mainRoutes.children))
const routeList = list.map((item: any) => {
  return {
    path: item.path,
    title: item.meta.title,
    children: item.children
  }
})

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style scoped lang="scss">
.el-menu-vertical-demo {
  height: calc(100vh - 60px - 40px);
}

.menu-switch {
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: solid 1px var(--el-menu-border-color);
}
</style>
