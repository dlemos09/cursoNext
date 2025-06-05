'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/users')
      .then(response => {
        setUsers(response.data)
      })
      .catch(error => {
        console.error('Erro ao buscar usuários:', error)
      })
  }, [])

  return (
    <main>
      <h1>Lista de Usuários</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </main>
  )
}
