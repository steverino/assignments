import React from 'react'

const Footer = () => {
  let year = new Date().getFullYear()
  
  return (
    <div className='footer'>Copyright - {year}</div>
  )
}

export default Footer