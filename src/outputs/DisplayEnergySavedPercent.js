import React from 'react'
import calcTargetReduction from '../calculators/calcTargetReduction'


let DisplayEnergySavedPercent = (props) => {
  let {nabers} = props
  let energySavedPercent = calcTargetReduction({nabers: Number(nabers)}) * 100
  return (
    <div>
      <h3>Energy Percent</h3>
      <p>{energySavedPercent}%</p>
    </div>
  )
}

export default DisplayEnergySavedPercent