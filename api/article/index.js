import {fetch} from '../../plugins/request';
import serviceUrl from './serviceUrl';

export default {
    articleList(data) {
        return fetch().get(serviceUrl.articleList, {params: data});
    },
    articleDetail(id) {
        return fetch().get(serviceUrl.articleDetail(id));
    },
    addArticle(data) {
        return fetch().post(serviceUrl.addArticle, data);
    },
    editArticle(data, id) {
        return fetch().put(serviceUrl.editArticle(id), data);
    },
    deleteArticle(data, id) {
        return fetch().delete(serviceUrl.deleteArticle(id), data);
    }
};
