<template>
  <div>
    <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        @open="handleOpen"
        @close="handleClose"
    >
      <el-menu-item index="1">
        <el-icon>
          <icon-menu/>
        </el-icon>
        <template #title>首页</template>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon>
          <setting/>
        </el-icon>
        <template #title>个性设置</template>
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
import {Menu as IconMenu, Setting,} from '@element-plus/icons-vue'

const isCollapse = ref(true)
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
