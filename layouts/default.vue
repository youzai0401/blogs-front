<template>
    <div class="main">
        <div class="header-container">
            <app-header/>
        </div>
        <div class="container">
            <div class="main-container">
                <nuxt/>
            </div>
            <div class="sidebar-container">
                <app-sidebar/>
            </div>
        </div>
    </div>
</template>
<script>
    import appSidebar from '~/components/appSidebar.vue';
    import appHeader from '~/components/appHeader.vue';
    export default {
        components: {
            appSidebar,
            appHeader
        }
    };
</script>
<style scoped lang="less" type="text/less">
    .main {
        width: 100%;
        min-height: 100vh;
        background-color: #f4f5f5;
        .header-container {
            margin-bottom: 20px;
            height: 50px;
            width: 100%;
        }
        .container {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            position: relative;
            .sidebar-container {
                position: absolute;
                top: 0;
            }
            .main-container {
                margin-left: 240px;
                padding: 1px 0;
            }
        }
    }
</style>
