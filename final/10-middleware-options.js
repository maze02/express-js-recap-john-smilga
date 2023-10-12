const express = require('express')
const morgan = require('morgan') //3rd party middleware, popularly used for login
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')
//use instantiates the middleware and id you dont add a url path infront, itll  instantiate it everywhere,
//but if you do it with a url, it will instantiate after a route, it will apply it routes
//i.e. in below code, middlewarae only applied after the route

//app.use('/api')
//Also, the order in which it is placed in the route, is the sequence order, in which the middleware functions are executed
//this is a simple example and this is not how users are authorised
//into an application

//1. use ves route
app.use([authorize, logger])

//or app.get('/api/items', [authorize, logger], (request, response) => {

//2. options for middleware - use your own functions/ express functions
//app.use always expects a middleware method
//i.e. app.use(express.static('./public'))
//3.
//or third party functions like morgan - library found in npm and which can be installed
app.use(morgan('tiny'))
app.get('/', (request, response) => {
  response.send('Home')
})

app.get('/about', (request, response) => {
  response.send('About')
})

app.get('/api/products', (request, response) => {
  response.send('Products')
})

app.get('/api/items', (request, response) => {
  //accessed by http://localhost:5000/api/items/?user=john
  //which passes the authorization
  console.log(request.user)
  response.send('Items')
})

/*
app.get('/', logger, (request, response) => {
  response.send('Home')
})

app.get('/about', logger, (request, response) => {
  response.send('About')
})

app.get('/api/products', logger, (request, response) => {
  response.send('Products')
})

app.get('/api/items', logger, (request, response) => {
  response.send('Items')
})
*/
app.listen(5000, () => {
  console.log('Server is listening on port 5000... ')
})
