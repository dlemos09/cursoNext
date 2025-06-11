// src/app/page.jsx

import Link from "next/link";
import { db } from "@/db";
import "bootstrap-icons/font/bootstrap-icons.css";
import { FaEye, FaEdit } from "react-icons/fa";
import Button from "@/components/Button";
import { redirect } from "next/navigation";
import { deleteTodo } from "@/actions";



export default async function Home() {
  const todos = await db.todo.findMany();

  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
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
             

              <div className="flex justify-end text-2xl items-center space-x-4 mt-2">
                <Link
                  href={`/todos/${todo.id}`}
                  className="hover:text-green-500 transition-colors cursor-pointer"
                >
                  <FaEye />
                </Link>
                <Link
                  href={`/todos/${todo.id}/edit`}
                  className="hover:text-amber-600 cursor-pointer transition-colors"
                >
                  <FaEdit />
                </Link>

                <form action={deleteTodo}>
                  <input type="hidden" name="id" value={todo.id} />
                  <Button/>
                </form>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
