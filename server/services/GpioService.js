const config= require('../config/config.json');
const sensor = require('ds18x20');

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

// Adding the Temperature Sensor ds18x20


function readTemp(){
    try {
        sensor.loadDriver();
        console.log('driver is loaded');
    } catch (err) {
        console.log('something went wrong loading the driver:', err)
    }
    console.log('Reading Temperature from sensor');
    return sensor.getAll();
};

function sensorList(){
    console.log('Getting the temperature sensor list');
    return sensor.list((err, listOfDeviceIds) => {
        if (err) {
            console.log(err);
        } else {
            console.log(listOfDeviceIds);
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