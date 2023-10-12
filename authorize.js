const authorize = (request, response, next) => {
  console.log('authorize')
  const { user } = request.query
  if (user === 'john') {
    request.user = { name: 'john', id: 3 }
    //attaching an attribute to the request
    next()
  } else {
    response.status(401).send('Unauthorized')
  }
}

module.exports = authorize
