<template>
  <div>
    <el-menu
        default-active="/home"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        router>

      <el-menu-item index="/home">
        <el-icon>
          <HomeFilled/>
        </el-icon>
        <template #title>首页</template>
      </el-menu-item>

      <el-sub-menu>
        <template #title>
          <el-icon>
            <Menu/>
          </el-icon>
          <span>便捷工具</span>
        </template>
        <el-menu-item index="/verify">
          <el-icon>
            <Filter/>
          </el-icon>
          <template #title>校验类</template>
        </el-menu-item>
        <el-menu-item index="/customModule">
          <el-icon>
            <Files/>
          </el-icon>
          <template #title>组件类</template>
        </el-menu-item>
      </el-sub-menu>

      <el-menu-item index="/individual">
        <el-icon>
          <Setting/>
        </el-icon>
        <template #title>个性设置</template>
      </el-menu-item>
    </el-menu>
    <div class="menu-switch">
      <el-switch
          v-model="isCollapse"
          style="--el-switch-on-color: #13ce66; --el-switch-off-color: #409eff"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import {Files, Filter, HomeFilled, Setting} from '@element-plus/icons-vue'

const isCollapse = ref(true)
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
