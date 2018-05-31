import {fetch} from '../../plugins/request';
import serviceUrl from './serviceUrl';

export default {
    categoryList(data) {
        return fetch().get(serviceUrl.categoryList, {params: data});
    },
    categoryDetail(id) {
        return fetch().get(serviceUrl.categoryDetail(id));
    }
};
