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

  checkIfClicked = () => {
    if (this.state.beenClicked === 0) {
      this.setState({
        beenClicked: this.state.beenClicked + 1
      })
    } else {
      console.log('you lose');
    }
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
        <Card team={"alabama"} onClickFunc={this.incrementCounter} />
        <Card team={"arkansas"} onClickFunc={this.incrementCounter} />
        <Card team={"auburn"} onClickFunc={this.incrementCounter} />
        <Card team={"florida"} onClickFunc={this.incrementCounter} />
        <Card team={"georgia"} onClickFunc={this.incrementCounter} />
        <Card team={"kentucky"} onClickFunc={this.incrementCounter} />
        <Card team={"lsu"} onClickFunc={this.incrementCounter} />
        <Card team={"mississippi"} onClickFunc={this.incrementCounter} />
        <Card team={"mississippiState"} onClickFunc={this.incrementCounter} />
        <Card team={"missouri"} onClickFunc={this.incrementCounter} />
        <Card team={"southCarolina"} onClickFunc={this.incrementCounter} />
        <Card team={"tennessee"} onClickFunc={this.incrementCounter} />
        <Card team={"atm"} onClickFunc={this.incrementCounter} />
        <Card team={"vanderbilt"} onClickFunc={this.incrementCounter} />
       </div>
      </div>
    );
  }
}

export default App;
