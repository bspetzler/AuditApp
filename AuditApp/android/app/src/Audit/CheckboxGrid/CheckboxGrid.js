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
    checkboxes: this.props.handleUpdate,
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
    console.log(this.props.handleUpdate);
    console.log(this.props.checks);
    console.log(this.state.checkboxes);
    if (this.state.checkboxes[id].checked==='white'){
      let newChecks = this.state.checkboxes;
      newChecks[id].checked='green';
      this.setState({
        checkboxes: newChecks
      })
    } else if (this.state.checkboxes[id].checked==='green') {
      let newChecks = this.state.checkboxes;
      newChecks[id].checked='red';
      this.setState({
        checkboxes: newChecks
      })
    } else {
      let newChecks = this.state.checkboxes;
      newChecks[id].checked='white';
      this.setState({
        checkboxes: newChecks
      })
    }
    
  }

  addCheckData = e => {
    e.preventDefault();
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
      checkboxes: [
        {
          "top": 0,
          "left": 0,
          "key": 0,
          "cata": {
            "Subject": "SPC on Screen"
          },
          "loca": {
            "Machine": "1"
          },
          "checked": "white"
        },
        {
          "top": 0,
          "left": 100,
          "key": 1,
          "cata": {
            "Subject": "Cpk Requirements"
          },
          "loca": {
            "Machine": "1"
          },
          "checked": "white"
        },
        {
          "top": 0,
          "left": 200,
          "key": 2,
          "cata": {
            "Subject": "Organized Piece Flow"
          },
          "loca": {
            "Machine": "1"
          },
          "checked": "white"
        },
        {
          "top": 0,
          "left": 300,
          "key": 3,
          "cata": {
            "Subject": "Tool Condition"
          },
          "loca": {
            "Machine": "1"
          },
          "checked": "white"
        },
        {
          "top": 0,
          "left": 400,
          "key": 4,
          "cata": {
            "Subject": "Visual Inspection"
          },
          "loca": {
            "Machine": "1"
          },
          "checked": "white"
        },
        {
          "top": 100,
          "left": 0,
          "key": 5,
          "cata": {
            "Subject": "SPC on Screen"
          },
          "loca": {
            "Machine": "2"
          },
          "checked": "white"
        },
        {
          "top": 100,
          "left": 100,
          "key": 6,
          "cata": {
            "Subject": "Cpk Requirements"
          },
          "loca": {
            "Machine": "2"
          },
          "checked": "white"
        },
        {
          "top": 100,
          "left": 200,
          "key": 7,
          "cata": {
            "Subject": "Organized Piece Flow"
          },
          "loca": {
            "Machine": "2"
          },
          "checked": "white"
        },
        {
          "top": 100,
          "left": 300,
          "key": 8,
          "cata": {
            "Subject": "Tool Condition"
          },
          "loca": {
            "Machine": "2"
          },
          "checked": "white"
        },
        {
          "top": 100,
          "left": 400,
          "key": 9,
          "cata": {
            "Subject": "Visual Inspection"
          },
          "loca": {
            "Machine": "2"
          },
          "checked": "white"
        },
        {
          "top": 200,
          "left": 0,
          "key": 10,
          "cata": {
            "Subject": "SPC on Screen"
          },
          "loca": {
            "Machine": "6"
          },
          "checked": "white"
        },
        {
          "top": 200,
          "left": 100,
          "key": 11,
          "cata": {
            "Subject": "Cpk Requirements"
          },
          "loca": {
            "Machine": "6"
          },
          "checked": "white"
        },
        {
          "top": 200,
          "left": 200,
          "key": 12,
          "cata": {
            "Subject": "Organized Piece Flow"
          },
          "loca": {
            "Machine": "6"
          },
          "checked": "white"
        },
        {
          "top": 200,
          "left": 300,
          "key": 13,
          "cata": {
            "Subject": "Tool Condition"
          },
          "loca": {
            "Machine": "6"
          },
          "checked": "white"
        },
        {
          "top": 200,
          "left": 400,
          "key": 14,
          "cata": {
            "Subject": "Visual Inspection"
          },
          "loca": {
            "Machine": "6"
          },
          "checked": "white"
        },
        {
          "top": 300,
          "left": 0,
          "key": 15,
          "cata": {
            "Subject": "SPC on Screen"
          },
          "loca": {
            "Machine": "4"
          },
          "checked": "white"
        },
        {
          "top": 300,
          "left": 100,
          "key": 16,
          "cata": {
            "Subject": "Cpk Requirements"
          },
          "loca": {
            "Machine": "4"
          },
          "checked": "white"
        },
        {
          "top": 300,
          "left": 200,
          "key": 17,
          "cata": {
            "Subject": "Organized Piece Flow"
          },
          "loca": {
            "Machine": "4"
          },
          "checked": "white"
        },
        {
          "top": 300,
          "left": 300,
          "key": 18,
          "cata": {
            "Subject": "Tool Condition"
          },
          "loca": {
            "Machine": "4"
          },
          "checked": "white"
        },
        {
          "top": 300,
          "left": 400,
          "key": 19,
          "cata": {
            "Subject": "Visual Inspection"
          },
          "loca": {
            "Machine": "4"
          },
          "checked": "white"
        },
        {
          "top": 400,
          "left": 0,
          "key": 20,
          "cata": {
            "Subject": "SPC on Screen"
          },
          "loca": {
            "Machine": "28"
          },
          "checked": "white"
        },
        {
          "top": 400,
          "left": 100,
          "key": 21,
          "cata": {
            "Subject": "Cpk Requirements"
          },
          "loca": {
            "Machine": "28"
          },
          "checked": "white"
        },
        {
          "top": 400,
          "left": 200,
          "key": 22,
          "cata": {
            "Subject": "Organized Piece Flow"
          },
          "loca": {
            "Machine": "28"
          },
          "checked": "white"
        },
        {
          "top": 400,
          "left": 300,
          "key": 23,
          "cata": {
            "Subject": "Tool Condition"
          },
          "loca": {
            "Machine": "28"
          },
          "checked": "white"
        },
        {
          "top": 400,
          "left": 400,
          "key": 24,
          "cata": {
            "Subject": "Visual Inspection"
          },
          "loca": {
            "Machine": "28"
          },
          "checked": "white"
        },
        {
          "top": 500,
          "left": 0,
          "key": 25,
          "cata": {
            "Subject": "SPC on Screen"
          },
          "loca": {
            "Machine": "3"
          },
          "checked": "white"
        },
        {
          "top": 500,
          "left": 100,
          "key": 26,
          "cata": {
            "Subject": "Cpk Requirements"
          },
          "loca": {
            "Machine": "3"
          },
          "checked": "white"
        },
        {
          "top": 500,
          "left": 200,
          "key": 27,
          "cata": {
            "Subject": "Organized Piece Flow"
          },
          "loca": {
            "Machine": "3"
          },
          "checked": "white"
        },
        {
          "top": 500,
          "left": 300,
          "key": 28,
          "cata": {
            "Subject": "Tool Condition"
          },
          "loca": {
            "Machine": "3"
          },
          "checked": "white"
        },
        {
          "top": 500,
          "left": 400,
          "key": 29,
          "cata": {
            "Subject": "Visual Inspection"
          },
          "loca": {
            "Machine": "3"
          },
          "checked": "white"
        },
        {
          "top": 600,
          "left": 0,
          "key": 30,
          "cata": {
            "Subject": "SPC on Screen"
          },
          "loca": {
            "Machine": "30"
          },
          "checked": "white"
        },
        {
          "top": 600,
          "left": 100,
          "key": 31,
          "cata": {
            "Subject": "Cpk Requirements"
          },
          "loca": {
            "Machine": "30"
          },
          "checked": "white"
        },
        {
          "top": 600,
          "left": 200,
          "key": 32,
          "cata": {
            "Subject": "Organized Piece Flow"
          },
          "loca": {
            "Machine": "30"
          },
          "checked": "white"
        },
        {
          "top": 600,
          "left": 300,
          "key": 33,
          "cata": {
            "Subject": "Tool Condition"
          },
          "loca": {
            "Machine": "30"
          },
          "checked": "white"
        },
        {
          "top": 600,
          "left": 400,
          "key": 34,
          "cata": {
            "Subject": "Visual Inspection"
          },
          "loca": {
            "Machine": "30"
          },
          "checked": "white"
        },
        {
          "top": 700,
          "left": 0,
          "key": 35,
          "cata": {
            "Subject": "SPC on Screen"
          },
          "loca": {
            "Machine": "7"
          },
          "checked": "white"
        },
        {
          "top": 700,
          "left": 100,
          "key": 36,
          "cata": {
            "Subject": "Cpk Requirements"
          },
          "loca": {
            "Machine": "7"
          },
          "checked": "white"
        },
        {
          "top": 700,
          "left": 200,
          "key": 37,
          "cata": {
            "Subject": "Organized Piece Flow"
          },
          "loca": {
            "Machine": "7"
          },
          "checked": "white"
        },
        {
          "top": 700,
          "left": 300,
          "key": 38,
          "cata": {
            "Subject": "Tool Condition"
          },
          "loca": {
            "Machine": "7"
          },
          "checked": "white"
        },
        {
          "top": 700,
          "left": 400,
          "key": 39,
          "cata": {
            "Subject": "Visual Inspection"
          },
          "loca": {
            "Machine": "7"
          },
          "checked": "white"
        },
        {
          "top": 800,
          "left": 0,
          "key": 40,
          "cata": {
            "Subject": "SPC on Screen"
          },
          "loca": {
            "Machine": "8"
          },
          "checked": "white"
        },
        {
          "top": 800,
          "left": 100,
          "key": 41,
          "cata": {
            "Subject": "Cpk Requirements"
          },
          "loca": {
            "Machine": "8"
          },
          "checked": "white"
        },
        {
          "top": 800,
          "left": 200,
          "key": 42,
          "cata": {
            "Subject": "Organized Piece Flow"
          },
          "loca": {
            "Machine": "8"
          },
          "checked": "white"
        },
        {
          "top": 800,
          "left": 300,
          "key": 43,
          "cata": {
            "Subject": "Tool Condition"
          },
          "loca": {
            "Machine": "8"
          },
          "checked": "white"
        },
        {
          "top": 800,
          "left": 400,
          "key": 44,
          "cata": {
            "Subject": "Visual Inspection"
          },
          "loca": {
            "Machine": "8"
          },
          "checked": "white"
        },
        {
          "top": 900,
          "left": 0,
          "key": 45,
          "cata": {
            "Subject": "SPC on Screen"
          },
          "loca": {
            "Machine": "9"
          },
          "checked": "white"
        },
        {
          "top": 900,
          "left": 100,
          "key": 46,
          "cata": {
            "Subject": "Cpk Requirements"
          },
          "loca": {
            "Machine": "9"
          },
          "checked": "white"
        },
        {
          "top": 900,
          "left": 200,
          "key": 47,
          "cata": {
            "Subject": "Organized Piece Flow"
          },
          "loca": {
            "Machine": "9"
          },
          "checked": "white"
        },
        {
          "top": 900,
          "left": 300,
          "key": 48,
          "cata": {
            "Subject": "Tool Condition"
          },
          "loca": {
            "Machine": "9"
          },
          "checked": "white"
        },
        {
          "top": 900,
          "left": 400,
          "key": 49,
          "cata": {
            "Subject": "Visual Inspection"
          },
          "loca": {
            "Machine": "9"
          },
          "checked": "white"
        },
        {
          "top": 1000,
          "left": 0,
          "key": 50,
          "cata": {
            "Subject": "SPC on Screen"
          },
          "loca": {
            "Machine": "5"
          },
          "checked": "white"
        },
        {
          "top": 1000,
          "left": 100,
          "key": 51,
          "cata": {
            "Subject": "Cpk Requirements"
          },
          "loca": {
            "Machine": "5"
          },
          "checked": "white"
        },
        {
          "top": 1000,
          "left": 200,
          "key": 52,
          "cata": {
            "Subject": "Organized Piece Flow"
          },
          "loca": {
            "Machine": "5"
          },
          "checked": "white"
        },
        {
          "top": 1000,
          "left": 300,
          "key": 53,
          "cata": {
            "Subject": "Tool Condition"
          },
          "loca": {
            "Machine": "5"
          },
          "checked": "white"
        },
        {
          "top": 1000,
          "left": 400,
          "key": 54,
          "cata": {
            "Subject": "Visual Inspection"
          },
          "loca": {
            "Machine": "5"
          },
          "checked": "white"
        },
        {
          "top": 1100,
          "left": 0,
          "key": 55,
          "cata": {
            "Subject": "SPC on Screen"
          },
          "loca": {
            "Machine": "35"
          },
          "checked": "white"
        },
        {
          "top": 1100,
          "left": 100,
          "key": 56,
          "cata": {
            "Subject": "Cpk Requirements"
          },
          "loca": {
            "Machine": "35"
          },
          "checked": "white"
        },
        {
          "top": 1100,
          "left": 200,
          "key": 57,
          "cata": {
            "Subject": "Organized Piece Flow"
          },
          "loca": {
            "Machine": "35"
          },
          "checked": "white"
        },
        {
          "top": 1100,
          "left": 300,
          "key": 58,
          "cata": {
            "Subject": "Tool Condition"
          },
          "loca": {
            "Machine": "35"
          },
          "checked": "white"
        },
        {
          "top": 1100,
          "left": 400,
          "key": 59,
          "cata": {
            "Subject": "Visual Inspection"
          },
          "loca": {
            "Machine": "35"
          },
          "checked": "white"
        },
        {
          "top": 1200,
          "left": 0,
          "key": 60,
          "cata": {
            "Subject": "SPC on Screen"
          },
          "loca": {
            "Machine": "34"
          },
          "checked": "white"
        },
        {
          "top": 1200,
          "left": 100,
          "key": 61,
          "cata": {
            "Subject": "Cpk Requirements"
          },
          "loca": {
            "Machine": "34"
          },
          "checked": "white"
        },
        {
          "top": 1200,
          "left": 200,
          "key": 62,
          "cata": {
            "Subject": "Organized Piece Flow"
          },
          "loca": {
            "Machine": "34"
          },
          "checked": "white"
        },
        {
          "top": 1200,
          "left": 300,
          "key": 63,
          "cata": {
            "Subject": "Tool Condition"
          },
          "loca": {
            "Machine": "34"
          },
          "checked": "white"
        },
        {
          "top": 1200,
          "left": 400,
          "key": 64,
          "cata": {
            "Subject": "Visual Inspection"
          },
          "loca": {
            "Machine": "34"
          },
          "checked": "white"
        },
        {
          "top": 1300,
          "left": 0,
          "key": 65,
          "cata": {
            "Subject": "SPC on Screen"
          },
          "loca": {
            "Machine": "33"
          },
          "checked": "white"
        },
        {
          "top": 1300,
          "left": 100,
          "key": 66,
          "cata": {
            "Subject": "Cpk Requirements"
          },
          "loca": {
            "Machine": "33"
          },
          "checked": "white"
        },
        {
          "top": 1300,
          "left": 200,
          "key": 67,
          "cata": {
            "Subject": "Organized Piece Flow"
          },
          "loca": {
            "Machine": "33"
          },
          "checked": "white"
        },
        {
          "top": 1300,
          "left": 300,
          "key": 68,
          "cata": {
            "Subject": "Tool Condition"
          },
          "loca": {
            "Machine": "33"
          },
          "checked": "white"
        },
        {
          "top": 1300,
          "left": 400,
          "key": 69,
          "cata": {
            "Subject": "Visual Inspection"
          },
          "loca": {
            "Machine": "33"
          },
          "checked": "white"
        },
        {
          "top": 1400,
          "left": 0,
          "key": 70,
          "cata": {
            "Subject": "SPC on Screen"
          },
          "loca": {
            "Machine": "29"
          },
          "checked": "white"
        },
        {
          "top": 1400,
          "left": 100,
          "key": 71,
          "cata": {
            "Subject": "Cpk Requirements"
          },
          "loca": {
            "Machine": "29"
          },
          "checked": "white"
        },
        {
          "top": 1400,
          "left": 200,
          "key": 72,
          "cata": {
            "Subject": "Organized Piece Flow"
          },
          "loca": {
            "Machine": "29"
          },
          "checked": "white"
        },
        {
          "top": 1400,
          "left": 300,
          "key": 73,
          "cata": {
            "Subject": "Tool Condition"
          },
          "loca": {
            "Machine": "29"
          },
          "checked": "white"
        },
        {
          "top": 1400,
          "left": 400,
          "key": 74,
          "cata": {
            "Subject": "Visual Inspection"
          },
          "loca": {
            "Machine": "29"
          },
          "checked": "white"
        }
      ],
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
    let data = this.props.handleUpdate.map((value, id) => 
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