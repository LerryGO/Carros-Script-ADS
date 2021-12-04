import React from 'react';
//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

import proprietario from '../Proprietario/proprietario';
import proprietarioEditar from '../Proprietario/proprietarioEditar';
import veiculos from '../Veiculos/veiculos';
import veiculosEditar from '../Veiculos/veiculosEditar'

import './AreaDados.css';
 
export default function AreaDados() {
  return (
    <div id="idArea" className="areaDados">
      <Switch>
        <Route exact path="/proprietario" component={proprietario}></Route>
        <Route exact path="/proprietario/:idProprietario" component={proprietarioEditar}></Route>

        <Route exact path="/veiculos" component={veiculos}></Route>
        <Route exact path="/veiculos/:idVeiculos" component={veiculosEditar}></Route>



      </Switch>

    </div>
  );
}

