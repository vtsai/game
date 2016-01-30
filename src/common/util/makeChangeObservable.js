'use strict';

export default function(target) {
    target.changeListeners = [];
    target.notifyChange = function() {
        this.changeListeners.slice().forEach(function(listener) {
            listener.fn.apply(listener.context);
        });
    };
    target.onChange = function(listener, context) {
        this.changeListeners.push({
            fn: listener,
            context: context || this
        });
    };
    target.offChange = function(listener) {
        for(let i = 0; i < this.changeListeners.length; i++) {
            if(this.changeListeners[i].fn === listener) {
                this.changeListeners.splice(i, 1);
                break;
            }
        }
    };
    return target;
}