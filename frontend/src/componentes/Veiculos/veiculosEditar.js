import React from "react"
import './veiculosEditar.css';
import urlapi from "../../services/api.js"

import { useEffect, useState } from 'react';

import { useParams, Link, useHistory } from "react-router-dom";

export default function VeiculosEditar() {
    let idBoolean = false;        // edição

    //const history = useHistory();


    const [codigo, setCodigo] = useState(0);

    const [marca, setMarca] = useState('');
    const [modelo, setModelo] = useState('');
    const [cor, setCor] = useState('');
    const [ano, setAno] = useState('');
    const [proCod, setProCod] = useState('');

    const { idVeiculos } = useParams();

    const [checked, setChecked] = useState(false);

    function IfCrud() {
            if (idVeiculos === 0) {
         
            idBoolean = true;
        } else {
            //            nomeCampo = 'Alteração de Autor';
        }
        //        setNomePag(nomeCampo);
    }

    useEffect(() => {
        async function getVeiculos() {
            if (idVeiculos == 0) {
                setChecked(true);
            } else {
                const { data } = await urlapi.get('/veiculos/' + idVeiculos);

                setCodigo(data[0].vei_codigo);

                setMarca(data[0].vei_marca);
                setModelo(data[0].vei_modelo);
                setCor(data[0].vei_cor);
                setAno(data[0].vei_anomodelo);
                setProCod(data[0].pro_codigo);
            
                
            }
        }
        IfCrud();
        getVeiculos();
    }, []);


    async function handleVeiculos(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);


        try {
            if (marca.length === 0) {
                alert('Insira uma marca válida')
            } else {
                if (idVeiculos == 0) {
                    await urlapi.post('veiculos', data)
                    .then(response => alert("Inserção"))
                } else {
                    await urlapi.put('/veiculos/' + idVeiculos, data)
                    .then(response => alert("Edição"))
                }
            }
        } catch (error) {
            alert('Erro no cadastro, tente novamente.')
        }
    }

    return (
        <div>
            <section className="sectionTable" >

                <form className="form--autor" onSubmit={handleVeiculos} >
                    <div className="form-row">
                        <div className="col-md-1 offset-md-1">
                            <label> Código </label>
                            <input type="text" className="form-control"
                                name="vei_codigo"
                                value={codigo}
                                onChange={e => setCodigo(e.target.value)}
                            />
                        </div>
                    </div>


                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Marca do Veiculo </label>
                            <input type="text" className="form-control"
                                name="vei_marca"
                                value={marca}
                                onChange={e => setMarca(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Modelo </label>
                            <input type="text" className="form-control" name="vei_modelo"
                                id="vei_modelo"
                                value={modelo}
                                onChange={e => setModelo(e.target.value)}
                            />
                        </div>
                    </div>

                    
                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Cor do carro </label>
                            <input type="text" className="form-control" name="vei_cor"
                                id="vei_cor"
                                value={cor}
                                onChange={e => setCor(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Ano do modelo </label>
                            <input type="text" className="form-control" name="vei_anomodelo"
                                id="vei_anomodelo"
                                value={ano}
                                onChange={e => setAno(e.target.value)}
                            />
                        </div>
                    </div>



                    
                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Código do Proprietario </label>
                            <input type="text" className="form-control" name="pro_codigo"
                                id="pro_codigo"
                                value={proCod}
                                onChange={e => setProCod(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="row--marks--buttons">
                        <button type="submit" className="button-save-marca">Salvar</button>
                        <Link to="/veiculos" className="button-return-marca" >Voltar</Link>
                    </div>
                </form>

            </section>

        </div>

    )
}
