var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
    console.log('A new WebSocket connection has been established');
});
io.on('close', function(socket) {
    console.log('Closed web socket.');
});

setInterval(function() {
  var stockprice = Math.floor(Math.random() * 1000);
  io.emit('stock price reyiz', stockprice);
}, 200);

http.listen(8000, function() {
    console.log('Listening on *:8000');
});