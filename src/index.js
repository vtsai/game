'use strict';

import 'craftyjs';
window.onload = function() {
    Crafty.init();
    // A blue block, controlled by arrow keys
    var player = Crafty.e('2D, Canvas, Color, Fourway')
        .attr({x:100, y:100, w:50, h:50})
        .color('blue')
        .fourway(3);
};