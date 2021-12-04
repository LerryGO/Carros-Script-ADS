const conexao = require('../../config/conexao');

module.exports = {
    veiculosGetAll,
    veiculosGetById,
    veiculosNovo,
    veiculosEditar,
}


function  veiculosGetAll(req, res) {
    conexao.query('select * from  veiculos', (err, resposta) => {
        if (err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
          
}

function  veiculosGetById(req, res) {
    let cod = req.params.id;
    conexao.query('select * from veiculos where vei_codigo = ?',[cod], function (err, resposta) {
        if (err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
}


function veiculosNovo(req, res) {
    let dados = req.body;
    dados.vei_codigo = null;
    conexao.query( 'insert into  veiculos set ? ' ,[dados], function (err, resposta) {
        if (err) {
            throw err;
        }
        else {
            res.json(resposta);
        }
    })
}


function  veiculosEditar(req, res) {
    let dados = req.body;
    const sql = "update  veiculos set vei_marca = '" + dados.vei_marca + 
    "', vei_modelo = '" + dados.vei_modelo + 
    "', vei_cor = '" + dados.vei_cor +
    "', vei_anomodelo = '" + dados.vei_anomodelo +
    "', pro_codigo = '" + dados.pro_codigo + 
    "' where vei_codigo = '" + dados.vei_codigo + "'"
    conexao.query( sql, function (err, resposta) {
       if (err){
           throw err;
       }else{
           res.json(resposta)
       }
    });
}


