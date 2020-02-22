import React from 'react'
import Tip from './Tip.js'      

const Title = (props) => {
  let {title, toolTip} = props
  return (
    <h3>
      {title}
      &ensp;
      {toolTip && <Tip title={toolTip}/>}      
    </h3>
    
  )
}

export default Title