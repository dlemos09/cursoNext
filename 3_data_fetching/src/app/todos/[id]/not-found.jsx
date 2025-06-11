import React from 'react'
import Link from 'next/link'

const TodoNotFound = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <h1 className='text-red-500 mb-3 text-3xl'>Tarefa não encontrada</h1>
        <Link href="/"> Voltar para início</Link>
    </div>
  )
}

export default TodoNotFound