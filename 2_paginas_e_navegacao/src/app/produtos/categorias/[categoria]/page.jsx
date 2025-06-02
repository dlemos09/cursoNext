import React from 'react';
import Link from 'next/link';

const CategoryPage = () => {
  return (
    <div>
        <h1>Conheça nossos eletronicos </h1>
        <Link href="/produtos/categorias/eletronicos/computador_acer_i7">Computadores</Link>
    </div>
  )
}

export default CategoryPage;