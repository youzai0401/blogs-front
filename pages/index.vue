<template>
    <div class="article-container">
        <div class="article" v-for="item in articleList" :key="item.id" @click="toArticleDetail(item.id)">
            <h4 class="title">{{item.title}}</h4>
            <p class="category-tag">
                <i class="iconfont icon-category"></i>
                <span class="category" @click.stop="handelCategory(item.category[0].id)">
                    {{item.category[0].name}}
                </span>
                <i class="iconfont icon-tag"></i>
                <span class="tag" v-for="(tagItem, tagIndex) in item.tag" :key="tagIndex"
                      @click.stop="handelTag(tagItem.id)">{{tagItem.name}}</span>
            </p>
            <p class="description overflow-ellipsis-3">{{item.description}}</p>
            <p class="update-message">
                <span><i class="iconfont icon-yuedu1"></i>{{item.click_count}}</span>
                <span><i class="iconfont icon-shijian-tianchong"></i>{{item.create_time}}</span>
            </p>
        </div>
    </div>
</template>

<script>
    import articleServer from '../api/article/index';
    import tagServer from '../api/tag/index';
    import categoryServer from '../api/category/index';
    import {fetch} from '../plugins/request';
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
            // todo 滚动加载，传参数
            const tagId = context.query.tagId;
            const categoryId = context.query.categoryId;
            const requestArray = [
                articleServer.articleList({
                    page: 1,
                    limit: 10,
                    tag: tagId,
                    category: categoryId
                }),
                tagServer.tagList(),
                categoryServer.categoryList()
            ];
            const resArr = await fetch().all(requestArray).catch(err => {
                console.log(err);
            });
            const articleList = resArr[0].data.data.content;
            const tagList = resArr[1].data.data.content;
            const categoryList = resArr[2].data.data.content;
            for (let i = 0; i < articleList.length; i++) {
                articleList[i].tag = tagFormatter(articleList[i].tag, tagList);
                articleList[i].category = categoryFormatter(articleList[i].category, categoryList);
                articleList[i].create_time = formatTime(articleList[i].create_time, 'yyyy-MM-dd hh:mm:ss');
            }
            return {articleList, tagList, categoryList, tagId, categoryId};
        },
        fetch() {
            // The fetch method is used to fill the store before rendering the page
            // vuex填充数据状态，管理数据用
        },
        mounted() {
        },
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
        font-size: 12px;
        padding: 20px;
        background-color: #ffffff;
        border-radius: 4px;
        .article {
            padding: 15px;
            cursor: pointer;
            margin-bottom: 20px;
            background-color: #fff;
            border: 1px solid #ddd;
            border-radius: 4px;
            -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
            box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
            p {
                margin: 0 0 10px 0;
            }
            &:hover {
                box-shadow: 0px 8px 18px rgba(0, 0, 0, 0.15);
                transition: all .2s ease-out;
            }
            .title {
                font-size: 16px;
                margin: 10px 0 10px 0;
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
                }
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
    }
</style>
