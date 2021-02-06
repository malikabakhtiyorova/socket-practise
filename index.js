const express = require('express');
const app = express();
const http = require('http');
const PORT = process.env.arg || 4000;
const ejs = require('ejs')

app.engine('html', ejs.renderFile)
app.set('view engine', 'html')

const server = http.createServer(app);

app.get('/', (req, res) => {

});

server.listen(PORT, () => console.log(PORT));