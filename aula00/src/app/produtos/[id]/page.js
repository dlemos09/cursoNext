"use client"

import Image from "next/image";
import styles from "../../page.module.css"; // não esquecer de mudar o caminhdo do arquivo

import { useParams } from "next/navigation";

export default function Products() {

    const params = useParams();

  return (
    <div className={styles.page}>
      <main className={styles.main}>

        <h1>Página de todos os produtos {params.id} </h1>
      
      </main>
    </div>
  );
}
