<template>
    <div class="header-content">
        <p>这里是header</p>
    </div>
</template>
<script>
    import server from '../api/tag/index';

    export default {
        data() {
            return {
                list: [1, 2, 3]
            };
        },
        async asyncData(context) {
            // called every time before loading the component
//            console.log(1111111111111111111111);
            const res = await server.tagList();
//            console.log(res.data);
            return {name: 'World', res: res.data};
        },
        fetch() {
            // The fetch method is used to fill the store before rendering the page
            // vuex填充数据状态，管理数据用
        }
    };
</script>
<style scoped lang="less" type="text/less">
    .header-content {
        text-align: center;
        padding: 1px 0;
        margin-bottom: 20px;
        background-color: #ffffff;
        box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
    }
    .header-content p {
        /*line-height: 50px;*/
    }
</style>
