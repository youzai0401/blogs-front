export default {
    categoryList: '/blog/end/category/list',
    categoryDetail(id) {
        return `/blog/end/category/detail?id=${id}`;
    },
    addCategory: '/blog/end/category/add',
    editCategory(id) {
        return `/blog/end/category/edit?id=${id}`;
    },
    deleteCategory(id) {
        return `/blog/end/category/delete?id=${id}`;
    }
};
