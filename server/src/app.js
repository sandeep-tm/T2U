const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http').Server(app);
const io = require('socket.io')(http);

const clientManager = require('./clientManager')();
const handler = require('./handlers');
const users = require('../src/config/users');

app.use(cors());
app.get('/', (req, res) => {
    res.send({ msg: 'Requesting server to listen' });
});

io.on('connection', (client) => {
    console.log(`Client connected ${client.id}`);

    const {
        handleGetUser
    } = handler(client, clientManager);

    clientManager.addClient(client);
    client.on('ssl', handleGetUser);

    client.on('disconnect', () => {
        console.log(`Client disconnected ${client.id}`);
    });
});

http.listen(3000, () => console.log('Requesting server to listen'));

