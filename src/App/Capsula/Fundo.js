import React, { Component } from 'react';



class Fundo extends Component{
    
    constructor(props){            
        super(props);
        
        this.state = {
            loja: 1,
            link: 'https://store.playstation.com/en-us/product/'+this.props.us
        }
    }
    componentWillUpdate(){

    }
    trocaLoja(event){
        this.setState({
            loja: parseInt(event.target.value)
        });
        switch(this.state.loja){
            case 1:
                this.setState({
                    link: 'https://store.playstation.com/en-us/product/'+this.props.us
                });
                break;
            case 2:
                this.setState({
                    link : 'https://store.playstation.com/fr-ca/product/'+this.props.us
                });
                break;
            case 3:
                if(this.props.mx===undefined)
                    this.setState({
                        link : 'https://store.playstation.com/es-mx/product/'+this.props.us
                    });
                else
                    this.setState({
                        link : 'https://store.playstation.com/es-mx/product/'+this.props.mx
                    });
                break;
            case 4:
                if(this.props.br===undefined)
                    this.setState({
                        link : 'https://store.playstation.com/pt-br/product/'+this.props.us
                    });
                else
                    this.setState({
                        link : 'https://store.playstation.com/pt-br/product/'+this.props.br
                    });
                break;
            default:
                break;
        }
    }
    link(e){
        let link = this.state.link;
        window.location.href(link,'_blank');
    }
    render(){
        let ca=null;
        if(this.props.grupo!==5)
            ca = <option value='2'>ca</option>
        return(
            <footer>
                <a href={this.state.link} target="_blank">Comprar</a>
                <select onChange={this.trocaLoja.bind(this)} value={this.state.loja}>
                    <option value='1' defaultValue>us</option>
                    {ca}
                    <option value='3'>mx</option>
                    <option value='4'>br</option>
                </select>
            </footer>
        );
    }
}

export default Fundo;