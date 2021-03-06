import 'dotenv/config'


import  express from 'express'
import cors from 'cors'

import petController from './controller/petscontroller.js'

const server = express();

server.use(cors());
server.use(express.json());
server.use(petController)


server.listen(process.env.PORT, () => 
    (console.log(`API online na porta ${process.env.PORT}`)));