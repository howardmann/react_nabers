import React, { Component } from 'react';
// Inputs
import SelectState from './components/inputs/SelectState'
import SelectNabers from './components/inputs/SelectNabers'
import SelectBuildingSize from './components/inputs/SelectBuildingSize'
// Outputs
import DisplayEnergyConsumed from './components/outputs/DisplayEnergyConsumed'
import DisplayEnergySavedPercent from './components/outputs/DisplayEnergySavedPercent'
import DisplayEnergySavedDollar from './components/outputs/DisplayEnergySavedDollar'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      state: "NSW",
      nabers: 4,
      size: 10000
    }
  }
  
  handleChange = (e) => {
    let change = {}
    change[e.target.name] = e.target.value
    this.setState(change)
  }

  render() {
    let {state, nabers, size} = this.state

    return (
      <div>
        <h1>ROI Calculator</h1>
        <div style={{border: '1px solid hotpink'}}>
          <h2>Inputs:</h2>
          <SelectState state={state} handleChange={this.handleChange}/>
          <SelectNabers nabers={nabers} handleChange={this.handleChange}/>
          <SelectBuildingSize size={size} handleChange={this.handleChange}/>
        </div>

        <div style={{border: '1px solid green'}}>
          <h2>Outputs:</h2>
          <DisplayEnergyConsumed state={state} nabers={nabers} size={size}/>
          <DisplayEnergySavedPercent nabers={nabers}/>
          <DisplayEnergySavedDollar state={state} nabers={nabers} size={size}/>
        </div>
      </div>
    );
  }
}

export default App;
