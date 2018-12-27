const path = require ('path');
const express = require ('express');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
const app = express();
const gpioService = require('./services/GpioService.js');

app.use(express.static(publicPath));

app.get('/led/status', (req, res) => {
    console.log(gpioService);
    return res.send({
        status: gpioService.ledStatus(),
    })
});

app.put('/led/on', (req, res) => {
    gpioService.ledOn();
    // return res.send({
    //     status: gpioService.ledStatus(),
    // })
    return res.sendStatus(204);   //no content, success case

});
app.put('/led/off', (req, res) => {
    gpioService.ledOff();
    return res.sendStatus(204);
});

app.listen(port , () =>{
    console.log(`Server is up at port ${port}`);
});