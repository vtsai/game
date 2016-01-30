'use strict';

export default function(fn, threshhold = 250, context = this) {
    var last,
        deferTimer;
    return function () {
        var now = +new Date(),
            args = arguments;
        if (last && now < last + threshhold) {
            clearTimeout(deferTimer);
            deferTimer = setTimeout(function () {
                last = now;
                fn.apply(context, args);
            }, threshhold);
        } else {
            last = now;
            fn.apply(context, args);
        }
    };
}