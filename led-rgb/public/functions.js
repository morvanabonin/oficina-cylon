+function ($) {
  'use strict';
    var socket = io("http://"+document.location.hostname+":3000"),notif;

    var cw = Raphael.colorwheel($(".colorwheel_large")[0],300, 180);

    cw.input($("input")[0]);

    cw.onchange(function(data){
      socket.emit('changeColor', data);
    });

    socket.on('retorno',function(data){
    console.log(data.hex);
    });
}(window.jQuery);