import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component{
  state = {
    texto:  "React"
  }
  handleClick(){
    alert("Ativado!!")
  }
  handleTextChange(e){
    this.setState({
      texto: e.target.value
    })
  }
  render(){
    return(
      <div>
        <h1>HELLO WORD {this.props.nome}</h1>
        <h2>{this.state.texto}</h2>
        <input type="text" onChange={this.handleTextChange.bind(this)}></input>
        <button onClick={this.handleClick.bind(this)}></button>
      </div>
      
    ) 
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App name={"taline joventino"}/>
  </React.StrictMode>,
  document.getElementById('root')
);
