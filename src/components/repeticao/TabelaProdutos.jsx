import React from "react";

import produtos from "../data/produtos";

export default props => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {produtos && produtos.map((p, i) => {
                        return <tr key={i}><td>{p.id}</td><td>{p.nome}</td><td>{p.preco}</td></tr>
                    })}
                </tbody>
            </table>
            
        </div>
    )
}