'use strict';

let callbacks = {};
let exitCallbacks = {};

export default {
    register: function(id, navCallback) {
        callbacks[id] = navCallback;
    },
    registerExit: function(id, navCallback) {
        exitCallbacks[id] = navCallback;
    },
    navToPage: function(id, options) {
        if(callbacks[id]) { callbacks[id](options); }
        else { throw 'Navigating to unknown page ' + id; }
    },
    exitPage: function(id) {
        if(exitCallbacks[id]) { exitCallbacks[id](); }
    }
}