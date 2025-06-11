
import { addTodo } from "@/actions";

// Função para lidar com o envio do formulário



const TodoPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* Formulário de criação de Todo */}
      <div className="p-6 rounded-lg  mt-10">
        <h1 className="text-center text-2xl font-bold mb-6 mt-25">
          Criar Nova Tarefa
        </h1>
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
    </div>
  );
};

export default TodoPage;
