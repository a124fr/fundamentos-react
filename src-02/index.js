import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Primeiro from './components/basicos/Primeiro';

ReactDOM.render(
    <div>
        <Primeiro></Primeiro>
        <Primeiro />     
    </div>,
    document.getElementById("root")
);