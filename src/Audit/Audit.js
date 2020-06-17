import React, { Component } from 'react';
import './Audit.css';
import CheckboxGrid from './CheckboxGrid/CheckboxGrid';
import Graph from './Graph/Graph';

class Audit extends Component {
  static deafultProps = {
    grid: []
  }

  handleUpdate = () =>{
    const cat = this.props.cats.length;
    const loc = this.props.locs.length;
    let gr = new Array(loc*cat);
    
    for (let sqr=0; sqr<loc*cat; sqr++){
      for (let i=0; i<loc; i++){

        for (let j=0; j<cat; j++){ 
          gr[sqr] = {top: i*100, left: j*100, key: sqr, cata: this.props.cats[j], loca: this.props.locs[i], checked: 'white'};
          sqr++
            //<div className='checkbox' style={{top: i*2, left: j*2 }}></div>;
        }
      }
    }
    return gr;
  }


  render() {
    const cat = this.props.cats.length;
    const loc = this.props.locs.length;
    let gr = new Array(loc*cat);
    
    for (let sqr=0; sqr<loc*cat; sqr++){
      for (let i=0; i<loc; i++){

        for (let j=0; j<cat; j++){ 
          gr[sqr] = {top: i*100, left: j*100, key: sqr, cata: this.props.cats[j], loca: this.props.locs[i], checked: 'white'};
          sqr++
            //<div className='checkbox' style={{top: i*2, left: j*2 }}></div>;
        }
      }
    }
    //new Array(this.props.locs.length*this.props.cats.length)

    //const grid = new Array(locations.length*catagories.length);

    return (
      <div className='audit'>
        <CheckboxGrid 
          cats={this.props.cats}
          locs={this.props.locs}
          checks={gr}
          handleUpdate={this.handleUpdate()}
        />
        
        <Graph
        cats={this.props.cats}
        />
      </div>
    ); 
  }
}


export default Audit;