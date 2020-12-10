const app = require('express')()
const server = require('http').createServer(app)
const Band = require('./models/band')
const Bands = require('./models/bands')


const path = require('path');
//require('dotenv').config();


const bands = new Bands();
bands.addBand(new Band('Queen'));
bands.addBand(new Band('Heróes del Silencio'));
bands.addBand(new Band('The Clash'));
bands.addBand(new Band('The Cure'));

// App de Express
//const app = express();


// Node Server



//module.exports.io = require('socket.io')(server);
//require('./sockets/socket')
/// Path Publico
const publicPath = path.resolve( __dirname, 'public');
app.use(express.static(publicPath));

// app.get('/', (req, res) => {
//     res.send("Node Server is running. Yay!!")
// })

const socketio = require('socket.io')(server)

socketio.on("connection", (userSocket) => {
    // userSocket.on("send_message", (data) => {
    //     userSocket.broadcast.emit("receive_message", data)
    // })

    userSocket.emit('active-bands', bands.getBands())
})



server.listen(process.env.PORT);



