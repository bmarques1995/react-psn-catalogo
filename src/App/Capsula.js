import React, { Component } from 'react';
import Fundo from './Capsula/Fundo.js';
import Corpo from './Capsula/Corpo.js';
import Topo from './Capsula/Topo.js';

class Capsula extends Component{
    /*componentDidMount(){
        console.log(this.props);
    }*/
    render(){
        return(
            <section>
                <Topo imagem={this.props.dados.img} codigo={this.props.dados.us}/>
                <Corpo titulo={this.props.dados.titulo}/>
                <Fundo us={this.props.dados.us} mx={this.props.dados.mx} br={this.props.dados.br} grupo={this.props.dados.grupo}/>
                <input type='hidden' plataforma={this.props.dados.plataforma}/>
            </section>
        );
    }
};

export default Capsula;