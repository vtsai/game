'use strict';

export default function(fn, delay = 250, context = this) {
    var timer = null;
    return function () {
        var args = arguments;
            clearTimeout(timer);
        timer = setTimeout(function () {
            fn.apply(context, args);
        }, delay);
    };
}