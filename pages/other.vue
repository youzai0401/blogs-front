<template>
    <div class="article-container">
        this is other page
        <div v-for="item in articleList" :key="item.id">
            <div class="article" @click="toArticleDetail(item.id)">
                <h4 class="title">{{item.title}}</h4>
                <p class="description">{{item.description}}</p>
                <p class="tag">{{item.tag}}</p>
                <p class="category">{{item.category}}</p>
                <p class="update-time">{{item.updateTime}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import articleServer from '../api/article/index';

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
            const res = await articleServer.articleList();
//            console.log(res.data);
            return {articleList: res.data.data};
        },
        fetch() {
            // The fetch method is used to fill the store before rendering the page
            // vuex填充数据状态，管理数据用
        },
        methods: {
            toArticleDetail(id) {
                console.log(id);
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
