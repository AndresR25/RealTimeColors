let express = require("express");
let path = require('path');
let app = express();
app.use(express.static(path.join(__dirname, "./static")));
let color = 'white';
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render("index",{});
})

let server = app.listen(8000, function() {
 console.log("Port 8000");
});

const io = require('socket.io')(server);

function newColor(color){
    io.sockets.emit('color', { color: color }); 
}

io.on('connection', function (socket) { 
    newColor(color); 
    socket.on('green', function () {
        color='green';
        newColor(color);
        console.log("Color selected "+ color);
    });
    socket.on('blue', function () { 
        color='blue';
        newColor(color)
        console.log("Color selected "+ color);
    });
    socket.on('pink', function () { 
        color='pink';
        newColor(color)
        console.log("Color selected "+ color);
    });
  });