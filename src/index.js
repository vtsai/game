'use strict';

import 'craftyjs';
window.onload = function() {
    Crafty.init();
    // A blue block, controlled by arrow keys
    var player = Crafty.e('2D, Canvas, Color, Fourway')
        .attr({x:100, y:100, w:58, h:58})
        .color('orange')
        .fourway(3);
};