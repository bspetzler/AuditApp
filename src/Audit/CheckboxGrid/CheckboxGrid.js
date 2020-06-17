import React, { Component } from 'react';
import './CheckboxGrid.css';
import Checkbox from './Checkbox/Checkbox';
import Categories from './Categories/Categories';
import Locations from './Locations/Locations';
import firestore from "../Firestore";
import firebase from 'firebase';
//import Timestamp from '../react-timestamp/dist';

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
    //console.log('updateGrid ran');
    //console.log(this.state.checkboxes);
    let locPass = new Array(this.props.locs.length).fill(0);
    let locFail = new Array(this.props.locs.length).fill(0);
    let catPass = new Array(this.props.cats.length).fill(0);
    let catFail = new Array(this.props.cats.length).fill(0);
    //console.log(locFail);
    for (let i=0; i<this.state.checkboxes.length; i++){ // iterate through ll checkboxes
      //console.log('check iter');
      if (this.state.checkboxes[i].checked==='green'){ //for pass checkboxes
        for (let cat=0; cat<this.props.cats.length; cat++){ //iterate through all catagories to see which it is
          //console.log('cat iter');
          if(this.state.checkboxes[i].cata===this.props.cats[cat]){
            //console.log('cat got one');
            catPass[cat] = catPass[cat]+1;
          }
        }
        for (let loc=0; loc<this.props.locs.length; loc++){ //iterate through all locations to see which it is
          //console.log('loc iter');
          if(this.state.checkboxes[i].loca===this.props.locs[loc]){
            //console.log('loc got one');
            locPass[loc] = locPass[loc]+1;
          }
        }
      } else if (this.state.checkboxes[i].checked==='red'){ //for fail checkboxes
        for (let cat=0; cat<this.props.cats.length; cat++){ //iterate through all catagories to see which it is
          //console.log('cat iter');
          if(this.state.checkboxes[i].cata===this.props.cats[cat]){
            //console.log('cat got one');
            catFail[cat] = catFail[cat]+1;
          }
        }
        for (let loc=0; loc<this.props.locs.length; loc++){ //iterate through all locations to see which it is
          //console.log('loc iter');
          if(this.state.checkboxes[i].loca===this.props.locs[loc]){
            //console.log('loc got one');
            console.log(new Date());
            locFail[loc] = locFail[loc]+1;
          }
        }
      }
    }
    //console.log(this.state)
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

  addCheckData = e => {
    e.preventDefault();
    console.log('I submitted!!');
    const db = firebase.firestore();

    db.collection('production-data').add({
      //categories: this.state.catFail,
      //locations: this.state.locFail,
      prodData: this.state.checkboxes,
      dateTime: new Date(),
      testMVP: 'x',
    });
    this.setState({
      locPass: [],
      catPass: [],
      locFail: [],
      catFail: [],
      checkboxes: this.props.checks,
      //checkboxes: [{"top":0,"left":0,"key":0,"cata":{"Subject":"SPC"},"loca":{"Machine":"crazy stuff"},"checked":"white"},{"top":0,"left":50,"key":1,"cata":{"Subject":"Inspection"},"checked":"white"},{"top":0,"left":100,"key":2,"cata":{"Subject":"Dirty Stuff"},"checked":"white"},{"top":0,"left":150,"key":3,"cata":{"Subject":"Poopsosod"},"checked":"white"},{"top":0,"left":200,"key":4,"cata":{"Subject":"5"},"checked":"white"},{"top":50,"left":0,"key":5,"loca":{"Machine":"2"},"checked":"white"},{"top":50,"left":50,"key":6,"checked":"white"},{"top":50,"left":100,"key":7,"checked":"white"},{"top":50,"left":150,"key":8,"checked":"white"},{"top":50,"left":200,"key":9,"checked":"white"},{"top":100,"left":0,"key":10,"loca":{"Machine":"3"},"checked":"white"},{"top":100,"left":50,"key":11,"checked":"white"},{"top":100,"left":100,"key":12,"checked":"white"},{"top":100,"left":150,"key":13,"checked":"white"},{"top":100,"left":200,"key":14,"checked":"white"},{"top":150,"left":0,"key":15,"loca":{"Machine":"4"},"checked":"white"},{"top":150,"left":50,"key":16,"checked":"white"},{"top":150,"left":100,"key":17,"checked":"white"},{"top":150,"left":150,"key":18,"checked":"white"},{"top":150,"left":200,"key":19,"checked":"white"},{"top":200,"left":0,"key":20,"loca":{"Machine":"5"},"checked":"white"},{"top":200,"left":50,"key":21,"checked":"white"},{"top":200,"left":100,"key":22,"checked":"white"},{"top":200,"left":150,"key":23,"checked":"white"},{"top":200,"left":200,"key":24,"checked":"white"}],
      // need to make the checkboxes reset more universal, PLACEHOLDER FOR NOW
    });
  };
  
  // fetch data from FireStore
  /* const db = firebase.firestore();
    // Create a reference to the 'production-data' collection
    let collection = db.collection('production-data');
    console.log(collection);

    // Create a query against the collection.
    //let derp = collection.where("state", "==", "CA");*/
  
  render() {
    const locations = this.props.locs
      .map((file, key) => <Locations {...file} key={key} pos={this.props.checks[key*this.props.cats.length].top+37}/>);
    
    const categories = this.props.cats
      .map((file, key) => <Categories {...file} key={key} pos={this.props.checks[key].left+47} />);
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
      handleClick={this.handleClick}
      />);
    
    
    
    
    return (
      <div className='grid'>
        <div className='location-labels'>
          {locations}
        </div>
        
        <div className='category-labels'>
          {categories}
        </div>
        <div className='checkbox-grid'>
          {data}
        </div>
        
        
        <form onSubmit={this.addCheckData}>
          <input className='save' type='submit' value='Submit' onClick={() => this.updateGrid()}/>
        </form>
      </div>
    );
  }
}


export default CheckboxGrid;