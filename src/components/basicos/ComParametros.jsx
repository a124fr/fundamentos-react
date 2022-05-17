import React from 'react';

export default function ComParametro(props) {
    const {titulo, aluno, nota} = props;
    return (
        <div>
            <h2>{props.titulo}</h2>
            <p> 
                <strong>{props.aluno}</strong> tem nota 
                <strong> {nota}</strong> e está 
                <strong> {nota ? 'Aprovado' : 'Recuperação'}</strong>!
            </p>
        </div>
    );
}