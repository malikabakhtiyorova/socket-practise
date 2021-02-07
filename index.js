const express = require('express');
const ejs = require('ejs')
const socket = require('socket.io')
const http = require('http');

const app = express();
const server = http.createServer(app);
const io = socket(server)
const PORT = process.env.arg || 4000;


app.engine('html', ejs.renderFile)
app.set('view engine', 'html')

io.on('connection', (client) => {
    console.log('bismillah');
    client.on('login', username => {
        client.broadcast.emit('new_login', username)
    })

    // client.on('disconnect', () => {
    //     console.log('fiisabilillah')
    // })

    // client.broadcast.emit('message', { message: client.id, })
})

app.get('/', (req, res) => {
    res.render('index')
});

server.listen(PORT, () => console.log(PORT));