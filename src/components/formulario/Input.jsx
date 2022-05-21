import "./Input.css";
import React, { useState } from 'react';

export default _ => {
    const [valor, setValor] = useState('Inicial');

    function quandoMudar(event) {
        setValor(event.target.value);
    } 
    return (
        <div className="Input">
            <h2>{valor}</h2>
            <div style={{
                display:'flex',
                flexDirection: 'column'
            }}>
                <input value={valor} onChange={quandoMudar} />
                <input value={valor} readOnly />
                <input value={undefined} />
            </div>
        </div>
    )
}