import React, { Component } from 'react';
import './Categories.css';

class Categories extends Component {
  render() {
    return (
      <div className='category' style={{left: this.props.pos}}>
        {this.props.Subject}
      </div>
    );
  }
}


export default Categories;