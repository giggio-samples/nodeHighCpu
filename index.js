const http = require('http');
const port = process.env.PORT || 3000;
const bcrypt = require('bcrypt');
const rounds = +process.env.ROUNDS || 16;

const requestHandler = (request, response) => {
  console.log(request.url);
  intensive();
  response.end('Hello Node.js Server!');
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }
  console.log(`server is listening on ${port} with ${rounds}`)
});

let id = 0;
function intensive() {
  id++;
  console.time(`Request ${id}`);
  const hash = bcrypt.hashSync("foobarbaz", rounds);
  console.timeEnd(`Request ${id}`);
  console.log(hash);
}


function go() {
  intensive();
  setInterval(go, 2000);
}

go();
