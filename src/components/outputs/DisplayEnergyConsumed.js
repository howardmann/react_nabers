import React from 'react'
import calcEnergy from '../../calculators/calcEnergy'
import Title from '../shared/Title'


let DisplayEnergyConsumed = (props) => {
  let {state, nabers, size} = props
  
  let annualEnergy = Math.round(calcEnergy({state, nabers: Number(nabers), size}),0)
  return (
    <div>
      <Title 
        title="Energy Consumed"
        toolTip={`Based on nabers of ${nabers} and size of ${size}`}
      />
      <p>${annualEnergy}</p>
    </div>
  )
}

export default DisplayEnergyConsumed;