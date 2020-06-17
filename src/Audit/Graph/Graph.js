import React from 'react'
import { ResponsiveBar } from '@nivo/bar'

import data from './data'
import config from './config'

import './chart.css'

import firestore from "../Firestore";
import firebase from 'firebase';

class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Result: new Array(this.props.cats.length).fill(0).map((e, i) => ({
        'Subject': this.props.cats[i].Subject,
        "Failed Audits": 0,
        "Failed AuditsColor": "hsl(110, 70%, 50%)",
      display: 'none'
      }))
      /*[
        {
            "Subject": "SPC",
            "Failed Audits": 0,
            "Failed AuditsColor": "hsl(110, 70%, 50%)",
        },
        {
            "Subject": "Inspection",
            "Failed Audits": 0,
            "Failed AuditsColor": "hsl(230, 70%, 50%)",
        },
        {
            "Subject": "Dirty Stuff",
            "Failed Audits": 0,
            "Failed AuditsColor": "hsl(47, 70%, 50%)",
        },
        {
            "Subject": "Poopsosod",
            "Failed Audits": 0,
            "Failed AuditsColor": "hsl(157, 70%, 50%)",
        },
        {
            "Subject": "cute",
            "Failed Audits": 0,
            "Failed AuditsColor": "hsl(122, 70%, 50%)",
        }
    ],*/
    };
  }

  updateGraph(graphData){
    console.log(graphData)
    // extract the falses from the data and push the props to the Graph component

    //let catFails = this.props.cats.map(e => ({Object.values(e)[0]}));
    //.map(e => ({
      /*Object.keys(this.props.cats): Object.values(this.props.cats),
      "false": 0,
      }));*/

    /*let falseCatData = { // create Graph Data object
      cats: this.props.cats,
      catFails = new Array(this.props.cats.length).fill(0),
    };*/

    let falseCatData = this.props.cats;
    console.log(falseCatData);
    let catFails = new Array(this.props.cats.length).fill(0);

    for (let i=0; i<graphData.length; i++){ // iterate through each element of the response data array
      for (let j=0; j<graphData[0].prodData.length; j++){ // iterate through the prodData array in each element
        //console.log(graphData[i].prodData[j].checked);
        if (graphData[i].prodData[j].checked == 'red'){
          //console.log('yeah its red');
          for (let c=0; c<this.props.cats.length; c++){ // iterate through the categories to see which category is checked 'red' per the line above
          /*console.log(graphData[i].prodData[j].cata.Subject);
          console.log(this.props.cats[c].Subject);
          console.log(falseCatData.catFails[c]);*/
            if (graphData[i].prodData[j].cata.Subject == this.props.cats[c].Subject) {
              catFails[c] = catFails[c]+1;
              //console.log(falseCatData.catFails[c]);
            }
          }
        }
      }
    }

    for (let q=0; q<falseCatData.length; q++){
      falseCatData[q]["Failed Audits"]= catFails[q];
      falseCatData[q]["Failed AuditsColor"] = "hsl(110, 70%, 50%)";
    };
    
    console.log(falseCatData); // EXPORT DATA INTO FORMAT SO THE GRAPH CAN USE IT////////////
    this.setState({
      Result: falseCatData
    })
  }

  getData = () =>{
    var docRef = firebase.firestore().collection("production-data").where('testMVP', '==', 'x');

    let graphData = [];

    docRef.get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            
            /* put the response data into an array here*/
            graphData.push(doc.data());
            console.log(graphData);
        });
        return graphData;
    })
    .then(e => this.updateGraph(e))
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
  }

  backToGrid = () =>{

  }
  

  /*const db = firebase.firestore();
  // Create a reference to the 'production-data' collection
  let collection = db.collection('production-data');
  console.log(collection);

  // Create a query against the collection.
  //let derp = collection.where("state", "==", "CA");*/

    render() {
      console.log(this.state.Result);
      //const db = firebase.firestore();
      // Create a reference to the 'production-data' collection
      //let collection = db.collection('production-data');
      //console.log(this.props.data); // FIND OUT WHY GRAPH BUTTON WILL NOT REFRESH SUBMITTED VALUES AFTER THE FIRST TIME
      //console.log(data);
        return (
            <div className='graph'>
              <div className='graph-button'>
                <input className='poo' type='submit' value='Graph' onClick={() => this.getData()}/>
              </div>
              <div className="chart">
                <div className='backToGrid'>
                  <input className='poo' type='submit' value='Poopshit' onClick={() => this.backToGrid()}/>
                </div>
                <ResponsiveBar
                    data={this.state.Result}
                    keys={config.keys}
                    indexBy="Subject"
                    margin={config.margin}
                    padding={0.3}
                    colors="nivo"
                    colorBy="id"
                    defs={config.defs}
                    fill={config.fill}
                    borderColor="inherit:darker(1.6)"
                    axisTop={null}
                    axisRight={null}
                    axisBottom={config.axisBottom}
                    axisLeft={config.axisLeft}
                    labelSkipWidth={12}
                    labelSkipHeight={12}
                    labelTextColor="inherit:darker(1.6)"
                    animate={true}
                    motionStiffness={90}
                    motionDamping={15}
                    legends={config.legends}
                />
              </div>
            </div>
        )
    }
}

export default Graph