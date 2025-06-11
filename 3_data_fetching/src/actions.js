'use server';

import { redirect } from 'next/navigation';
import { db } from '@/db';

// Função para adicionar tarefa com o envio do formulário

export const addTodo = async (formData) => {


  // Extrair os dados do formulário
  const title = formData.get("title");
  const descricao = formData.get("descricao");
  const completed = "false"; // Valor padrão para completed

  // Validar os dados
  if (!title || !descricao) {
    throw new Error("Título e descrição são obrigatórios.");
  }

  // Aqui você pode adicionar lógica para salvar a tarefa no banco de dados
  // Exemplo: usando Prisma para criar uma nova tarefa
  await db.todo.create({
    data: {
      title,
      descricao,
      completed: completed === "true", // Converter para booleano
    },
  });


  // Redirecionar para a página inicial ou outra página após a criação
  // Note: O redirecionamento deve ser feito no lado do cliente, então você pode usar o hook useRouter do Next.js

  redirect("/");
};

//function para editar tarefa com o envio do formulário
export const findTodoById = async(id) => {
    const todo = db.todo.findFirst({
      where: { id },
    });
}

// Função para deletar tarefa com o envio do formulário

export async function deleteTodo(formData) {
  
    const id = Number(formData.get("id"));
    if (isNaN(id)) throw new Error("ID inválido");

    await db.todo.deleteMany({
      where: { id },
    });

     redirect("/");
  }