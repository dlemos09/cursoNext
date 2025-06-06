import Image from "next/image";

export default function Home() {
  return (
    <div className=" flex items-center justify-center min-h-screen bg-gray-100 p-4 ">
      <main className="bg-white p-8 mt-30 rounded-lg shadow-md w-full max-w-3xl">
       <h1 className="text-3xl font-bold mb-4 text-center">
          Bem-vindo ao <span className="text-blue-900">TodoApp</span>
        </h1>
        <p className="mb-4 text-center">
          Esta é uma aplicação de exemplo para gerenciar tarefas.
        </p>
      </main>
    </div>
  );
}
