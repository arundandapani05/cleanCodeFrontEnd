/*
var httpServer = require(http);

httpServer.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end();

})*/
/*
var http = require('http');
http.createServer(function (request, response) {

    response.writeHead(200, {'Content-Type': 'text/plain'});

    response.end('Server started\n');
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');*/


const axios = require('axios');
axios.get('http://www.somepage.com')
    .then(function (response) { // Reponse being the result of the first request
        // Returns another promise to the next .then(..) in the chain
        return axios.get('http://www.somepage.com/${response.someValue}');
    })
    .then(function (response) { // Reponse being the result of the second request
        // Handle response
    })
    .catch(function (error) {
        // Handle error.
    });