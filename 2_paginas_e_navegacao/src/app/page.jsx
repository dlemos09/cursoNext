import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Aula 01 - navegação*/}
      <h1>Olá mundo</h1>
      {/* <Link href="/sobre">Sobre</Link> */}

      {/* Aula 02 - Dados Dinâmicos*/}
      <div className="border border-red-700 p-8">
        <h1>Acessar posts</h1>
        <Link href="/posts">Posts</Link>
      </div>

      {/* Aula 3 - Parametros na URL */}
        <Link href="/exemplo?parametro=valor" className="text-amber-300">Página com Parâmetro</Link>

      {/* Aula 4 - Nested Routes */}

        <Link href="/produtos/categorias/eletronicos" className="text-purple-700">Ir para categoria de produtos</Link>

     {/* Aula 7 - Nested layouts */}
        <Link href="/dashboard" className="text-fuchsia-600">Ir para Dash</Link>

      {/* Aula 8 - Use router */}
      

    </main>
  );
}
