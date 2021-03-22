//console.log("Hello world");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Good Morning ');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Responsive Fonts</title>
      <style>
          .container{
              font-size: 10px;
              border: 2px solid black;
              width: 100vw;
              height: 100vh;
          }
  
          .box-1
          {
              /* font-size: 10em; */
              display: none;
          }
  
          .box-2
          {
              /* font-size: 5rem; */display: none;
          }
  
          .container h1{
              /* text-align: center; */display: none;
          }
  
          @media(max-width: 500px)
          {
              #boxphone{
                  display: block;
              }
  
          }
      </style>
  </head>
  <body>
      <div class="container">
          <h1 class="box-1" id="boxphone"> This is first: iphone</h1>
          <h1 class="box-2">This is Second: tablet</h1>
          <h1 class="box-3">This is Third: computer</h1>
      </div>
      
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});