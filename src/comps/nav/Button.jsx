/**
 * Buttons functions: Active clicks and filter.
 */

import React, { Component } from 'react';
import './NavStyling.css'

class Button extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false
    };
  }

  handleClick = e => {
    this.setState({ 
      clicked: !this.state.clicked 
    }, () => { // Should prob use the callback that setState provides
      if (this.props.onClick) this.props.onClick() 
    });
  };

  render() {
    let tagsClass = this.state.clicked ? "active" : "tagBtn";

    return (
      <button className={tagsClass} onClick={this.handleClick}>
          <span>
            {this.props.name}
          </span>
      </button>
    );
  }
}

export default Button;