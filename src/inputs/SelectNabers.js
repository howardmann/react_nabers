import React from 'react';
import Title from '../shared/Title'

let SelectNabers = (props) => {
  return (
    <div>
      <Title 
        title="Select NABERS"
        toolTip="Your latest NABERS star rating. Leave as 4.0 if unknown"
      />

      <input 
        name="nabers"
        type="range" 
        step="1" 
        min="0" 
        max="6" 
        value={props.nabers} 
        onChange={props.handleChange}
      />
      <p>NABERS: {props.nabers}</p>
    </div>
  )
}

export default SelectNabers;