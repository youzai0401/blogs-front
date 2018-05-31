import {fetch} from '../../plugins/request';
import serviceUrl from './serviceUrl';

export default {
    articleList(data) {
        return fetch().get(serviceUrl.articleList, {params: data});
    },
    articleDetail(id) {
        return fetch().get(serviceUrl.articleDetail(id));
    },
    addArticleCkick_count(id) {
        return fetch().get(serviceUrl.addArticleCkick_count(id));
    }
};
