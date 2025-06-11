import React from "react";

const loadingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <p className="text-gray-500">Carregando...</p>
      <p className="text-gray-500">Aguarde um momento</p>
      <div className="flex items-center justify-center mt-4">
        {/* Spinner de carregamento */}
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-blue-500"></div>
      </div>
    </div>
  );
};

export default loadingPage;
