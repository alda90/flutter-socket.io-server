const express = require('express');
const path = require('path');
//require('dotenv').config();
const Band = require('./models/band')
const Bands = require('./models/bands')

// App de Express
const app = express();


// Node Server
const server = require('http').createServer(app);


//module.exports.io = require('socket.io')(server);
//require('./sockets/socket')
/// Path Publico
// const publicPath = path.resolve( __dirname, 'public');
// app.use(express.static(publicPath));

const socketio = require('socket.io')(http)

socketio.on("connection", (userSocket) => {
    // userSocket.on("send_message", (data) => {
    //     userSocket.broadcast.emit("receive_message", data)
    // })

    userSocket.emit('active-bands', bands.getBands())
})

app.get('/', (req, res) => {
    res.send("Node Server is running. Yay!!")
})

server.listen(process.env.PORT);