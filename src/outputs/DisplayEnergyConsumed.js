import React from 'react'
import calcEnergy from '../../calculators/calcEnergy'

let DisplayEnergyConsumed = (props) => {
  let {state, nabers, size} = props
  
  let annualEnergy = Math.round(calcEnergy({state, nabers: Number(nabers), size}),0)
  return (
    <div>
      <h3>Energy Consumed</h3>
      <p>${annualEnergy}</p>
    </div>
  )
}

export default DisplayEnergyConsumed;