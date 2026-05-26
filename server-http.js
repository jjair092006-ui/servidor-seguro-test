const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hola, servidor HTTP inseguro.');
});
server.listen(3000, () => console.log('Servidor HTTP en http://localhost:3000'));