const express = require('express')
const path = require('path') //import the path module

const app = express()

/*
app.get('/', (req, res) => {
  //using path.resolve to create an absolute path
  //could  use simply join here
  res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))

  sendFile is really used to add to static assets
  and ssr server side rendering ?
}) */
//common convention is to call it public
//this serves all the resources rightaway
//app.use is uses for the middleware
//to serve a simple site can simply dump all the resouces in the public
//and it will do its business
app.use(express.static('./public'))
//a static asset is a  file which our server doesn't need to change

app.all('*', (req, res) => {
  res.status(404).send('resoure not found')
})
app.listen(8001, () => {
  console.log('server is llistening on port 8001...')
})

//There are things such as server side rendering and template engines
