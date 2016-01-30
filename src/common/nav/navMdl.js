'use strict';

import makeChangeObservable from '../util/makeChangeObservable';

let pageId = null;
let params = null;

export default makeChangeObservable({
    setLocation(value, obj = null) {
        pageId = value;
        params = obj;
        this.notifyChange();
    },
    getLocation() {
        return pageId;
    },
    getParams() {
        return params;
    }
})