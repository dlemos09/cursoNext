"use client";
// Importando o React para criar componentes
import React from "react";

import {useRouter} from "next/navigation";
// useRouter é um hook do Next.js que permite acessar o roteador para navegação programática
// Importando o hook useRouter do Next.js para navegação programática
// O hook useRouter é usado para acessar o roteador do Next.js e realizar navegação programática

const BotaoRedirect = () => {
  const router = useRouter();
  // useRouter é um hook do Next.js que retorna o objeto do roteador

  function sendEmailAndRedirect() {
    // Função para enviar um e-mail e redirecionar o usuário
    // Aqui você pode adicionar a lógica para enviar o e-mail
    alert("E-mail enviado!");

    // Redireciona o usuário para a página de pedidos após enviar o e-mail
    router.push("/dashboard/order");
  }

  return (
    <button
      className="bg-blue-500 text-white p-2 rounded-md"
      onClick={sendEmailAndRedirect}
    >
      Dashboard
    </button>
    // Botão que chama a função sendEmailAndRedirect ao ser clicado
  );
};

export default BotaoRedirect;
