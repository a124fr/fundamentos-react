import './Contador.css';
import React, { Component } from "react";
import Display from './Display';
import Botoes from './Botoes';
import PassoForm from './PassoForm';

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
        
    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso 
        })
    }

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>                
                <Display numero={this.state.numero} />
                <PassoForm passo={this.state.passo} setPasso={this.setPasso} />                
                <Botoes setInc={this.inc} setDec={this.dec} />
            </div>
        )
    }

}


export default Contador