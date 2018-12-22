const config= require('../config/config.json');

let Gpio = null;
try {
    Gpio = require('onoff').Gpio;
} catch (e) {
    Gpio = require('./mock-gpio');
}

const LED = new Gpio(config.led.pin, 'out');

function ledStatus (){
    return Boolean(LED.readSync()); 
    // if (LED.readSync() === 0) {
    //    return false;
    //   } else {
    //     return true;
    //   }
}

function ledOn () {
    console.log('Led on');
    return LED.writeSync(1);
}


function ledOff () {
    console.log('Led off');
    return LED.writeSync(0);
}

module.exports = {
    ledStatus,
    ledOn,
    ledOff,
}