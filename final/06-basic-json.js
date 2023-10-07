const express = require('express')
const server = express()
const { products } = require('./data')
/*
server.get('/', (request, response) => {
  response.status(200).json([{ name: 'john' }, { name: 'susan' }])
})
*/

server.get('/', (request, response) => {
  response.status(200).json(products)
})

server.all('*', (req, res) => {
  res.status(404).send('resource not found')
})
server.listen(5000, () => {
  console.log('Server is listening on port 5000...')
})
