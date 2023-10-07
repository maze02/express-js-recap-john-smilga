const express = require('express')
const app = express()
/**
 * check for https://hn.angolia.com/api/
 * for examples of handling of query strings
 */
const { products } = require('./data')

app.get('/', (req, res) => {
  res
    .status(200)
    .send('<h1> Home Page</h1><a href="/api/products">products</a>')
})

app.get('/api/products', (request, response) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product
    return { id, name, image }
  })
  response.status(200).json(newProducts)
})

app.get('/api/products/:productId', (request, response) => {
  console.log(request.params)
  const { productId } = request.params

  const singleProduct = products.find(
    (product) => product.id === Number(productId)
  )

  if (!singleProduct) {
    //if singleProduct is not found because there is no corresponding id
    return response.status(404).send('Product Does Not Exist')
  } else {
    return response.status(200).json([singleProduct])
  }
})

//more complex routes with params
app.get('/api/products/:productId/reviews/:reviewId', (req, res) => {
  console.log(req.params)
  res.send('hello world')
  /*the request details returned for the params are as follows
when you enter an address like http://localhost:5000/api/products/5/reviews/oh/

{productId:5, reviewId:'oh'}

  */
})

/**
 * query strings is a way to send info to the server
 * and for the server to decide what to do with that info
 *
 * query string paramters can be used for sorting or pagination
 *
 */

/**
 * v1 -refers to version
 * api/v1/query?name=john&id=4
 * and this will return in the request.query object
 *
 * {name:'john', id:'4'}
 *
 * api/v1/query?search=a&limit=2
 * {search:'a', limit:'2'}
 */

//this is the query route which is really simple
app.get('/api/v1/query', (req, res) => {
  console.log(req.query)
  const { search, limit } = req.query
  let sortedProducts = [...products]

  if (search) {
    sortedProducts = sortedProducts.filter((product) =>
      product.name.startsWith(search)
    )
  }

  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit))
    //res.status(200).send('no products matched your search)
    res.status(200).json(sortedProducts)
  }

  if (sortedProducts.legnth < 1) {
    return res.status(200).json({ success: true, data: [] })
  }
  res.status(200).json(sortedProducts)
})

/**Remember can only send/have one response per request,
 * so for the if conditions with reponses
 *  need to add return
 */
app.listen(5000, () => {
  console.log('hey server listening')
})
