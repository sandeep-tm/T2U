const io = require('socket.io-client');

const socket = (() => {
    'use strict';

    const io = io.connect('http://localhost:3000');

    let doLogin = () => {
        io.emit('ssl', null, (res) => {
            console.log(res);
        });
    };

    return {
        doLogin: doLogin
    };
})();

export default socket;