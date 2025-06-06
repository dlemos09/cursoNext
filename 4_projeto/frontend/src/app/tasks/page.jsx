"use client";
import React, { useEffect, useState } from "react";
import { MdOutlineAddCircle } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { BsTrash3Fill } from "react-icons/bs";
import Link from "next/link";



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

    if (loading) return <div className="text-center mt-10">Carregando tarefas...</div>;

    return (
        <div className="max-w-xl mx-auto mt-50 p-6 bg-white rounded shadow">
            <h1 className="text-2xl text-center font-bold mb-6">Lista de Tarefas</h1>
            <div className="mb-6 flex justify-end">
                <a
                    href="http://localhost:3001/addTasks"
                    className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                    <MdOutlineAddCircle />

                </a>
            </div>
            {tasks.length === 0 ? (
                <div className="text-gray-500">Nenhuma tarefa encontrada.</div>
            ) : (
                <ul className="space-y-4">
                    {tasks.map((task) => (
                        <li
                            key={task.id}
                            className="flex items-center justify-between bg-gray-50 p-4 rounded border"
                        >
                            <div>
                                <div className="font-semibold text-gray-700">{task.title}</div>
                                <div className="text-gray-500 text-sm">{task.description}</div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Link
                                     href={`/editTasks/${task.id}`}
                                    className="bg-blue-600 text-white px-2 py-2 rounded-full hover:bg-blue-700 transition cursor-pointer mr-2"
                                >
                                    <FaEdit />
                                </Link>
                                <button
                                    onClick={() => handleDelete(task.id)}
                                    className="bg-red-600 text-white px-2 py-2 rounded-full hover:bg-red-700 transition cursor-pointer"
                                >
                                    <BsTrash3Fill />
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
