import React from 'react'
import Title from '../shared/Title'


let SelectBuildingSize = (props) => {
  return (
    <div>
      <Title  
        title="Select Building Size (sqm)"
        toolTip="Total NLA of your building"
      />
      
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