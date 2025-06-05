import Image from "next/image";
import Link from "next/link";
import { db } from "@/db";
import "bootstrap-icons/font/bootstrap-icons.css";
import { FaEye } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

export default async function Home() {
  // Aqui você pode buscar dados do banco de dados usando o Prisma Client, se necessário.
  // Exemplo: const todos = await db.todo.findMany();
  // Note que a busca de dados deve ser feita dentro de uma função assíncrona ou usando o hook useEffect no lado do cliente.

  const todos = await db.todo.findMany();

  return (
    <div className=" flex items-center justify-center min-h-screen bg-gray-100 p-4 ">
      <main className="bg-white p-8 mt-30 rounded-lg shadow-md w-full max-w-3xl">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Bem-vindo ao <span className="text-blue-900">TodoApp</span>
        </h1>
        <p className="mb-4 text-center">
          Esta é uma aplicação de exemplo para gerenciar tarefas.
        </p>

        <h1 className="text font-bold mb-7">Minhas tarefas</h1>
        <div className="space-y-4 w-full max-w-2xl">
          {todos.map((todo) => (
            <div key={todo.id} className="p-4 bg-gray-100 rounded-lg shadow">
              <h2 className="text-xl font-semibold">{todo.title}</h2>
              <p className="text-gray-700">{todo.descricao}</p>

              <div className="flex justify-end text-2xl items-center space-x-4 mt-2">
                <Link
                  href={`/todos/${todo.id}`}
                  className="hover:text-green-500 transition-colors cursor-pointer"
                >
                  <FaEye />
                </Link>
                <Link
                  href={`/todos/edit/${todo.id}`}
                  className="hover:text-amber-600 cursor-pointer transition-colors"
                >
                  <FaEdit />
                </Link>
                <button className="hover:text-red-600 transition-colors cursor-pointer">
                  <i className="bi bi-trash-fill"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
