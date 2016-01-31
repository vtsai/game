'use strict';

import 'babelify/polyfill';
import Crafty from 'craftyjs';
import React from 'react';
import App from './app';
import SetupRouterAction from './setupRouterAction';

/*
window.onload = function() {
    Crafty.init();
    // A blue block, controlled by arrow keys
    var player = Crafty.e('2D, Canvas, Color, Fourway')
        .attr({x:100, y:100, w:58, h:58})
        .color('pink')
        .fourway(3);
};
*/

SetupRouterAction();
React.render(<App/>, document.getElementById('app-body'));