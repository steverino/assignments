import React from 'react'

const Images = () => {
    axios
    .get("https://api.vschool.io/sfalvo/todo")
    .then((response) => {})
 
    return (
    <div>Images</div>
  )
}

export default Images