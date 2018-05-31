export default {
    categoryList: '/blog/front/category/list',
    categoryDetail(id) {
        return `/blog/front/category/detail?id=${id}`;
    }
};
