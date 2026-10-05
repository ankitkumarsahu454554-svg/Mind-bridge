const handleRequest = require('../server/index.js');

module.exports = async (req, res) => {
    return handleRequest(req, res);
};
