import React, { Component } from 'react';
import './Graph.css';
import CanvasJSReact from './canvasjs-2.3.2/canvasjs.react';
let CanvasJS = CanvasJSReact.CanvasJS;
let CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Graph extends Component {
  static defaultProps = {
    Subject: new Array(5),
  }

  render() {
    const poo= 'Subject';

    console.log(this.props.data.locPass)
    console.log(this.props.loc)
    console.log(this.props.cat)
    const options = {
      title: {
        text: "Passes in Subjects"
      },
      data: [{				
                type: "column",
                dataPoints: this.props.cat.map((value, key) => {
                  return {label: this.props.cat[key].Subject, y: this.props.data.catPass[key]}})
                  
                    /*[{ label: this.props.cat[0].Subject, y: this.props.data.catPass[0]  },
                    { label: this.props.cat[1].Subject, y: this.props.data.catPass[1]  },
                    { label: this.props.cat[2].Subject, y: this.props.data.catPass[2]  },
                    { label: this.props.cat[3].Subject, y: this.props.data.catPass[3]  },
                    { label: this.props.cat[4].Subject, y: this.props.data.catPass[4]  }]
                    */
       }]
   }
		
   return (
      <div className='graph'>
        <CanvasJSChart options = {options}
            /* onRef = {ref => this.chart = ref} */
        />
      </div>
    );
  }
}


export default Graph;