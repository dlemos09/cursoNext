import Cep from "@/components/Cep";

export default function Home() {
  return (
    <div>
      <main>
          <h1 className="text-3xl text-center font-bold mt-10">
            <span className="text-blue-700">
              Buscar Endereço com CEP
            </span>
          </h1>
          <p className="text-center text-blue-950 mt-4">
            Digite o CEP para buscar o endereço correspondente.
          </p>
          
          <Cep/>
          
      </main>
    </div>
  );
}
