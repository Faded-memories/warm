import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// *********************************** 路径配置新增 start
import {resolve} from 'path'

const pathResolve = (dir: string): any => {
    return resolve(__dirname, ".", dir)
}

const alias: Record<string, string> = {
    '@': pathResolve("src")
}

// ********************************** 路径配置新增  end
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "@/assets/base.scss";`,
            },
        },
    },
})
