"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ButtonVoltar from "@/components/ButtonVoltar";



export default function EditTasksPage() {
    const [tasks, setTasks] = useState([]);
    const [selectedTaskId, setSelectedTaskId] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        async function fetchTasks() {
            setLoading(true);
            try {
                const res = await fetch("http://localhost:3000/tasks");
                const data = await res.json();
                setTasks(data);
            } catch (err) {
                alert.show("Erro ao buscar tarefas");
            }
            setLoading(false);
        }
        fetchTasks();
    }, []);

    useEffect(() => {
        if (selectedTaskId) {
            const task = tasks.find(t => t.id === selectedTaskId);
            if (task) {
                setTitle(task.title);
                setDescription(task.description);
            }
        } else {
            setTitle("");
            setDescription("");
        }
    }, [selectedTaskId, tasks]);

    async function handleSubmit(e) {
        e.preventDefault();
        if (!selectedTaskId) return;
        try {
            await fetch(`http://localhost:3000/tasks/${selectedTaskId}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title, description }),
            });
            alert("Tarefa atualizada com sucesso!");
            router.push("/tasks"); // Redireciona para a página de tarefas
        } catch {
            alert("Erro ao atualizar tarefa");
        }
    }

    return (
        <div className="text-gray-700 max-w-md mx-auto mt-12 p-6 bg-white rounded shadow-xl">
            <h1 className="text-2xl text-center font-bold mb-4">Editar Tarefa</h1>
            {loading ? (
                <div className="text-center">Carregando tarefas...</div>
            ) : (
                <>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-1" htmlFor="task">
                            Selecione uma tarefa
                        </label>
                        <select
                            id="task"
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            value={selectedTaskId}
                            onChange={e => setSelectedTaskId(e.target.value)}
                        >
                            <option value="">Selecione...</option>
                            {tasks.map(task => (
                                <option key={task.id} value={task.id}>
                                    {task.title}
                                </option>
                            ))}
                        </select>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-gray-700 mb-1" htmlFor="title">
                                Título
                            </label>
                            <input
                                id="title"
                                type="text"
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                                placeholder="Ex: Comprar mantimentos"
                                required
                                disabled={!selectedTaskId}
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-1" htmlFor="description">
                                Descrição
                            </label>
                            <textarea
                                id="description"
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                                placeholder="Ex: Comprar leite, pão e ovos no supermercado"
                                required
                                disabled={!selectedTaskId}
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition cursor-pointer"
                            disabled={!selectedTaskId}
                        >
                            Salvar Alterações
                        </button>
                    </form>
                    <ButtonVoltar />
                </>
            )}
        </div>
    );
}