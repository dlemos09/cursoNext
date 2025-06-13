import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import TasksClient from "./TasksClient";
import { SiAdblock } from "react-icons/si";

export default async function TasksPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <div className="flex bg-white justify-center text-8xl text-red-600 items-center min-h-screen">
        <div>
          <h1 className="text-4xl font-bold mb-4">Acesso Negado</h1>
          <p className="text-xl mb-6">
            Você precisa estar logado para acessar esta página.
          </p>
          <p className="text-lg">Por favor, faça login para continuar.</p>
          <div className="flex justify-end mt-4">
            <SiAdblock />
          </div>
        </div>
      </div>
    );
  }

  return <TasksClient />;
}
