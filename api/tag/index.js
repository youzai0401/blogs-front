import {fetch} from '../../plugins/request';
import serviceUrl from './serviceUrl';

export default {
    tagList(data) {
        return fetch().get(serviceUrl.tagList, {params: data});
    },
    tagDetail(id) {
        return fetch().get(serviceUrl.tagDetail(id));
    },
    addTag(data) {
        return fetch().post(serviceUrl.addTag, data);
    },
    editTag(data, id) {
        return fetch().put(serviceUrl.editTag(id), data);
    },
    deleteTag(data, id) {
        return fetch().delete(serviceUrl.deleteTag(id), data);
    }
};
