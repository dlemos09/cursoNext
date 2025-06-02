'use client';
import { useState } from "react";

export default function PokemonPage() {
  const [nome, setNome] = useState("");
  const [pokemon, setPokemon] = useState(null);
  const [erro, setErro] = useState(null);
  const [loading, setLoading] = useState(false);

  const buscarPokemon = async () => {
    if (!nome.trim()) return;

    setLoading(true);
    try {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${nome.toLowerCase()}`
      );

      if (!res.ok) {
        setErro("Pokémon não encontrado.");
        setPokemon(null);
      } else {
        const data = await res.json();
        setPokemon(data);
        setErro(null);
        setNome(""); // clear input
      }
    } catch (err) {
      console.error(err);
      setErro("Erro ao buscar o Pokémon.");
      setPokemon(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Buscar Pokémon</h1>

      <input
        type="text"
        placeholder="Digite o nome (ex: pikachu)"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') buscarPokemon();
        }}
        style={{ padding: "0.5rem", marginRight: "1rem" }}
      />
      <button onClick={buscarPokemon} style={{ padding: "0.5rem" }}>
        Buscar
      </button>

      {loading && <p>Carregando...</p>}
      {erro && <p style={{ color: "red" }}>{erro}</p>}

      {pokemon && (
        <div style={{ marginTop: "1rem" }}>
          <h2>{pokemon.name.toUpperCase()}</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <p>
            <strong>Altura:</strong> {pokemon.height}
          </p>
          <p>
            <strong>Peso:</strong> {pokemon.weight}
          </p>
          <p>
            <strong>Tipos:</strong>{" "}
            {pokemon.types.map((t) => t.type.name).join(", ")}
          </p>
        </div>
      )}
    </main>
  );
}
