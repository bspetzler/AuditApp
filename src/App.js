import React, { Component } from 'react';
import './App.css';
import Audit from './Audit/Audit';

//import FilterableList from './FilterableList/FilterableList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Result: null,
    };
  }

  updateResult(res) {
    this.setState({
      result: res,
    })
  }

  /*
  updateSearchTerm(term) {
    this.setState({
      searchTerm: term
    })
  }

  updateFilterOption(option) {
    this.setState({
      filterOption: option
    })
  }
  */

  render() {
    return (
      <div className="App">
        {
        //<Graph />
        /*<FilterableList
          files={this.props.files}  
          searchTerm={this.state.searchTerm}
          filterOption={this.state.filterOption}/> 
          */}
        <Audit 
          cats={this.props.cats}
          locs={this.props.locs}
          handleUpdate={term=>this.updateResult(term)}
          auditResult={this.state.result} 
        />
      </div>
    );
  }
}

export default App;
