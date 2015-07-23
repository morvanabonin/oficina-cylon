"use strict";

var Cylon = require("cylon");

Cylon.robot({
    connections: {
        arduino: {adaptor: 'firmata', port: '/dev/ttyACM0'}
    },

    devices : {
        red : { driver : 'led', pin: 3},
        green : { driver : 'led', pin: 5},
        blue : { driver : 'led', pin: 6}
    },

    work: function(my) {
        var brightness = 0,
            fade = 5,
            index = 0,
            keys = Object.keys(my.devices);

        every((0.05).seconds(), function() {
            brightness += fade;

            console.log("brightness =>", brightness);
            console.log("index =>", index);
            my[keys[index]].brightness(brightness);

            if ((brightness === 0) || (brightness === 255)) {
                if (index === 2) {
                    index = 0;
                    fade = -fade;
                } else {
                    brightness = (fade > 0) ? 0 : 255;
                    index++;
                }
            }
        });
    }   
}).start();