import React from 'react'
import axios from 'axios'

const RandomBg = () => {
  const [color, setColor] = React.useState('eee')
  React.useEffect(() => {
      axios.get(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`).then((response) => {
          
          setColor(response.data.colors[0].hex)
          
   
      });
   

},[])
    return (
        <div className='random-bg' style={{ backgroundColor: `#${color}` }}>RandomBg
        
        
        </div>
  )
}

export default RandomBg