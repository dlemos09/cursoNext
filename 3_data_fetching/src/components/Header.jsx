import Link from "next/link";
import React from "react";

const Header = () => {
    return (
        <header className="bg-blue-700 px-6 py-8 fixed top-0 w-full">
            <nav className="flex items-center justify-between">
                {/* Menu à esquerda */}
                <ul className="flex space-x-8">
                    <li>
                        <Link
                            href="/"
                            className="text-white font-semibold hover:text-blue-200 transition-colors"
                        >
                            Início
                        </Link>
                    </li>
                    <li>
                        <a
                            href="/todos/create"
                            className="text-white font-semibold hover:text-blue-200 transition-colors"
                        >
                            Tarefas
                        </a>
                    </li>
                   
                </ul>
                <div>
                    
                </div>
                <img
                    src="/check.png"
                    alt="Logo"
                    className="w-25 h-25 rounded-full object-cover absolute right-8 top-8"
                />
            </nav>
        </header>
    );
};

export default Header;