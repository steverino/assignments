import React from 'react'

const Box1 = (props) => {
  // console.log(props.color);
  return (
    <div className={`box1 box ${props.color}`}>Box1 {props.color}</div>
  )
}

export default Box1