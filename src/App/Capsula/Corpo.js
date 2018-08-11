import React, { Component } from 'react';

class Corpo extends Component{
    render(){
        return(
            <main>
                <h3>{this.props.titulo}</h3>
            </main>
        );
    }
}

export default Corpo;