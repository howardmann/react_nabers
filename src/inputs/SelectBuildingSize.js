import React from 'react'

let SelectBuildingSize = (props) => {
  return (
    <div>
      <h3>Select Building Size (sqm):</h3>
      <input 
        name="size"
        type="range" 
        step="2500" 
        min="5000" 
        max="100000" 
        value={props.size} 
        onChange={props.handleChange}
      />
      <p>Size: {props.size}</p>
    </div>
  )
}

export default SelectBuildingSize;