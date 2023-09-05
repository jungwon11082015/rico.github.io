const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/scss/__variables.scss";`,
        additionalData: `@import "@/assets/scss/mixin.scss";`,
      },
    },
  },
  devServer: {
    historyApiFallback: true,
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'https://jungwon11082015.github.io/rico.github.io/', // 백엔드 서버 주소
        changeOrigin: true,
        pathRewrite: {
          '^/api': '' // URL에서 '/api'를 제거하고 요청을 전달
        }
      }
    }
  },
  outputDir: 'docs',
  publicPath: process.env.NODE_ENV === 'production'
  ? '/rico.github.io/'  // GitHub 페이지의 리포지토리 이름에 맞게 수정
  : '/',

})
