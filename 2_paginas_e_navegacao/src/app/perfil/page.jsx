import React from 'react'
import { redirect } from 'next/navigation'

const ProfilePage = () => {
    const user = false; // Simulando a autenticação do usuário
    // Aqui você pode substituir a lógica de autenticação real
    if (!user) {
        // Se o usuário não estiver autenticado, redireciona para a página de login
        redirect('/'); 
    }

  return (
    <div><h1>Meu perfil</h1></div>
  )
}

export default ProfilePage 