// --evinimente de click pe amble butoane cu jquarry $...
// call ajax catre led on , led off
// functional programing
//culoare buton in functie de stare


$("#turn-on").click (function(){
    $.ajax({
        url:'/led/on',
        type: 'PUT'
    });
    // return alert('Button Turn On was pressed');
})

$("#turn-off").click (function(){
    $.ajax({
        url:'led/off',
        type: 'PUT'
    });
})