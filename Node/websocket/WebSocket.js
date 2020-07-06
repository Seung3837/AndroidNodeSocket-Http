module.exports = function (server) {
    let socketio = require('socket.io');

    let io = socketio.listen(server);

    io.sockets.on('connection', function (socket) {
        socket.on('send', function (data) {
            console.log(data);
            io.emit('msg', "hello");
        });

        socket.on('disconnect', function () {
            console.log(socket.id + " is disconnect");
        });
    });
}