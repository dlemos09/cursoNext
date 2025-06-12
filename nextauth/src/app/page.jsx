"use client";
import { signIn } from "next-auth/react";
import { FaGithub } from "react-icons/fa6";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <h1 className="mb-5">Aprendendo a trabalhar com autenticação</h1>

        <div className="flex justify-center flex-col gap-4">
          <div className="flex justify-center text-3xl gap-2 mb-4">
            <FaGithub />
          </div>
          <button
            type="submit"
            className="bg-violet-950 text-white rounded-md p-2 hover:bg-violet-700 transition-colors cursor-pointer"
            onClick={() => signIn("github", { callbackUrl: "/dashboard", prompt: "login" })}
          >
            Entrar com GitHub
          </button>
        </div>
      </main>
    </div>
  );
}
