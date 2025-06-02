// app/cep/page.jsx
"use client"; // necessário para usar hooks no App Router

import { useState } from "react";

export default function CepPage() {
  const [cep, setCep] = useState("");
  const [data, setData] = useState(null);
  const [erro, setErro] = useState(null);

  const buscarCep = async () => {
    if (!cep || cep.length !== 8) {
      setErro("Digite um CEP válido com 8 dígitos.");
      setData(null);
      return;
    }

    try {
      const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const json = await res.json();

      if (json.erro) {
        setErro("CEP não encontrado.");
        setData(null);
      } else {
        setData(json);
        setErro(null);
      }
    } catch (error) {
      setErro("Erro ao buscar o CEP.");
      setData(null);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow">
      <div className="flex justify-around gap-4">
        <input
          type="text"
          placeholder="Digite o CEP (ex: 01001000)"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
          maxLength={8}

          className="border p-2 rounded w-full"
        />

        <button onClick={buscarCep}>Buscar</button>

      </div>

      {erro && <p id="paragrafo">{erro}</p>}

      {data && (
        <ul className="text-gray-700 mt-4">
          <li>
            <span className="potente">CEP:</span> {data.cep}
          </li>
          <li>
            <span className="potente">Logradouro:</span> {data.logradouro}
          </li>
          <li>
            <span className="potente">Bairro:</span> {data.bairro}
          </li>
          <li>
            <span className="potente">Cidade:</span> {data.localidade}
          </li>
          <li>
            <span className="potente">Estado:</span> {data.uf}
          </li>
        </ul>
      )}

    </div>
  );
}
