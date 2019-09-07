const users = require('./config/users');

module.exports = function () {
    let clients = new Map();

    let addClient = function (client) {
        clients.set(client.id, client);
    };

    let getClientById = function (ClientId) {
        return clients.get(ClientId);
    };

    let getUsers = function () {
        return users;
    };

    let getUsersByFilter = function (user) {
        return users;
    };

    return {
        addClient,
        getClientById,
        getUsers,
        getUsersByFilter
    };
};