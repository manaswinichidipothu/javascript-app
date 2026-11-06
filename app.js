import http from 'http';
const server = http.createServer((request, response) => {
    response.writeHead(200,{'Content-Type': 'text/html'});
    response.write('<h1>Hello world</h1>');
    response.end();
});
server.listen(7832, () => {
    console.log("Server running at http://localhost:7832");
});