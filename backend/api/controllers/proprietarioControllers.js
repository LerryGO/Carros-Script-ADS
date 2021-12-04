const conexao = require('../../config/conexao');

module.exports = {
    proprietarioGetAll,
    proprietarioGetById,
    proprietarioNovo,
    proprietarioEditar,
}


function proprietarioGetAll(req, res) {
    console.log("Rota encontrada")
    const sql = 'select * from proprietario';
    conexao.query(sql, (err, resposta) => {
        if (err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
          
}

function proprietarioGetById(req, res) {
    let cod = req.params.id;
    conexao.query('select * from proprietario where pro_codigo = ?',[cod], function (err, resposta) {
        if (err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
}


function proprietarioNovo(req, res) {
    let dados = req.body;
    dados.pro_codigo = null;
    conexao.query( 'insert into proprietario set ? ' , dados, function (err, resposta) {
        if (err) {
            throw err;
        }
        else {
            res.json(resposta);
        }
    })
}


function proprietarioEditar(req, res) {
    let dados = req.body;
    const sql = "update proprietario set pro_nome =' " + dados.pro_nome + 
    "', pro_apelido = '" + dados.pro_apelido + 
    "', pro_sexo = '" + dados.pro_sexo +
    "', pro_nrocnh = '" + dados.pro_nrocnh +
    "', pro_datavalidade = '" + dados.pro_datavalidade + 
    "' where pro_codigo = '" + dados.pro_codigo + "'"
    conexao.query(sql, function (err, resposta) {
       if (err){
           throw err;
       }else{
           res.json(resposta)
       }
    });
}


