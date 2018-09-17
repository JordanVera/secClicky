import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
     	<div className="top-bar">
        <div className="top-bar-left">
          <h4> SEC Clicky Game </h4>
        </div>
        <div className="top-bar-right">
          <h5>Score: {this.props.counter}</h5>
        </div>
      </div>
      </React.Fragment>
    );
  }
}