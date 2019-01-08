const config= require('../config/config.json');
const sensor = require('ds18b20-raspi');

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
};

function ledOn () {
    console.log('Led on');
    return LED.writeSync(1);
};

function ledOff () {
    console.log('Led off');
    return LED.writeSync(0);
};

// Adding the Sensor
function readTemp(){
    console.log('Reading Temperature from sensor');
    return sensor.readSimpleC();
};

function sensorList(){
    console.log('Getting the temperature sensor list');
    return sensor.list((err, deviceIds) => {
        if (err) {
            console.log(err);
        } else {
            console.log(deviceIds);
        }
    });
}

//*********** */
module.exports = {
    ledStatus,
    ledOn,
    ledOff,
    readTemp,
    sensorList,
}