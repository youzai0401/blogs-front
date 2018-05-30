export default {
    tagList: '/blog/end/tag/list',
    tagDetail(id) {
        return `/blog/end/tag/detail?id=${id}`;
    },
    addTag: '/blog/end/tag/add',
    editTag(id) {
        return `/blog/end/tag/edit?id=${id}`;
    },
    deleteTag(id) {
        return `/blog/end/tag/delete?id=${id}`;
    }
};
