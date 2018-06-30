<template>
    <div class="article-container">
        <div v-for="item in categoryList" :key="item.id">
            <div class="article" @click="toCategory(item.id)">
                <h4 class="title">{{item.name}}</h4>
            </div>
        </div>
    </div>
</template>

<script>
    import categoryServer from '../api/category/index';

    export default {
        components: {},
        data() {
            return {
                list: [1, 2, 3]
            };
        },
        transition: 'test',
        async asyncData(context) {
            // called every time before loading the component
//            console.log(1111111111111111111111);
            const res = await categoryServer.categoryList();
//            console.log(res.data);
            return {categoryList: res.data.data.content};
        },
        fetch() {
            // The fetch method is used to fill the store before rendering the page
            // vuex填充数据状态，管理数据用
        },
        methods: {
            toCategory(id) {
                console.log(id);
                this.$router.push({
                    path: '/',
                    query: {
                        categoryId: id
                    }
                });
            }
        }
//  head () {
//    // Set Meta Tags for this Page
//  },
        // and more functionality to discover
    };
</script>

<style scoped lang="less" type="text/less">
    .article-container {
        width: 100%;
    }
</style>
