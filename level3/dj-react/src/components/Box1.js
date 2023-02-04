import React from 'react'

const Box1 = (props) => {
  // console.log(props.color);
  return (
    <div className={`box1 box ${props.color}`}>{props.color}</div>
  )
}

export default Box1