const express = require('express');
const consign = require('consign')
const cors = require('cors')

server = express()

server.use(cors())

server.use(express.json())

const porta = process.env.PORT || 3001

server.set('porta',3001)

consign({cwd:'api'})
.then('controllers')
.then('routes')
.into(server)
;

server.listen(porta, ()=>{ 
    console.log("Rodando na Porta: " + porta);
})

