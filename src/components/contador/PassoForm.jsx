import React from 'react';

export default props => {
    return (
        <div>
            <label htmlFor="passoInt">Passo: </label>
            <input id="passoInt" type="number" 
                value={props.passo} 
                onChange={ e => props.setPasso(+e.target.value)} />
        </div>
    )
}