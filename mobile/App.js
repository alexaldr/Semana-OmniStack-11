import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React from "react";
import Routes from './src/routes';

// não existe herança de estilos
// cada componente precisa ter seu estilo declarado
export default function App() {
  return (
    <Routes/>
  );
}
