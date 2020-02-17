import React from 'react';

let SelectNabers = (props) => {
  return (
    <div>
      <h3>Select NABERS:</h3>
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