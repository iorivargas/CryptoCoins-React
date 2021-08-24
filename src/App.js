import React, {useState} from 'react';
import styled from '@emotion/styled';
import imagen from './cryptomonedas.png';

//componentes
import Form from './components/Form'
import Cotizacion from "./components/Cotizacion";
import Spinner from "./components/Spinner";





const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px){
    display: grid;
    grid-template-columns: repeat(2,1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
font-family: 'Bebas Neue', cursive;
color: #fff;
text-align: left;
font-weight: 700;
font-size: 50px;
margin-bottom: 50px;
margin-top: 80px;

&::after{
  content: '';
  width: 100px;
  height: 6px;
  background-color: #66A2FE;
  display: block;
}
`;

function App() {

  //State para guardar la consulta
  const [result,saveResult] = useState({});
  const [showResult, saveShowResult] = useState(false);
  const [loading, saveLoading] = useState(false);

  let component;

  if(showResult !== false ){
      component = <Cotizacion 
                    result={result}
                  />;
  } else{
      component = null;
  }



  return (
      <Container>
        <div>
          <Imagen 
            src={imagen}
            alt="imagen-crypto"
          />
        </div>
        <div>
          <Heading>
            Cotiza tu criptomoneda al instante
          </Heading>

          <Form 
            saveResult={saveResult}
            saveShowResult={saveShowResult}
            saveLoading={saveLoading}
          />

          {loading ? 
                <Spinner />
                        :
                          null
        
          }

          { !loading ?  
                component
                : null
                }


        </div>
        

      </Container>
    );
}

export default App;
