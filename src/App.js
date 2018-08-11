import React, { Component } from 'react';
import Capsula from './App/Capsula.js';
import Axios from 'axios';

class App extends Component {
  
  state = {
    titulos: []
  }
  componentDidMount(){
    Axios.get('http://localhost:8080/jogos').then(res => {
      const titulos = res.data;
      this.setState({titulos});
    });
  }
  render() {
    var capsulas = [];
    var numlinhas = this.state.titulos.length; 
    for (var i = 0; i < numlinhas; i++) {
        capsulas.push(<Capsula dados={this.state.titulos[i]} key={i}/>);
    }
    return (
      <div className="App">
        {capsulas}
      </div>
    );
  }
}

export default App;