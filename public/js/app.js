// --evinimente de click pe amble butoane cu jquarry $...
// call ajax catre led on , led off
// functional programing
//culoare buton in functie de stare

// Old code pentru capture event la butoane--v-a fi sters mai tarziu
//******************************************* */
// $("#turn-on").click (function(){
//     $.ajax({
//         url:'/led/on',
//         type: 'PUT'
//     });
//     // return alert('Button Turn On was pressed');
// })

// $("#turn-off").click (function(){
//     $.ajax({
//         url:'led/off',
//         type: 'PUT'
//     });
// })
//******************************************* */
const socket = io();

socket.on('connect', () => {
    console.log('Connected to server');
});

socket.on('disconnect', () => {
    console.log('Disconnected form server');
});

$("#led1").change(function(){
    if (this.checked) {
        $.ajax({
            url:'/led/on',
            type: 'PUT'
        });  
    } else {
        $.ajax({
            url:'led/off',
            type: 'PUT'
        });
    }
});