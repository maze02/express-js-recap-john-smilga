console.log('Express Tutorial')
const { readFileSync } = require('fs')
const http = require('http')
//get all files

const homePage = readFileSync('./navbar-app/index.html')
const homeStyles = readFileSync('./navbar-app/styles.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')

const server = http.createServer((req, res) => {
  //console.log('req object', req)
  console.log('req.method', req.method)
  console.log('req.url', req.url)
  console.log('user hit the server')
  //home page
  if (req.url === '/') {
    //implies homepage
    res.writeHead(200, { 'content-type': 'text/html' }) //writes the header response
    /**You can get content-type, media-type etc...
     * The type of response being sent matters, because it tells the browser how to render the content */
    //res.write('<h1>home page</h1>')
    res.write(homePage)
    res.end() //signals end of communication with the server
  } else if (req.url === '/styles.css') {
    //implies homepage
    res.writeHead(200, { 'content-type': 'text/css' })
    res.write(homeStyles)
    res.end()
  } else if (req.url === '/logo.svg') {
    //implies homepage
    res.writeHead(200, { 'content-type': 'image/svg+xml' })
    res.write(homeImage)
    res.end()
  } else if (req.url === '/browser-app.js') {
    //implies homepage
    res.writeHead(200, { 'content-type': 'text/javascript' })
    res.write(homeLogic)
    res.end()
  }
  // about page
  else if (req.url === '/about') {
    //anyhing after the / implies request of resource
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

server.listen(8000)
