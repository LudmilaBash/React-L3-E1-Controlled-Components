import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

   constructor(props){
   super(props);
   this.state={echo:""}; 
   };
   createEcho = (event)=>{
    this.setState({echo:event.target.value})
   }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <input type="text" placeholder="Say Something"  
           onChange={this.createEcho}/>
          <p className="echo">Echo:</p>
          <p>{this.state.echo}</p>
        </div>
      </div>
    );
  }
}

export default App;
