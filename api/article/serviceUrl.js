export default {
    articleList: '/blog/front/article/list',
    articleDetail(id) {
        return `/blog/front/article/detail?id=${id}`;
    },
    addArticleCkick_count(id) {
        return `/blog/front/article/addClickCount?id=${id}`;
    }
};
