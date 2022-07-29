/// <reference types="vitest" />
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import { resolve } from 'path'
import vwt from 'weapp-tailwindcss-webpack-plugin/vite'
import postcssWeappTailwindcssRename from 'weapp-tailwindcss-webpack-plugin/postcss'

const postcssPlugins = [require('autoprefixer')(), require('tailwindcss')()]

const plugins = [
  // uni
  uni()
]

const isH5 = process.env.UNI_PLATFORM === 'h5'

if (!isH5) {
  postcssPlugins.push(
    require('postcss-rem-to-responsive-pixel')({
      rootValue: 32,
      propList: ['*'],
      transformUnit: 'rpx'
    })
  )
  postcssPlugins.push(postcssWeappTailwindcssRename())

  plugins.push(vwt())
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins,
  resolve: {
    alias: {
      '@/': resolve(__dirname, 'src/')
    }
  },
  // 假如 postcss.config.js 不起作用，请使用内联 postcss
  css: {
    postcss: {
      plugins: postcssPlugins
    }
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: false
      }
    }
  },
  test: {
    globals: true,
    includeSource: ['src/**/*.{js,ts}']
  }
})
