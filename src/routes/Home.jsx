import React from 'react'
import Produtos from "./Produtos"
import { Main } from '../styles/HomeStyled'

const Home = ({Dados}) => {
  return (
    <Main>
      {Dados.map((produto) =>(
        <Produtos
          key={produto.id}
          imagem={produto.imagem}
          titulo={produto.titulo}
          descricao={produto.descricao}
          preco={produto.preco}
        />
      ))}
    </Main>
  )
}

export default Home
