import React from "react"
import './veiculos.css';


import urlapi from "../../services/api.js"
import Tabela from "../Tabelas/TabelaVeiculos";

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Veiculos() {
  const [veiculos, setVeiculos] = useState([])

  
  useEffect(() => {
    urlapi.get('veiculos')
      .then(response => response.data)
      .then(response => setVeiculos(response));
      
  }, []
  )

  return (
    <>
        <div id="idVeiculos" className="veiculos">
          <div id="corpo_rel">
            <legend> Registros de Veiculos Cadastrados</legend>
            <Link to="/veiculos/0" value={'I'}>incluir Novo Veiculo</Link>

            <div>

              <Tabela
                items={veiculos}
                chave={'/veiculos/'}
              />

            </div>
          </div>
        </div>
    </>
  );
}

export default Veiculos;

