import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Primeiro from './components/basicos/Primeiro';
import ComParametros from './components/basicos/ComParametros';

ReactDOM.render(
    <div>
        <Primeiro></Primeiro>           
        <ComParametros 
            titulo="Situação do Aluno" 
            aluno="Pedro" nota={3} />
    </div>,
    document.getElementById("root")
);