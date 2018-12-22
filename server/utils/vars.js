let Gpio = null;
try {
    Gpio = require('onoff').Gpio;
} catch (e) {
    Gpio = require('./mock-gpio');
}

module.exports = Gpio;