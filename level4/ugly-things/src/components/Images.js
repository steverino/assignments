import React from 'react'
import axios from 'axios';

const Images = () => {
    axios
    .get("https://api.vschool.io/sfalvo/thing")
    .then((response) => {console.log(response.data);})
 
    return (
    <div>Images</div>
  )
}

export default Images