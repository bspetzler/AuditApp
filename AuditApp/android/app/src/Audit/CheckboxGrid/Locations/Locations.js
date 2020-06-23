import React, { Component } from 'react';
import './Locations.css';

class Locations extends Component {
  render() {
    return (
      <div className='location' style={{top: this.props.pos}}>
        {this.props.Machine}
      </div>
    );
  }
}


export default Locations;