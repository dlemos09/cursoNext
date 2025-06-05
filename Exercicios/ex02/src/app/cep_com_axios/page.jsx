"use client"

import { useState } from "react";
import axios from "axios";


export default function CepComAxios() {
    const [cep, setCep] = useState("");
    const [resultado, setResultado] = useState(null);
    const [erro, setErro] = useState(null);

    const buscarCep = async () => {
        setErro(null);
        setResultado(null);
        try {
            const res = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
            if (res.data.erro) {
                setErro("CEP não encontrado.");
            } else {
                setResultado(res.data);
            }
        } catch (e) {
            setErro("Erro ao buscar o CEP.");
        }
    };

    return (
        <div style={{ padding: 20 }}>
            <h1>Buscar CEP com Axios</h1>
            <input
                type="text"
                value={cep}
                onChange={e => setCep(e.target.value)}
                placeholder="Digite o CEP"
                maxLength={8}
                style={{ marginRight: 8 }}
            />
            <button onClick={buscarCep}>Buscar</button>
            {erro && <p style={{ color: "red" }}>{erro}</p>}
            {resultado && (
                <div style={{ marginTop: 16 }}>
                    <p><strong>CEP:</strong> {resultado.cep}</p>
                    <p><strong>Logradouro:</strong> {resultado.logradouro}</p>
                    <p><strong>Bairro:</strong> {resultado.bairro}</p>
                    <p><strong>Cidade:</strong> {resultado.localidade}</p>
                    <p><strong>Estado:</strong> {resultado.uf}</p>
                </div>
            )}
        </div>
    );
}