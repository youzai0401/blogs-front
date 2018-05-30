import {fetch} from '../../plugins/request';
import serviceUrl from './serviceUrl';

export default {
    categoryList(data) {
        return fetch().get(serviceUrl.categoryList, {params: data});
    },
    categoryDetail(id) {
        return fetch().get(serviceUrl.categoryDetail(id));
    },
    addCategory(data) {
        return fetch().post(serviceUrl.addCategory, data);
    },
    editCategory(data, id) {
        return fetch().put(serviceUrl.editCategory(id), data);
    },
    deleteCategory(data, id) {
        return fetch().delete(serviceUrl.deleteCategory(id), data);
    }
};
