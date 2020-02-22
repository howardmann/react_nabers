import React from 'react'
import {Tooltip} from 'react-tippy'

const Tip = (props) => {
  let {title} = props
  let tipStyle = {
    fontSize: "15px",
    fontWeight: "normal",
    borderRadius: "50%",
    color: "white",
    background: "gainsboro",
    width: "16px",
    height: "16px",
    textAlign: "center",
    display: "inline-block",
    position: "relative",
    cursor: "pointer"
  }
  return (
    <Tooltip 
      position="right"
      arrow="true"
      trigger="mouseenter"
      html={(
        <div style={{maxWidth: 150}}>
          <p>{title}</p>
        </div>
      )}
    >
      <span style={tipStyle}>?</span>
    </Tooltip>
  )
}

export default Tip