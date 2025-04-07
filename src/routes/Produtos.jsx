import React from 'react'

// props - vai pegar dados de cada propriedade de outro local
const Produtos = () => {
  return (
    <article>
      <img src={imagem} alt={titulo}/>
      <h3>{titulo}</h3>
      <p>{descricao}</p>
      <p className='preço'>{preço}</p>
      <button>Comprar</button>
    </article>
  )
}

export default Produtos
