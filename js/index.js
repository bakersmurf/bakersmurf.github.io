<<<<<<< HEAD
// WebGL - Same Code - Resize
// from https://webglfundamentals.org/webgl/webgl-same-code-resize.html


'use strict';
$(function() {
  $("#editor").colResizable({
    liveDrag: true,
    gripInnerHtml: "<div class='grip'></div>",
    draggingClass: "dragging",
  });
});
=======
window.onload = window.onresize = function() {
    var canvas = document.getElementById('canvas');
    canvas.width = window.innerWidth * 0.8;
    canvas.height = window.innerHeight * 0.8;
}
>>>>>>> parent of 13b9566... window centers!
