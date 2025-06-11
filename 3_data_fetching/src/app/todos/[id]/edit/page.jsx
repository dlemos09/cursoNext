import React from 'react'

import { findTodoById } from '@/actions';

const TodoEdit = async ({params}) => {
    const id  = Number(params);

    const todo = await findTodoById(id)


  return (
     <div className="flex items-center">
      <div className="mt-45 bg-white rounded-lg shadow-md mx-auto w-2xl p-8">
        <h1 className="text-3xl font-bold mb-4">Editando</h1>

        <div>
            
        </div>
      </div>
    </div>
  )
}

export default TodoEdit