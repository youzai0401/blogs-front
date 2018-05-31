<template>
    <div class="article-container">
        <h1 class="title">{{articleDetail.title}}</h1>
        <div class="markdown-body" v-html="articleDetail.content_html"></div>
        <p class="description">{{articleDetail.description}}</p>
        <!--<p class="tag">{{articleDetail.tag}}</p>-->
        <!--<p class="category">{{articleDetail.category}}</p>-->
        <p class="tag"><span v-for="(tagItem, tagIndex) in articleDetail.tag" :key="tagIndex" @click.stop="handelTag(tagItem.id)">{{tagItem.name}}</span></p>
        <p class="category" @click.stop="handelCategory(articleDetail.category.id)">{{articleDetail.category.name}}</p>
        <p class="click-count">{{articleDetail.ckick_count}}</p>
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
                list: [1, 2, 3],
                articleDetail: {}
            };
        },
        transition: 'test',
        async asyncData(context) {
            const id = context.query.id;
            const requestArray = [
                articleServer.articleDetail(id),
                tagServer.tagList(),
                categoryServer.categoryList()
            ];
            const resArr = await axios.all(requestArray).catch(() => {
//                this.pageLoading = false;
            });
            const articleDetail = resArr[0].data.data;
            const tagList = resArr[1].data.data;
            const categoryList = resArr[2].data.data;
            for (let i = 0; i < articleDetail.length; i++) {
                articleDetail[i].tag = tagFormatter(articleDetail[i].tag, tagList);
                articleDetail[i].category = categoryFormatter(articleDetail[i].category, categoryList);
                articleDetail[i].updateTime = formatTime(articleDetail[i].updateTime, 'yyyy-MM-dd hh:mm:ss');
            }
            return {articleDetail: articleDetail[0], tagList, categoryList};
        },
        fetch() {
            // The fetch method is used to fill the store before rendering the page
            // vuex填充数据状态，管理数据用
        },
        async mounted() {
//            this.articleDetail = await this.getArticleDetail();
            this.addArticleCkick_count(this.id);
        },
        methods: {
            toArticleDetail(id) {
                console.log(id);
            },
            async getArticleDetail() {
                const res = await articleServer.articleList();
                return res.data.data;
            },
            async addArticleCkick_count(id) {
                const res = await articleServer.addArticleCkick_count(id);
                if (res.data.code === 200) {
                    console.log('上报成功');
                }
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
        .title {
            text-align: center;
        }
        .description {
            font-size: 14px;
        }
        .tag {
            font-size: 14px;
        }
        .category {
            font-size: 14px;
        }
        .click-count {
            font-size: 12px;
        }
    }
</style>
