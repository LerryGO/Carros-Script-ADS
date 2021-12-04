import React from 'react';
import { Link } from 'react-router-dom';

import './Tabelas.css';

export default function TabelaVeiculos(props) {

  function getLinhas() {

    const arrayRegistros = props.items;

    return arrayRegistros.map((item, i) => {

      return (
        <tr className={i % 2 === 0 ? "par" : "impar"} key={item.vei_codigo}>
          <td> {item.vei_codigo} </td>
          <td> {item.vei_marca} </td>
          <td> {item.vei_modelo} </td>
          <td> {item.vei_cor} </td>
          <td> {item.vei_anomodelo} </td>
          <td> {item.pro_codigo} </td>

          <td id="editar"> <a className="btn btn-primary btn-block" href={props.chave + item.vei_codigo} > Editar </a></td>
          {/*
          <td> <Link to={props.chave + item.vei_codigo}> <i className="bi bi-clipboard-data"> </i> </Link> </td>
          <td> <i className="bi bi-trash"></i> </td>*/
        }
        </tr>
      )
    })
  }

  return (
    <div className="tabela">
      <table id="tabela" className="table table-hover">
        <thead id="cabecalho_rel">
          <tr style={{ textAlign: 'left' }}>
            <th scope="col"> Código </th>
            <th scope="col"> Marca </th>
            <th scope="col"> Modelo </th>
            <th scope="col"> Cor </th>
            <th scope="col"> Ano Modelo </th>
            <th scope="col"> Cod. Prop. </th>
            <th scope="col"><a href={props.chave + '0'} className="btn btn-success btn-block">Novo veiculo</a></th>
          </tr>
        </thead>
        <tbody>
          {getLinhas()}
        </tbody>
      </table>
    </div>
  )

}