import './Contador.css';
import React, { Component } from "react";

class Contador extends Component {
    // Uma forma declarar o estado do componente baseado em classe.
    // constructor(props) {
    //     super(props);

    //     this.inc = this.inc.bind(this); // usado na 1° Forma

    //     this.state = {
    //         numero: props.numeroInicial
    //     }
    // }

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5
    }

    // usado na 1°, 2°, 3° forma
    // inc() {
    //     this.setState({ numero: this.state.numero+1 })
    // }
    
    /* 4° Forma */    
    inc = () => {
        this.setState({ numero: this.state.numero + this.state.passo });
    }

    dec = () => {
        this.setState({ numero: this.state.numero - this.state.passo });
    }
        
    setPasso = (event) => {
        this.setState({
            passo: +event.target.value // + faz a conversão para o valor númerico
        })
    }

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>                
                <h3>{this.state.numero}</h3>
                <div>
                    <label htmlFor="passoInt">Passo: </label>
                    <input id="passoInt" type="number" value={this.state.passo} onChange={this.setPasso} />
                </div>
                {/* 1° Forma */}
                {/* <button onClick={this.inc}>+</button>  */}
                {/* 2° Forma */}
                {/* <button onClick={this.inc.bind(this)}>+</button> */}
                {/* 3° Forma */}
                {/* Devido ao contexto léxico da Arrow Function é possível fazer essa operação. */}
                {/* <button onClick={()=> this.inc()}>+</button> */}
                {/* 4° Forma */}
                {/* Devido ao contexto léxico da Arrow Function é possível fazer essa operação. */}
                <button onClick={this.inc}>+</button>
                <button onClick={this.dec}>-</button>
            </div>
        )
    }

}


export default Contador