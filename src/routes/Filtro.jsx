import { FiltroContainer } from '../styles/FiltroStyled';

const Filtro = ({ titulo, opcoes, tipo, min, max, valor, onChange }) => {

  return (

    <FiltroContainer>

      <h3>{titulo}</h3>

      {/* {tipo === 'range' ? (

        <input

          _type_="range"

          _min_={min}

          _max_={max}

          _value_={valor}

          _onChange_={(e) => onChange(e.target.value)} // Adicione a função onChange aqui

        />

      ) : (

        <ul>

          {opcoes.map((opcao) => (

            <li _key_={_opcao_}>

              <a _href_="#" _onClick_={(_e_) => { e.preventDefault(); onChange(opcao); }}>

                {opcao}

              </a>

            </li>

          ))}

        </ul>

      )} */}

    </FiltroContainer>

  )

}

export default Filtro