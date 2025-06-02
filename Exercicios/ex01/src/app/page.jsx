import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main>
        <h1 className="border border-purple-600 text-fuchsia-400 text-center p-3">Bem-vindo ao site de cursos</h1>
        <div className="m-4 bg-purple-950 text-fuchsia-400 text-center p-3">

        <Link href="/courses">Ver todos os cursos</Link>
        </div>
      </main>
    </div>
  );
}
