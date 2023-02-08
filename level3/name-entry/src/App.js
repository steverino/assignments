import React from "react";

export default function App() {
  const [formData, setFormData] = React.useState({
    firstName: "",
  });

//   console.log(formData);

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  const [list, setList] = React.useState([])
  function handleClick(event) {
        
    setList((prevList)=>{
        return [
            ...prevList,
            formData.firstName
    ]
    })
  }

  return (
    <div>
      <h1>{formData.firstName}</h1>
      <form>
        <input 
        type="text" 
        onChange={handleChange} 
        name="firstName"
        value={formData.firstName}
        />
        <button type="button" onClick={handleClick}>Add Name</button>
      </form>
      <ol>
       {list.map((item)=>{
            return (<li>{item}</li>)
        })}
      </ol>
    </div>
  );
}
