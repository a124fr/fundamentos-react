import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Primeiro from './components/basicos/Primeiro';
import ComParametros from './components/basicos/ComParametros';
import Fragmento from './components/basicos/Fragmento';

ReactDOM.render(
    <div>
        <Primeiro></Primeiro>           
        <ComParametros 
            titulo="Situação do Aluno" 
            aluno="Pedro" nota={3} />
        <Fragmento />
    </div>,
    document.getElementById("root")
);