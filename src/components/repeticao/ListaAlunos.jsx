import React from 'react';
import alunos from '../data/alunos';

export default props => {
    
    const lis = alunos.map((aluno, i) => {
        return <li key={i}>{aluno.id}) {aluno.nome} - {aluno.nota}</li> 
    })
    return (
        <div>
            <ul style={{ listStyle: 'none'}}>
                {lis}
            </ul>
        </div>
    )
}