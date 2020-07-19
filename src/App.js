import React, { useState } from 'react';
import Header from './components/Header';
import styled from '@emotion/styled';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorForm = styled.div`
  background-color: #FFF;
  padding: 3rem;
`;

function App() {
  
  const [resumen, saveResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      year: '',
      plan: ''
    }
  });
  
  const [load, saveLoad] = useState(false);

  const {cotizacion, datos} = resumen;

  return (
    <Contenedor>
      <Header
        title='Cotizador de Seguros'
      />

      <ContenedorForm>
        <Formulario
          saveResumen={saveResumen}
          saveLoad={saveLoad}
        />

        {load ? <Spinner />
        :
          <Resumen 
            datos={datos}
          />
        }
        
        {load ? null : 
          <Resultado 
          cotizacion={cotizacion}
        />
        }
        
      </ContenedorForm>
    </Contenedor>
  );
}

export default App;
