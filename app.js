const express = require('express')
const app = express()
const morgan = require('morgan')
const people = require('./routes/people')
const auth = require('./routes/auth')

//static assets
//app use will pass this middleware method- which grabs the static assets
//and I believe sends them to the server -i.e.the html css js etc...
app.use(express.static('./methods-public'))

//parse form data - the extended flag is the standard
app.use(express.urlencoded({ extended: false }))

//parse json
app.use(express.json())

app.use(morgan('tiny'))

//to import the routes and apply the middleware to them
app.use('/api/people', people)

app.use('/login', auth)

app.listen(8000, () => {
  console.log('Server is listening on port 8000....')
})
