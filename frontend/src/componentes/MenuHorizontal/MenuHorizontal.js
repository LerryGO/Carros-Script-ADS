import React from 'react';

import { Link } from 'react-router-dom';

import './MenuHorizontal.css';

export default function MenuHorizontal() {

  return (

      <div>
        <div className="menuHorizontal">
          <nav className="navMenu">
            <ul>
              <li> <Link to="/"> Início </Link> </li>
              <li> <Link to="/Proprietario"> Proprietario   </Link> </li>
              <li> <Link to="/Veiculos"> Veiculos </Link> </li>
              <li> <Link to="/montadora"> Montadora </Link> </li>
              <li> <Link to="/usuarios"> Usuários </Link> </li>
              <li> <Link to="/configuracoes"> Configurações </Link> </li>
            </ul>
          </nav>


        </div>

      </div>

  );
}


