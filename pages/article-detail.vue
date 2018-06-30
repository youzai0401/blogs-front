<template>
    <div class="article-container">
        <h1 class="title">{{articleDetail.title}}</h1>
        <div class="markdown-body article-content" v-html="articleDetail.content_html"></div>
        <p class="description">{{articleDetail.description}}</p>
        <!--<p class="tag">{{articleDetail.tag}}</p>-->
        <!--<p class="category">{{articleDetail.category}}</p>-->
        <p class="category-tag">
            <i class="iconfont icon-category"></i>
            <span class="category" @click.stop="handelCategory(articleDetail.category[0].id)">
                    {{articleDetail.category[0].name}}
                </span>
            <i class="iconfont icon-tag"></i>
            <span class="tag" v-for="(tagItem, tagIndex) in articleDetail.tag" :key="tagIndex"
                  @click.stop="handelTag(tagItem.id)">{{tagItem.name}}</span>
        </p>
        <p class="update-message">
            <span><i class="iconfont icon-yuedu1"></i>{{articleDetail.click_count}}</span>
            <span><i class="iconfont icon-shijian-tianchong"></i>{{articleDetail.create_time}}</span>
        </p>
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
            const tagList = resArr[1].data.data.content;
            const categoryList = resArr[2].data.data.content;
            for (let i = 0; i < articleDetail.length; i++) {
                articleDetail[i].tag = tagFormatter(articleDetail[i].tag, tagList);
                articleDetail[i].category = categoryFormatter(articleDetail[i].category, categoryList);
                articleDetail[i].create_time = formatTime(articleDetail[i].create_time, 'yyyy-MM-dd hh:mm:ss');
            }
            return {articleDetail: articleDetail[0], tagList, categoryList};
        },
        fetch() {
            // The fetch method is used to fill the store before rendering the page
            // vuex填充数据状态，管理数据用
        },
        async mounted() {
//            this.articleDetail = await this.getArticleDetail();
            const id = this.$route.query.id;
            this.addArticleCkick_count(id);
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
                this.$router.push({
                    path: '/',
                    query: {
                        tagId: id
                    }
                });
            },
            handelCategory(id) {
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
        font-size: 12px;
        padding: 10px 2rem;
        background-color: #ffffff;
        border-radius: 4px;
        .article-content {
            background-color: #fafafa;
            padding: 20px 10px;
            border-radius: 4px;
        }
        .title {
            text-align: center;
        }
        .description {
            font-size: 14px;
        }
        .category-tag {
            i {
                font-size: 12px;
                margin-right: 5px;
            }
            .category {
                margin-right: 30px;
                cursor: pointer;
            }
            .tag {
                background-color: #777;
                display: inline;
                padding: .2em .6em .3em;
                margin-right: 10px;
                font-size: 75%;
                font-weight: 700;
                line-height: 1;
                color: #fff;
                text-align: center;
                white-space: nowrap;
                vertical-align: baseline;
                border-radius: .25em;
                cursor: pointer;
            }
        }
        .click-count {
            font-size: 12px;
        }
        .update-message {
            i {
                font-size: 12px;
                margin-right: 5px;
            }
            span {
                margin-right: 20px;
            }
        }
    }
</style>
