<template>
    <div class="article-container">
        <div class="article" v-for="item in articleList" :key="item.id" @click="toArticleDetail(item.id)">
            <h4 class="title">{{item.title}}</h4>
            <p class="description">{{item.description}}</p>
            <p class="tag"><span v-for="(tagItem, tagIndex) in item.tag" :key="tagIndex" @click.stop="handelTag(tagItem.id)">{{tagItem.name}}</span></p>
            <p class="category" @click.stop="handelCategory(item.category[0].id)">{{item.category[0].name}}</p>
            <p class="update-time">{{item.updateTime}}</p>
        </div>
    </div>
</template>

<script>
    import articleServer from '../api/article/index';
    import tagServer from '../api/tag/index';
    import categoryServer from '../api/category/index';
    import {fetch} from '../plugins/request';
    import axios from 'axios';
    import {formatTime, tagFormatter, categoryFormatter} from '../plugins/commonUtil';
    export default {
        components: {},
        data() {
            return {
                list: [1, 2, 3]
            };
        },
        transition: 'test',
        async asyncData(context) {
            const requestArray = [
                articleServer.articleList(),
                tagServer.tagList(),
                categoryServer.categoryList()
            ];
            const resArr = await axios.all(requestArray).catch(() => {
//                this.pageLoading = false;
            });
            const articleList = resArr[0].data.data;
            const tagList = resArr[1].data.data;
            const categoryList = resArr[2].data.data;
            for (let i = 0; i < articleList.length; i++) {
                articleList[i].tag = tagFormatter(articleList[i].tag, tagList);
                articleList[i].category = categoryFormatter(articleList[i].category, categoryList);
                articleList[i].updateTime = formatTime(articleList[i].updateTime, 'yyyy-MM-dd hh:mm:ss');
            }
            return {articleList, tagList, categoryList};
        },
        fetch() {
            // The fetch method is used to fill the store before rendering the page
            // vuex填充数据状态，管理数据用
        },
        mounted() {},
        methods: {
            toArticleDetail(id) {
                this.$router.push(`/article-detail?id=${id}`);
            },
            tagFormatter(tag, tagList) {
                const data = [];
                const tagArr = tag.split(',');
                for (let j = 0; j < tagArr.length; j++) {
                    for (let i = 0; i < tagList.length; i++) {
                        if (tagList[i].id === Number(tagArr[j])) {
                            data.push(tagList[i]);
                        }
                    }
                }
                return data;
            },
            handelTag(id) {
                console.log(id);
            },
            handelCategory(id) {
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
        padding: 10px 2rem;
        background-color: #ffffff;
        border-radius: 4px;
        .article {
            margin: 10px 20px;
            padding: 10px 0;
            border-bottom: 1px solid #eeeeee;
            cursor: pointer;
        }
    }
</style>
