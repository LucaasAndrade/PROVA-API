import { Router } from 'express'

const server = Router();

server.get('/ping', (req, resp) => {
    resp.send({
        AA: 'Pong'
    })
})

export default server;