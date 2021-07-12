'use strict'
const PORT = 4000

const express = require('express')
const app = express()

const swaggerTools = require('swagger-tools')

// swaggerRouter configuration
const options = {
    controllers: './src/controllers',
    useStubs: process.env.NODE_ENV === 'development' ? true : false
}

// The Swagger document 
// (require it, build it programmatically, fetch it from a URL, ...)
const swaggerDoc = require('./src/api/swagger.json')

// Initialize the Swagger middleware
swaggerTools.initializeMiddleware(swaggerDoc, function (middleware) {
    // Interpret Swagger resources and attach metadata to request 
    // Must be first in swagger-tools middleware chain
    app.use(middleware.swaggerMetadata())

    // Validate Swagger requests
    app.use(middleware.swaggerValidator())

    // Route validated requests to appropriate controller
    app.use(middleware.swaggerRouter(options))

    // Serve the Swagger documents and Swagger UI
    app.use(middleware.swaggerUi())

    // Start the server
    app.listen(PORT, () => {
        console.log('Server listening on ' + PORT)
    })
})