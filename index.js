var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


// basic express route for index
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

// socket connection log
io.on('connection', function(socket) {
    console.log('A new WebSocket connection has been established');
});

// count stock price
setInterval(function() {
  var stockprice = Math.floor(Math.random() * 1000);
  io.emit('stock price reyiz', stockprice);
}, 200);

http.listen(8000, function() {
    console.log('Listening on *:8000');
});