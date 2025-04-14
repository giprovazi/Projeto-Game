import styled from "styled-components";

export const ProdutoContainer = styled.article`

width:300px;

height:500px;

margin:20px;

padding:20px;

border:1px solid #ddd;

background-image: linear-gradient(#2b86c5,#784ba0,#ff3CAC);

border-radius:30px;

color:#fff;



img {



max-width: 100%;

height: auto;

margin-bottom: 10px;

}

.preco {

font-weight: bold;

margin-top: 50px;

padding-left:50px;

color: greenyellow;

font-size: 1.8rem;

}

.btn {

background-color:#05192e;

margin: 20px 30px;

color: yellowgreen;

font-weight:800;

padding: 20px 40px;

border-radius: 20px;

cursor: pointer;

text-transform:uppercase;

&:hover {

background: greenyellow;

color: #000;

}

}

`