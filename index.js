const express = require('express');
const path = require('path');
//require('dotenv').config();

// App de Express
const app = express();


// Node Server
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./sockets/socket')
/// Path Publico
// const publicPath = path.resolve( __dirname, 'public');
// app.use(express.static(publicPath));

app.get('/', (req, res) => {
    res.send("Node Server is running. Yay!!")
})

server.listen(process.env.PORT);