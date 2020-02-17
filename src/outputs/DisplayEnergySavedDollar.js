import React from 'react'
import calcEnergy from '../calculators/calcEnergy'
import calcTargetReduction from '../calculators/calcTargetReduction'

let DisplayEnergySavedDollar = (props) => {
  let {state, size, nabers} = props
  let annualEnergy = calcEnergy({state, nabers: Number(nabers), size})
  let energySavedPercent = calcTargetReduction({nabers: Number(nabers)})
  let energySavedDollar = annualEnergy * energySavedPercent
  return (
    <div>
      <h3>Energy Saved Dollar</h3>
      <p>${energySavedDollar}</p>
    </div>
  )
}

export default DisplayEnergySavedDollar