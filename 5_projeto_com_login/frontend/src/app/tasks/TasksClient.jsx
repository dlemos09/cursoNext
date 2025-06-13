"use client";
import React, { useEffect, useState } from "react";
import { MdOutlineAddCircle } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { BsTrash3Fill } from "react-icons/bs";
import Link from "next/link";
import Titulo from "@/components/Titulo";


export default function TasksPage() {

  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/tasks")
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  //  Função de deletar tarefa
  const handleDelete = async (id) => {
    if (!confirm("Tem certeza que deseja excluir esta tarefa?")) return;
    await fetch(`http://localhost:3000/tasks/${id}`, { method: "DELETE" });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  if (loading)
    return <div className="text-center mt-10">Carregando tarefas...</div>;

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className=" w-full  max-w-4xl">
        <Titulo />
        <div  className="flex items-center gap-1 justify-end">
            <p>Clique aqui para adicionar </p>
          <Link
            href="http://localhost:3001/addTasks"
            className=" text-4xl bg-white text-purple-900 rounded-full hover:text-white hover:bg-purple-700 transition"
          >
          <MdOutlineAddCircle />
          </Link>
        </div>
        {tasks.length === 0 ? (
          <div className="text-gray-500">Nenhuma tarefa encontrada.</div>
        ) : (
          <ul className="grid grid-cols-3 gap-4 mt-4">
            {tasks.map((task) => (
              <li
                key={task.id}
                className="flex items-center justify-between bg-white p-8 rounded-lg w-full h-32  shadow-md  hover:shadow-2xl  hover:scale-105 transition duration-700 ease-in-out"
              >
                <div className="w-full">
                  <div>
                    <div className="font-semibold text-gray-700">
                      {task.title}
                    </div>
                    <div className="text-gray-500">
                      <p className="text-wrap"> {task.description} </p> 
                    </div>
                  </div>
                  <div className="flex justify-end w-full  mt-2">
                    <Link
                      href={`/editTasks/${task.id}`}
                      className="text-violet-500 text-xl px-2 py-2 rounded-full transition cursor-pointer hover:bg-violet-100 hover:text-violet-700"
                    >
                      <FaEdit />
                    </Link>
                    <button
                      onClick={() => handleDelete(task.id)}
                      className="text-red-500 text-xl px-2 py-2 rounded-full transition cursor-pointer hover:bg-red-100 hover:text-red-700"
                    >
                      <BsTrash3Fill />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
