const controller = require('../controllers/veiculosControllers.js');

server.get('/veiculos', controller.veiculosGetAll)
server.get('/veiculos/:id', controller.veiculosGetById)

server.put('/veiculos/:id', controller.veiculosEditar)
server.post('/veiculos', controller.veiculosNovo)


