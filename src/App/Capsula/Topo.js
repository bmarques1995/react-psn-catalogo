import React, { Component } from 'react';

class Topo extends Component{
    render(){
        let link ='https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/999/'+this.props.codigo+'/'+this.props.imagem+'/image?w=180&h=180&bg_color=000000&opacity=100&_version=00_09_000';
        return(
            <header className='imagem flex'>
                <img src={link} alt='erro'/>
            </header>
        );
    }
};

export default Topo;