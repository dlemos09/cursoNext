import React from "react";
import Link from "next/link";
import LogoutButton from "./LogoutButton";

const NavBar = () => {
  return (
    <nav>
      <div className="flex justify-between fixed w-full items-center p-4 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-gray-800">Conecta App</h1>
        <div className="flex space-x-4">
          <Link href="/tasks" className="text-gray-600 hover:text-gray-800">
            Tarefas
          </Link>
          <Link href="/sobre" className="text-gray-600 hover:text-gray-800">
            Sobre
          </Link>
          <Link href="/contato" className="text-gray-600 hover:text-gray-800">
            Contato
          </Link>
          <div>
            <LogoutButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
