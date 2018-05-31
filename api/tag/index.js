import {fetch} from '../../plugins/request';
import serviceUrl from './serviceUrl';

export default {
    tagList(data) {
        return fetch().get(serviceUrl.tagList, {params: data});
    },
    tagDetail(id) {
        return fetch().get(serviceUrl.tagDetail(id));
    }
};
