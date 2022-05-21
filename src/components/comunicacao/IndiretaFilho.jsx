import React from 'react';

export default props => {
    const _cb = props.quandoClicar;
    const gerarIdade = () => parseInt(Math.random() * 20) + 50;
    const gerarNerd = () => Math.random() > 0.5;

    return (
        <div>
            <div>Filho</div>
            <button onClick={_=> {
                _cb('João', gerarIdade(), gerarNerd());
            }}>Fornecer INformações</button>
        </div>
    )
}