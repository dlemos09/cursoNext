import Image from "next/image";
import ButtonGitHub from "@/components/ButtonGitHub";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <main className="flex items-center space-x-8 justify-center p-4 ">

        <div className="flex flex-col items-center  gap-4">
          <h1 className="font-poppins text-center text-4xl border-b-2 border-gray-200 pb-4 font-bold">
            Conecta App
          </h1>
          <p className="text-center w-2xl mt-2">
            Conecta App é um projeto de exemplo para demonstrar o uso do Next.js
            com autenticação e integração com o GitHub.
          </p>
        </div>

        <aside className="flex flex-col items-center gap-4 py-25 bg-gray-200 rounded-lg shadow-lg w-80">
          <p className="mb-8 text-purple-900" >Para logar clique na opção abaixo: </p>
          <div>
            <ButtonGitHub />
          </div>
        </aside>
      </main>
    </div>
  );
}
