import React, { useContext }  from 'react'
import {ThemeContext} from './themeContext';

const Footer = () => {
    const context = useContext(ThemeContext)
    const d = new Date();
    let year = d.getFullYear();
    if(context.color === 'dark'){
        year = 'XXMMIII'
    }
    return (
    <div className={`${context.color}-theme footer`}>
         Copyright {year}
    </div>
  )
}

export default Footer