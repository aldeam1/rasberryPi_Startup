const path = require ('path');
const http = require('http');
const express = require ('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);
var io = socketIO(server);
const gpioService = require('./services/GpioService.js');

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('User connected');

    socket.on('disconnect', () => {
        console.log('User was disconnected');
    });
});

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

// Adding routes for temperature sensor
app.get('/temp/read', (req, res)=>{
    return res.send({
        status: gpioService.readTemp(),
    });
});

app.get('temp/list', (req, res) => {
    console.log('Retriving Sensor List');
    return res.send({
        status :gpioService.sensorList()
    });
});


server.listen(port , () =>{
    console.log(`Server is up at port ${port}`);
});