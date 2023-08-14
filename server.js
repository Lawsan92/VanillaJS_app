const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {

  if (req.url === '/' || req.url === '') {
    req.url = '/index.html';
  }

  const extension = path.extname(req.url); // <- this method returns the extension of a filepath

  let [contentType, filePath] = [null, `${__dirname}/public${req.url}`];

  // set headers and routes for different MIME types...you and add as many cases as needed given your project requirements
  switch (extension) {
    case '.css':
      contentType = 'text/css';
      break;
    case '.js':
      contentType = 'text/javascript';
      filePath = `${__dirname}/public/javascript${req.url}`;
      break;
    case '.jpg':
      contentType = 'image/jpeg';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.ico':
      contentType = 'image/vnd';
      break;
    default:
      contentType = 'text/html';
  };

  console.group()
    console.log('/START:-------------/')
    console.log('url:', req.url)
    console.log('path:', req.path)
    console.log('method:', req.method)
    console.log( 'extension:', extension)
    console.log( 'filePath:', filePath)
    console.log('/-------------:END/')
  console.groupEnd();

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.log(`File Not Found ${filePath}, error: ${err.stack}`);
      res.writeHead(404);
      res.end();
    } else {
      console.log(`Returning ${filePath}`);
      res.writeHead(200, {"Content-Type": contentType})
      res.end(data);
    }
  });
});

const port = 3000;

server.listen(port, () => {
  console.log(`Server running at localhost:${port}`);
});