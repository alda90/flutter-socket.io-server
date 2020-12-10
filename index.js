const app = require('express')()
const http = require('http').createServer(app)
const Band = require('./models/band')
const Bands = require('./models/bands')

const bands = new Bands();
bands.addBand(new Band('Queen'));
bands.addBand(new Band('Heróes del Silencio'));
bands.addBand(new Band('The Clash'));
bands.addBand(new Band('The Cure'));



app.get('/', (req, res) => {
    res.send("Node Server is running. Yay!!")
})

//Socket Logic
const socketio = require('socket.io')(http)

socketio.on("connection", (userSocket) => {
    // userSocket.on("send_message", (data) => {
    //     userSocket.broadcast.emit("receive_message", data)
    // })

    // userSocket.emit('active-bands', bands.getBands())
})

http.listen(process.env.PORT)