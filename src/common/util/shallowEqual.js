'use strict';

export default function(a, b) {
    if(a === b) { return true; }
    for(let key in a) {
        if(a.hasOwnProperty(key) && (!b.hasOwnProperty(key) || a[key] !== b[key])) {
            return false;
        }
    }
    for(let key in b) {
        if(b.hasOwnProperty(key) && !a.hasOwnProperty(key)) {
            return false;
        }
    }
    return true;
}