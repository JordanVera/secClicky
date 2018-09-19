import React, { Component } from 'react';
import Card from './components/Card';
import Header from './components/Header';
import './App.css';

class App extends Component {
  state = { 
    counter:0
  }

  incrementCounter = () => {
   this.setState({
     counter: this.state.counter + 1
   })
  }

  resetGame = () => {
    this.setState({
      counter: 0
    })
  }

  // onClick = () => {
  //   incrementCounter()
  //   checkIfClicked()
  // }

  render() {
    return (
      <div className="App grid-container">
       <Header counter={this.state.counter} clicked={this.state.beenClicked} />
       <div className="grid">
        <Card reset={this.resetGame} team={"alabama"} onClickFunc={this.incrementCounter} />
        <Card reset={this.resetGame} team={"arkansas"} onClickFunc={this.incrementCounter} />
        <Card reset={this.resetGame} team={"auburn"} onClickFunc={this.incrementCounter} />
        <Card reset={this.resetGame} team={"florida"} onClickFunc={this.incrementCounter} />
        <Card reset={this.resetGame} team={"georgia"} onClickFunc={this.incrementCounter} />
        <Card reset={this.resetGame} team={"kentucky"} onClickFunc={this.incrementCounter} />
        <Card reset={this.resetGame} team={"lsu"} onClickFunc={this.incrementCounter} />
        <Card reset={this.resetGame} team={"mississippi"} onClickFunc={this.incrementCounter} />
        <Card reset={this.resetGame} team={"mississippiState"} onClickFunc={this.incrementCounter} />
        <Card reset={this.resetGame} team={"missouri"} onClickFunc={this.incrementCounter} />
        <Card reset={this.resetGame} team={"southCarolina"} onClickFunc={this.incrementCounter} />
        <Card reset={this.resetGame} team={"tennessee"} onClickFunc={this.incrementCounter} />
        <Card reset={this.resetGame} team={"atm"} onClickFunc={this.incrementCounter} />
        <Card reset={this.resetGame} team={"vanderbilt"} onClickFunc={this.incrementCounter} />
       </div>
      </div>
    );
  }
}

export default App;
