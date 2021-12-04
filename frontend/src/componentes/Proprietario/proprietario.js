import React from "react";
import './proprietario.css';


import urlapi from "../../services/api.js"
import Tabela from "../Tabelas/TabelaProprietario";

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Proprietario() {
  const [proprietario, setProprietario] = useState([])

  
  useEffect(() => {
    urlapi.get('proprietario')
      .then(response => response.data) 
      .then(response => setProprietario(response));
  }, []
  )

  return (
    <>
        <div id="idProprietario" className="proprietario">
          <div id="corpo_rel">
            <legend> Registros de Proprietario Cadastrados</legend>
            

            <div>

              <Tabela
                items={proprietario}
                chave={'/proprietario/'}
              />

            </div>
          </div>
        </div>
    </>
  );
}

export default Proprietario;

