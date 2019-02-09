const express = require('express')
const bodyparser = require('body-parser')
const morgan = require('morgan')
const expressServer = express()
const router = require('./apiRouter')
const http = require('http')
const cors = require('cors')
const mongoose = require('mongoose')
mongoose.connect('mongodb://root:abc123@ds127535.mlab.com:27535/blablatronic', { useNewUrlParser: true })
mongoose.connection
	.once('open', () => console.log('Connecté à MongoLab'))
	.on('error', error => console.log('Erreur de connexion à la DB', error))

expressServer.use(morgan('combined'))
expressServer.use(cors())
expressServer.use(bodyparser.json({ type: '*/*' }))
const port = 3003
const server = http.createServer(expressServer)
router(expressServer)
server.listen(port)
console.log('Le serveur écoute sur le PORT', port)
//nodemon server
