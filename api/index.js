const express = require('express')
const app = express()
// allow for a single http instance
const http = require('http')
// returns node http server
const server = http.createServer(app)
const cors = require('cors')
app.use(cors())
const io = require('socket.io')(server, {
    cors: {
        origin: 'http://localhost:1234',
        methods: ['GET', 'POST'],
    },
})

// cors

io.on('connection', (socket) => {
    console.log('a user has connected', socket)
})

// GET route that will be used to fetch from react
app.get('/', (req, res) => {
    res.send('Hello world!')
})

const port = process.env.PORT || 9000
server.listen(port, () => console.log(`Listening on http://localhost:${port}`))
