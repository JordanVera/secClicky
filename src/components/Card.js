import React, { Component } from 'react';
export default class Card extends Component {
  state = { 
    clicked: 0
   }

  checkIfClicked = () => {
    if (this.state.clicked === 0) {
      this.setState({
        clicked: this.state.clicked + 1,
      })
    } else {
      alert('you lose')
      this.props.reset()
    }
  }



  render() {
    return (
      <React.Fragment>
     	<div onClick={ () => { this.props.onClickFunc(); this.checkIfClicked(this.props.reset) } } id={this.props.team} className="callout">
     	  
     	</div>
      </React.Fragment>
    );
  }
}