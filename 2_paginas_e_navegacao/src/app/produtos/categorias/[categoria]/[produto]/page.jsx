import React from 'react'

const ProductPage = ({params}) => {
    const produto = params.produto;
  return (
    <div>
        <h1>Vendo produto {produto}</h1>
    </div>
  )
}

export default ProductPage 