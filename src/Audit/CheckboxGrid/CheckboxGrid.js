import React, { Component } from 'react';
import './CheckboxGrid.css';
import Checkbox from './Checkbox/Checkbox';
import Categories from './Categories/Categories';
import Locations from './Locations/Locations';
import Graph from '../Graph/Graph';

class CheckboxGrid extends Component {
  state = {
    locPass: [],
    catPass: [],
    locFail: [],
    catFail: [],
    checkboxes: this.props.checks,
  }
  constructor(props){
    super(props);
    this.CheckboxElement = React.createRef();
  }
  updateGrid = () => {
    console.log('updateGrid ran');
    console.log(this.state.checkboxes);
    let locPass = new Array(this.props.locs.length).fill(0);
    let locFail = new Array(this.props.locs.length).fill(0);
    let catPass = new Array(this.props.cats.length).fill(0);
    let catFail = new Array(this.props.cats.length).fill(0);
    console.log(locFail);
    for (let i=0; i<this.state.checkboxes.length; i++){ // iterate through ll checkboxes
      console.log('check iter');
      if (this.state.checkboxes[i].checked==='green'){ //for pass checkboxes
        for (let cat=0; cat<this.props.cats.length; cat++){ //iterate through all catagories to see which it is
          console.log('cat iter');
          if(this.state.checkboxes[i].cata===this.props.cats[cat]){
            console.log('cat got one');
            catPass[cat] = catPass[cat]+1;
          }
        }
        for (let loc=0; loc<this.props.locs.length; loc++){ //iterate through all locations to see which it is
          console.log('loc iter');
          if(this.state.checkboxes[i].loca===this.props.locs[loc]){
            console.log('loc got one');
            locPass[loc] = locPass[loc]+1;
          }
        }
      } else if (this.state.checkboxes[i].checked==='red'){ //for fail checkboxes
        for (let cat=0; cat<this.props.cats.length; cat++){ //iterate through all catagories to see which it is
          console.log('cat iter');
          if(this.state.checkboxes[i].cata===this.props.cats[cat]){
            console.log('cat got one');
            catFail[cat] = catFail[cat]+1;
          }
        }
        for (let loc=0; loc<this.props.locs.length; loc++){ //iterate through all locations to see which it is
          console.log('loc iter');
          if(this.state.checkboxes[i].loca===this.props.locs[loc]){
            console.log('loc got one');
            locFail[loc] = locFail[loc]+1;
          }
        }
      }
    }
    console.log(this.state)
    this.setState({
      locPass: locPass,
      catPass: catPass,
      locFail: locFail,
      catFail: catFail,
    })
  }

  handleClick = (id) => {
    console.log('handleClick ran')
    if (this.state.checkboxes[id].checked==='white'){
      let newChecks = this.props.checks;
      newChecks[id].checked='green';
      this.setState({
        checkboxes: newChecks
      })
    } else if (this.state.checkboxes[id].checked==='green') {
      let newChecks = this.props.checks;
      newChecks[id].checked='red';
      this.setState({
        checkboxes: newChecks
      })
    } else {
      let newChecks = this.props.checks;
      newChecks[id].checked='white';
      this.setState({
        checkboxes: newChecks
      })
    }
    
  }
  
  
  render() {
    const locations = this.props.locs
      .map((file, key) => <Locations {...file} key={key} pos={this.props.checks[key].left+17}/>);
    
    const categories = this.props.cats
      .map((file, key) => <Categories {...file} key={key} pos={this.props.checks[key].left+17} />);
    let data = this.props.checks.map((value, id) => 
      <Checkbox
      ref={this.CheckboxElement}
      key={this.props.checks[id].key}
      checkId={this.props.checks[id].key}
      cat={this.props.checks[id].cata}
      loc={this.props.checks[id].loca}
      top={this.props.checks[id].top}
      left={this.props.checks[id].left}
      checked={this.state.checkboxes[id].checked}
      handleClick={this.handleClick}/>);
    
    
    return (
      <div className='grid'>
        {locations}
        {categories}
        {data}
        <Graph 
        data={this.state}
        cat={this.props.cats}
        loc={this.props.locs}
        />
        <button className='save' type='button' onClick={() => this.updateGrid()}>Done</button>
      </div>
    );
  }
}


export default CheckboxGrid;