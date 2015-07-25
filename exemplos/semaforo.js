var Cylon = require('cylon');

Cylon.robot({
  connections: {
    arduino: { adaptor: 'firmata', port: '/dev/ttyACM0' }
  },

  devices: {
    go:   { driver: 'led', pin: 11}
    wait: { driver: 'led', pin: 8}
    stop: { driver: 'led', pin: 6}
  },

  work: function(my) {
    every((1).second(), my.led.toggle);
  }
}).start();
