import React, { Component } from 'react';
import './Checkbox.css';

class Checkbox extends Component {
  
  state = {checked: 'white'}

  

  render() {
    const pull = this.props.pee;
    return (
      <button onClick={() => this.props.handleClick(this.props.checkId)} type='button' className='checkbox' style={{top: this.props.top, left: this.props.left, backgroundColor: this.props.checked}}>
        {pull}
      </button>
    );
  }
}


export default Checkbox;