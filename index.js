const express = require('express');
const ejs = require('ejs')
const socket = require('socket.io')
const http = require('http');

const server = http.createServer(app);
const app = express();
const io = socket(server)
const PORT = process.env.arg || 4000;


app.engine('html', ejs.renderFile)
app.set('view engine', 'html')

io.on('connection', () => {
    console.log('bismillah');
})

app.get('/', (req, res) => {
    res.render('index')
});

server.listen(PORT, () => console.log(PORT));