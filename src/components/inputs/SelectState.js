import React from 'react';

let SelectState = (props) => {
  return (
    <div>
      <h3>Select State</h3>
      <select value={props.state} name="state" onChange={props.handleChange}>
        <option value="NSW">NSW</option>
        <option value="VIC">VIC</option>
        <option value="QLD">QLD</option>
      </select>
    </div>
  )
}

export default SelectState;