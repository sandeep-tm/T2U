function makeEventHandler(client, clientManager) {
    function isUserExists(getter, rejectionMsg) {
        return new Promise((resolve, reject) => {
            const res = getter();
            res ? resolve(res) : reject(rejectionMsg);
        });
    }

    function getUsers(getter, rejectionMsg) {
        return new Promise((resolve, reject) => {
            const res = getter();
            res ? resolve(res) : reject(rejectionMsg);
        });
    }

    function handleEvent(client, rejectionMsg) {
        return Promise.all([
            isUserExists(() => clientManager.getClientById(client.id), rejectionMsg),
            getUsers(() => clientManager.getUsersByFilter(client), rejectionMsg)
        ]);
    }
    return handleEvent;
}


module.exports = function (client, clientManager) {
    const handleEvent = makeEventHandler(client, clientManager);

    function handleGetUser(_, callback) {
        handleEvent(client, 'User not avaliable')
            .then((client) => {
                return callback(clientManager.getUsers());
            })
            .catch((err) => {
                let strErr = `Err: ${err}`;
                console.error(strErr);
                return callback(strErr);
            });
    }

    function handleLogin(_, callback) {
        handleEvent(client, "User not avaliale")
            .then((res) => {
                return callback(res);
            })
            .catch((err) => {
                let strErr = `Err: ${err}`;
                console.error(strErr);
                return callback(strErr);
            });
    }

    return {
        handleGetUser,
        handleLogin
    };
};