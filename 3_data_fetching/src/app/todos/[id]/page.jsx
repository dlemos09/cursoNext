
import { db } from "@/db";
import { notFound } from "next/navigation";

const TodoShow = async ({ params }) => {

  await new Promise((resolve) => setTimeout(resolve, 2000)); // Simula um atraso de 2 segundos
  
  // Extrai o ID da tarefa dos parâmetros da rota

  const id = Number(params.id);

  if (isNaN(id)) {
    return <div className="text-red-500">ID inválido</div>;
  }

  // Busca a tarefa pelo ID
  const todo = await db.todo.findUnique({
    where: { id },
    select: { title: true, descricao: true },
  });

  if (!todo) {
    return notFound();
  }

  return (
    <div className="flex items-center">
      <div className="mt-45 bg-white rounded-lg shadow-md mx-auto w-2xl p-8">
        <h1 className="text-3xl font-bold mb-4">Detalhes da Tarefa</h1>
        <p className="text-gray-700 mb-4">{todo.title}</p>
        <p className="text-gray-700 mb-4">{todo.descricao}</p>
      </div>
    </div>
  );
};

export default TodoShow;
