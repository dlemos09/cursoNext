import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '700'], // você pode escolher os pesos desejados
});

export default function Home() {
  return (
    <main className={poppins.className}>
      <h1 className="text-5xl text-center mb-5 text-white text-shadow-lg/20">Lista de tarefas</h1>
    </main>
  );
}
