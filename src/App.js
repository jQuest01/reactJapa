import React from 'react';
import './App.css'
import Prestacoes from './components/prestacoes'
import LadoEsq from './components/divEsq'
import Container from '@material-ui/core/Container';
import Cabecalho from './components/cabecalho'

function App() {
  return (
    <Container fixed>
      <LadoEsq />
      <Cabecalho />
      <Prestacoes />
    </Container>

  );
}

export default App;