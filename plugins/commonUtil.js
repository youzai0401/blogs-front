/**
 * Created by z on 2018/5/24.
 */
export function formatTime(thisDate, format) {
    const time = new Date(thisDate);
    const date = {
        'M+': time.getMonth() + 1,
        'd+': time.getDate(),
        'h+': time.getHours(),
        'm+': time.getMinutes(),
        's+': time.getSeconds(),
        'q+': Math.floor((time.getMonth() + 3) / 3),
        'S+': time.getMilliseconds()
    };
    if (/(y+)/i.test(format)) {
        format = format.replace(RegExp.$1, (time.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (const k in date) {
        if (new RegExp('(' + k + ')').test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length === 1
                ? date[k] : ('00' + date[k]).substr(('' + date[k]).length));
        }
    }
    return format;
}
export function treeNumberFilter(number) {
    if (number) {
        return parseInt(number).toLocaleString();
    } else {
        return 0;
    }
}
export function tagFormatter(tag, tagList) {
    const data = [];
    const tagArr = tag.split(',');
    for (let j = 0; j < tagArr.length; j++) {
        for (let i = 0; i < tagList.length; i++) {
            if (tagList[i].id === Number(tagArr[j])) {
                data.push(tagList[i]);
            }
        }
    }
    return data;
}
export function categoryFormatter(categoryId, categoryList) {
    const data = [];
    for (let i = 0; i < categoryList.length; i++) {
        if (categoryList[i].id === categoryId) {
            data.push(categoryList[i]);
        }
    }
    return data;
}
