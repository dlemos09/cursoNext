'use client'
// Importando o React para criar componentes

import React from 'react'
import Link from "next/link";
// Importando o componente Link do Next.js para navegação entre páginas
// O componente Link é usado para criar links que permitem a navegação entre páginas no Next.js

import { usePathname } from 'next/navigation';



const Nav = () => {
    const pathname = usePathname();
    // usePathname é um hook do Next.js que retorna o caminho atual da URL
  return (
    <nav>
        <ul className='flex gap-4 text-amber-300 text-2xl font-bold'>
            <li>
                <Link className={`link ${pathname === '/' ? "active" : ""} `} href="/">Home</Link>  
            </li>
            <li>
                <Link className={`link ${pathname === '/sobre' ? "active" : ""} `}  href="/sobre">Sobre</Link>
            </li>
            <li>
                <Link className={`link ${pathname === '/perfil' ? "active" : ""} `}  href="/perfil">Perfil</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Nav