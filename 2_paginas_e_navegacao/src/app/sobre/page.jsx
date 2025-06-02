// Use o comando rafce pra construir a estrura abaixo mais rápido
import Link from "next/link"


const SobrePage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Página sobre</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, aspernatur.</p>
        <Link href="/" className='text-amber-300'>Home</Link>
    </div>
  )
}

export default SobrePage;