export default {
    articleList: '/blog/end/article/list',
    articleDetail(id) {
        return `/blog/end/article/detail?id=${id}`;
    },
    addArticle: '/blog/end/article/add',
    editArticle(id) {
        return `/blog/end/article/edit?id=${id}`;
    },
    deleteArticle(id) {
        return `/blog/end/article/delete?id=${id}`;
    }
};
