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
