"use client";
import { signIn } from "next-auth/react";
import { FaGithub } from "react-icons/fa6";

export default function ButtonGitHub() {
  return (
    <button
      type="submit"
      className="bg-violet-950 text-white rounded-md p-2 hover:bg-violet-700 transition-colors cursor-pointer"
      onClick={() =>
        signIn("github", { callbackUrl: "/tasks", prompt: "login" })
      }
    >
      <div className="flex justify-center gap-2 items-center px-3">
        <div  className="text-2xl">
          <FaGithub />
        </div>
        Entrar com GitHub
      </div>
    </button>
  );
}
