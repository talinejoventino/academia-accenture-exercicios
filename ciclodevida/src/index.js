import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component{
  state ={
    clicou: "Botão ainda não selecionado"
  }
  componentDidMount(){
    console.log('[App] - Apareceu na tela')
  }
  handleClick(){
    this.setState({
      clicou: "O botão foi clicado"
    })
  }
  render(){
    console.log("[App] - Apareceu na tela")
    return(
      <div>
        Olá, {this.props.nome}, você {this.state.clicou}.
        <button onClick={this.handleClick.bind(this)}>Clique aqui</button>
      </div>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App nome={"Taline joventino"} />
  </React.StrictMode>,
  document.getElementById('root')
);

