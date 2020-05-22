var httpServer = require(http);

httpServer.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end();

})