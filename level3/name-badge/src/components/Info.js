import React from "react";
import { useTitle } from "./Title";

import Badge from "./Badge";

const Info = () => {
  useTitle("Information");

  const [formData, setFormData] = React.useState({
    
    firstName: "",
    lastName: "",
    email: "",
    birthPlace: "",
    phone: "",
    favFood: "",
    skills: "",
  });

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  const [list, setList] = React.useState([]);
  
  function handleClick() {
    
    setList((prevList) => {
      return [
        ...prevList, 
        <Badge
            firstName={formData.firstName}
            lastName={formData.lastName}
            email={formData.email}
            birthPlace={formData.birthPlace}
            phone={formData.phone}
            favFood={formData.favFood}
            skills={formData.skills}
          />
        
        ];
    });
  }

  return (
    <div>
      <div className="info">
        <form className="info--form">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            onChange={handleChange}
            value={formData.firstName}
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            onChange={handleChange}
            value={formData.lastName}
          />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            onChange={handleChange}
            value={formData.email}
          />
          <label htmlFor="birthPlace">Place of birth</label>
          <input
            type="text"
            name="birthPlace"
            id="birthPlace"
            onChange={handleChange}
            value={formData.birthPlace}
          />
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            name="phone"
            id="phone"
            onChange={handleChange}
            value={formData.phone}
          />
          <label htmlFor="favFood">Favorite Food</label>
          <input
            type="text"
            name="favFood"
            id="favFood"
            onChange={handleChange}
            value={formData.favFood}
          />
          <label htmlFor="skills">Skills</label>
          <textarea
            name="skills"
            id="skills"
            cols="30"
            rows="10"
            onChange={handleChange}
            value={formData.skills}
          ></textarea>
          <button type="button" onClick={() => handleClick()}>
            Submit
          </button>
        </form>

        <div className="info--badge">
          <Badge
            firstName={formData.firstName}
            lastName={formData.lastName}
            email={formData.email}
            birthPlace={formData.birthPlace}
            phone={formData.phone}
            favFood={formData.favFood}
            skills={formData.skills}
          />
        </div>
      </div>
      {/* end info */}
      <ul>
        {list.map((item, index)=>{
          return <li key={index}>{item}</li>
        })}  
      </ul>
    </div>
  );
};

export default Info;
