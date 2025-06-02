"use client";

import React from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation';

const ExemploPage = () => {

  const searchParams = useSearchParams();

  const valorParam = searchParams.get("parametro")

  const presencaParam = searchParams.has('parametro')

  return (
    <div>
        <Link href="/" className='text-amber-300 m-8'>Home</Link>

        <p>Exibindo resultados para: {valorParam}</p>

        {presencaParam ? "Tem parametro" : "Não tem"}
    </div>
  )
}

export default ExemploPage;