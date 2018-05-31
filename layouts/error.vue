<template>
    <div class="container">
        <h1 v-if="error.statusCode === 404">页面不存在</h1>
        <h1 v-else>应用发生错误异常</h1>
        <p><nuxt-link to="/">首 页</nuxt-link></p>
        <img src="../static/error.gif" alt="">
    </div>
</template>
<script>
    export default {
        props: ['error'],
        layout: 'error-layout'
    };
</script>
<style scoped lang="less" type="text/less">
    html {
        font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        font-size: 16px;
        word-spacing: 1px;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        box-sizing: border-box;
    }

    *, *:before, *:after {
        box-sizing: border-box;
        margin: 0;
    }
    .container {
        text-align: center;
        p {
            margin: 10px;
        }
    }
</style>
