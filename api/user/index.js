import {fetch} from '../../plugins/request';
import serviceUrl from './serviceUrl';

export default {
    login(data) {
        return fetch().post(serviceUrl.login(), data);
    },
    logout() {
        return fetch().post(serviceUrl.logout);
    },
    register(data) {
        return fetch().post(serviceUrl.register(), data);
    }
};
