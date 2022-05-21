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
        numero: this.props.numeroInicial
    }

    // usado na 1°, 2°, 3° forma
    // inc() {
    //     this.setState({ numero: this.state.numero+1 })
    // }
    
    /* 4° Forma */    
    inc = () => {
        this.setState({ numero: this.state.numero + 1 });
    }

    dec = () => {
        this.setState({ numero: this.state.numero - 1 });
    }

    render() {
        return (
            <div>
                <h2>Contador</h2>                
                <h3>{this.state.numero}</h3>
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