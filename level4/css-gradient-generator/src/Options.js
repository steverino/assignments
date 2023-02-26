import React from 'react'

const Options = (props) => {
  

  
    return (
    <div className='options'>Options
        <label htmlFor='angle'>Angle</label>
        <input className='angleInput' type="number" name='degree' value={props.angle} onChange={()=> props.getAngle()}  min="0" max="359" />
        <label htmlFor='color1'>Color  1</label>
        <input type="text" name='color1' />
        <label htmlFor='color2'>Color 2</label>
        <input type="text" name='color2' />
        <label htmlFor='color3'>Color 3</label>
        <input type="text" name='color3' />
    </div>
  )
}

export default Options