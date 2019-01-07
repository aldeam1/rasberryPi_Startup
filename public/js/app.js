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

$("#led1").change(function(){
    if (this.checked) {
        $("#led1").style("content:'On'")
        $.ajax({
            url:'/led/on',
            type: 'PUT'
        });  
    } else {
        $("#led1").style("content:'Off'")
        $.ajax({
            url:'led/off',
            type: 'PUT'
        });
    }
});