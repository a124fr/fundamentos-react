import React from 'react';

export default props => {

    const _cb = props.quandoClicar;

    return (
        <div>
            <div>Filho</div>
            <button onClick={()=> {
                _cb('João', 53, true);
            }}>Fornecer INformações</button>
        </div>
    )
}