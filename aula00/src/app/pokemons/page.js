import Image from "next/image";
import styles from "../page.module.css";

async function getData() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon-species/");
  return response.json();
}

export default async function Pokemons() {
  const { results } = await getData();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Pokemons</h1>

        <ul>
          {results
            ? results.map((p) => <li key={p.name}>{p.name}</li>)
            : null}
        </ul>
      </main>
    </div>
  );
}
