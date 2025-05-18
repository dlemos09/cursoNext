import Image from "next/image";
import styles from "../page.module.css"; // não esquecer de mudar o caminhdo do arquivo

export default function About() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>

        <h1>Página Sobre</h1>


        {/* <a href="../">Voltar</a> */}

      </main>
    </div>
  );
}
