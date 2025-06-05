import { db } from "@/db";
import { redirect } from "next/navigation";


// Função para lidar com o envio do formulário

const addTodo = async (formData) => {
  "use server";

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

  // Simular a criação de uma tarefa (aqui você pode integrar com uma API real)
  console.log("Tarefa criada:", { title, descricao });

  // Redirecionar para a página inicial ou outra página após a criação
  // Note: O redirecionamento deve ser feito no lado do cliente, então você pode usar o hook useRouter do Next.js

  redirect("/");
};

const TodoPage = () => {
  return (
    <div className="max-w-md mx-auto mt-10">
      
      {/* Formulário de criação de Todo */}

      <h1 className="text-center text-2xl font-bold mb-6 mt-25">Criar Nova Tarefa</h1>
      <form
        action={addTodo}
        className="flex flex-col gap-4 p-4 bg-white shadow-lg rounded-lg"
      >
        <label className="flex flex-col">
          Título:
          <input
            type="text"
            name="title"
            id="title"
            className="mt-1 p-2 border border-gray-300 rounded"
            required
            placeholder="Digite o título da tarefa"
          />
        </label>
        <label className="flex flex-col">
          Descrição:
          <textarea
            name="descricao"
            id="descricao"
            className="mt-1 p-2 border border-gray-300 rounded"
            required
            placeholder="Digite a descrição da tarefa"
            rows="4"
            cols="50"
          ></textarea>
        </label>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors cursor-pointer"
        >
          Criar Tarefa
        </button>
      </form>
    </div>
  );
};

export default TodoPage;
