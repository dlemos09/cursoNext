// app/cep/page.jsx
'use client'; // necessário para usar hooks no App Router

import { useState } from 'react';

export default function CepPage() {
  const [cep, setCep] = useState('');
  const [data, setData] = useState(null);
  const [erro, setErro] = useState(null);

  const buscarCep = async () => {
    if (!cep || cep.length !== 8) {
      setErro('Digite um CEP válido com 8 dígitos.');
      setData(null);
      return;
    }

    try {
      const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const json = await res.json();

      if (json.erro) {
        setErro('CEP não encontrado.');
        setData(null);
      } else {
        setData(json);
        setErro(null);
      }
    } catch (error) {
      setErro('Erro ao buscar o CEP.');
      setData(null);
    }
  };

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Buscar CEP</h1>

      <input
        type="text"
        placeholder="Digite o CEP (ex: 01001000)"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
        maxLength={8}
        style={{ padding: '0.5rem', marginRight: '1rem' }}
      />
      <button onClick={buscarCep} style={{ padding: '0.5rem' }}>Buscar</button>

      {erro && <p style={{ color: 'red' }}>{erro}</p>}

      {data && (
        <ul style={{ marginTop: '1rem' }}>
          <li><strong>CEP:</strong> {data.cep}</li>
          <li><strong>Logradouro:</strong> {data.logradouro}</li>
          <li><strong>Bairro:</strong> {data.bairro}</li>
          <li><strong>Cidade:</strong> {data.localidade}</li>
          <li><strong>Estado:</strong> {data.uf}</li>
        </ul>
      )}
    </main>
  );
}
