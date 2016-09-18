var port = 3000;
var io = require('socket.io').listen(port);

io.sockets.on('connection', function(socket) {
    socket.on('message', function(message) {
        socket.broadcast.emit('message', message);
    });
});
