const path = require ('path');
const express = require ('express');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT||3000;
var app = express();
const Gpio = require('./utils/vars');

var LED = new Gpio(4, 'out');

app.use(express.static(publicPath));

// app.post('/led/on', (req, res) => {
//     LED.writeSync(1);
//     res.send('Led Turned on!')
// });

app.listen(port , () =>{
    console.log(`Server is up at port ${port}`);
});