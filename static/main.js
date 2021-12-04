console.log("Connection!");
let socket = io("http://localhost:8000"); 
    
socket.on('color', function (data) { 
      $('body').css('background-color',data.color);
  });

$('#green').on('click',function(){
    socket.emit('green', {color:'green'});
})

$('#blue').on('click',function(){
    socket.emit('blue', {color:'blue'});
})

$('#pink').on('click',function(){
    socket.emit('pink', {color:'pink'});
})