let express = require('express');
let app = express();
let http = require('http');
let bodyParser = require('body-parser');
let server = http.createServer(app);

const PORT = 8080;

let wSocket = require('./websocket/WebSocket')(server);
let appRouter = require('./router/app');

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json()); 

server.listen(PORT, function() {
    console.log('Server running');
});

app.use('/app', appRouter);