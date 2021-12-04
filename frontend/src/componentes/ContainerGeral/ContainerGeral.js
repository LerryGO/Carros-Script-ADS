import React from 'react';
import ContainerSuperior from '../ContainerSuperior/ContainerSuperior';
import AreaDados from '../AreaDados/AreaDados';
import Rodape from '../Rodape/Rodape';

import { BrowserRouter } from 'react-router-dom';

import './ContainerGeral.css';

function ContainerGeral() {
  return (
    <div className="geral">
      <BrowserRouter>
      
        <ContainerSuperior />

        <AreaDados />
        <Rodape />

      </BrowserRouter>
    </div>
  );
}

export default ContainerGeral;
