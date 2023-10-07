const express = require('express')
const app = express()
//req => middleware =>res
/*next refers to the next middleware function called 
or to keep calling other middleware functions, unless you want 
to terminate the cycle
*/
const logger = (request, response, next) => {
  const method = request.method
  const url = request.url
  const time = new Date().getFullYear()
  console.log(method, url, time)
  next()
}

app.get('/', logger, (request, response) => {
  response.send('Home')
})

app.get('/about', logger, (request, response) => {
  response.send('About')
})
app.listen(5000, () => {
  console.log('Server is listening on port 5000... ')
})
