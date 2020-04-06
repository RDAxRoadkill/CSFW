const express = require('express')
const path = require('path')
const http = require('http')
const compression = require('compression')

const app = express()

// Compress static assets to enhance performance.
// Decrease the download size of your app through gzip compression:
app.use(compression())

//
// appname is the name of the "defaultProject" value that was set in the angular.json file.
// When built in production mode using 'ng build --prod', a ./dist/{appname} folder is
// created, containing the generated application. The appname points to that folder.
//
// Replace the name below to match your own "defaultProject" value!
//
const appname = 'client'

// Set express options
const options = {
  setHeaders: (res, path, stat) => {
    res.set(
      'Content-Security-Policy',
      "default-src 'self' webmanagement-client.herokuapp.com; script-src 'self' webmanagement-client.herokuapp.com; connect-src webmanagement-client.herokuapp.com'self'; img-src 'self' www.google.com; style-src 'self' 'unsafe-inline';"
    )
  }
}

// Point static path to dist
app.use(express.static(path.join('/src'), options))

// Catch all routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join('/src/', 'index.html'))
})

// Get port from environment and store in Express.
const port = process.env.PORT || '4200'
app.set('port', port)
// Create HTTP server.
const server = http.createServer(app)
// Listen on provided port, on all network interfaces.
server.listen(port, () => {
  console.log("serving app" + appname + "Using the following" + __dirname  + '/dist/' + appname)
  console.log(`Angular app \'${appname}\' running on port ${port}`)
})
