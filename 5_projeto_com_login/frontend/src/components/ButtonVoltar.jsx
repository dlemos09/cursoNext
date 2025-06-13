import Link from 'next/link';

export default function ButtonVoltar() {
     return (
          <Link href='/tasks'
                className="mt-4 w-full inline-block text-center  bg-gray-300 text-gray-700 py-2 rounded hover:bg-gray-400 hover:text-white transition-colors cursor-pointer"  
            >Voltar</Link>
    );
}