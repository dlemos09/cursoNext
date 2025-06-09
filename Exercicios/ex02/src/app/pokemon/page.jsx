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
        setNome("");
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
    <main className="min-h-screen bg-rose-500 flex flex-col items-center justify-start p-6 font-sans text-white">
      <h1 className="text-4xl font-bold mb-6 text-yellow-300 drop-shadow-md">
        Pokédex
      </h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Digite o nome (ex: pikachu)"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') buscarPokemon();
          }}
          className="p-2 rounded-lg border-2 border-yellow-300 text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <button
          onClick={buscarPokemon}
          className="bg-yellow-300 text-red-800 font-semibold px-4 py-2 rounded-lg hover:bg-yellow-400 transition"
        >
          Buscar
        </button>
      </div>

      {loading && <p className="text-white font-semibold">Carregando...</p>}
      {erro && <p className="text-red-200 font-semibold">{erro}</p>}

      {pokemon && (
        <div className="bg-white text-black rounded-xl shadow-xl p-6 mt-6 w-80 flex flex-col items-center border-4 border-yellow-300">
          <h2 className="text-2xl font-bold mb-2 text-red-600 uppercase">
            {pokemon.name}
          </h2>
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className="w-32 h-32"
          />
          <div className="mt-4 text-sm space-y-1">
            <p>
              <strong>Altura:</strong> {pokemon.height / 10} m
            </p>
            <p>
              <strong>Peso:</strong> {pokemon.weight / 10} kg
            </p>
            <p>
              <strong>Tipos:</strong>{" "}
              {pokemon.types.map((t) => t.type.name).join(", ")}
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
