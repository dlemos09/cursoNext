'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Link from 'next/link';
import ButtonVoltar from '@/components/ButtonVoltar';

export default function AddTaskForm() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:3000/tasks', {
                title,
                description,
            });

            setTitle('');
            setDescription('');
            router.push('/tasks');
        } catch (error) {
            console.error('Erro ao adicionar tarefa:', error);
            alert('Erro ao adicionar tarefa, servidor está fora do ar.');
        }
    };

    return (
        <div className=" text-gray-700 max-w-md mx-auto mt-15 p-6 bg-white rounded shadow-xl">
            <h1 className="text-2xl text-center font-bold mb-4">Adicionar Tarefa</h1>
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
                        autoFocus
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
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition cursor-pointer"
                >
                    Adicionar
                </button>
                
            </form>
           <ButtonVoltar />
           
        </div>
    );
}
