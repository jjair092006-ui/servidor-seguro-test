const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('localhost-key.pem'),
  cert: fs.readFileSync('localhost.pem')
};

https.createServer(options, (req, res) => {
  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', () => {
      console.log('Datos recibidos:', body);
      res.end('Datos recibidos correctamente');
    });
  } else {
    res.end('Envíame datos mediante una petición POST');
  }
}).listen(3443, () => console.log('Servidor HTTPS escuchando en puerto 3443'));