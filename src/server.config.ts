import express from 'express';
import env from 'dotenv';
import controller from './controller/controller';

env.config();
// import {Router} from "express";

const server = express();

server.use(express.json())
server.use(express.urlencoded({extended: true}))

server.set('port', 5200);

server.use('/api/diaries', controller)


// server.get('/ping', (_req, res) => {
//     console.log("someone pinged here!!! 🏓")
//     res.send("<h2>pong!! 🏓</h2>")

// })

export default server; 