"use client";
import { useEffect } from "react";

export default function NotAuthenticated() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "/";
    }, 3000);

    return () => clearTimeout(timer); // limpa o timer se o componente for desmontado
  }, []);

  return (
    <div>
      <h1>Você não está autenticado</h1>
      <p>Por favor, faça login para acessar o dashboard.</p>
      <p>Redirecionando em 3 segundos...</p>
    </div>
  );
}
