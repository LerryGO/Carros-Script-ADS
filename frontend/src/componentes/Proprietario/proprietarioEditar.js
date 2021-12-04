import React from "react"
import './proprietarioEditar.css';
import urlapi from "../../services/api.js"

import { useEffect, useState } from 'react';

import { useParams, Link, useHistory } from "react-router-dom";

export default function ProprietarioEditar() {
    let idBoolean = false;        // edição

    //const history = useHistory();

    const [codigo, setCodigo] = useState(0);

    const [nome, setNome] = useState('');
    const [apelido, setApelido] = useState('');
    const [sexo, setSexo] = useState('');
    const [nrocnh, setNrocnh] = useState('');
    const [dataValidade, setDataValidade] = useState('');

    const [checked, setChecked] = useState(false);
    //    const [nomePag, setNomePag] = useState(false);

    const { idProprietario } = useParams();

    function IfCrud() {
        
        if (idProprietario === 0) {
                    idBoolean = true;
        } else {
           
        }
      
    }

    useEffect(() => {
        async function getProprietario() {
            if (idProprietario == 0) {
                setChecked(true);
            } else {
                const { data } = await urlapi.get('/proprietario/' + idProprietario);

                setCodigo(data[0].pro_codigo);

                setNome(data[0].pro_nome);
                setApelido(data[0].pro_apelido);
                setSexo(data[0].pro_sexo);
                setNrocnh(data[0].pro_nrocnh);
                setDataValidade(data[0].pro_datavalidade);


            }
        }
        IfCrud();
        getProprietario();
    }, []);


    async function handleProprietario(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);


        try {
            if (nome.length === 0) {
                alert('Insira um nome válido')
            } else {
                if (idProprietario == 0) {
                    await urlapi.post('proprietario', data)
                    .then(response => alert("Inserção"))
                } else {
                    await urlapi.put('/proprietario/' + idProprietario, data)
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

                <form className="form--autor" onSubmit={handleProprietario} >
                    <div className="form-row">
                        <div className="col-md-1 offset-md-1">
                            <label> Código </label>
                            <input type="text" className="form-control"
                                name="pro_codigo"
                                value={codigo}
                                onChange={e => setCodigo(e.target.value)}
                            />
                        </div>
                    </div>

                    
                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Nome do Proprietario </label>
                            <input type="text" className="form-control"
                                name="pro_nome"
                                value={nome}
                                onChange={e => setNome(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Apelido </label>
                            <input type="text" className="form-control" name="pro_apelido"
                                id="pro_apelido"
                                value={apelido}
                                onChange={e => setApelido(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Sexo </label>
                            <input type="text" className="form-control" name="pro_sexo"
                                id="pro_sexo"
                                value={sexo}
                                onChange={e => setSexo(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Número do CNH </label>
                            <input type="text" className="form-control" name="pro_nrocnh"
                                id="pro_nrocnh"
                                value={nrocnh}
                                onChange={e => setNrocnh(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Data de validade </label>
                            <input type="text" className="form-control" name="pro_datavalidade"
                                id="pro_datavalidade"
                                value={dataValidade}
                                onChange={e => setDataValidade(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="row--marks--buttons">
                        <button type="submit" className="button-save-marca">Salvar</button>
                        <Link to="/proprietario" className="button-return-marca" >Voltar</Link>
                    </div>
                </form>

            </section>

        </div>

    )
}
