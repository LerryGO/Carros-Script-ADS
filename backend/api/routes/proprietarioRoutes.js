const controller = require('../controllers/proprietarioControllers.js');


server.get('/proprietario', controller.proprietarioGetAll)
server.get('/proprietario/:id', controller.proprietarioGetById)

server.put('/proprietario/:id', controller.proprietarioEditar)
server.post('/proprietario', controller.proprietarioNovo)

