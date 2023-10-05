console.log('Express Tutorial')

const http = require('http')

const server = http.createServer((req, res) => {
  console.log('user hit the server')
  //home page
  if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' }) //writes the header response
    /**You can get content-type, media-type etc...
     * The type of response being sent matters, because it tells the browser how to render the content */
    res.write('<h1>home page</h1>')
    res.end('home page') //signals end of communication with the server
  }
  // about page
  else if (url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write('<h1>about page</h1>')
    res.end() //signals end of communication with the server
  }
  //404
  else {
    res.writeHead(404, { 'content-type': 'text/html' })
    res.write('<h1>page not found</h1>')
    res.end() //signals end of communication with the server
  }
})

server.listen(5000)
