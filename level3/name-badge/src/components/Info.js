import React from "react";
import { useTitle } from "./Title";

const Info = () => {
  useTitle("Information");

  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
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

  return (
    <div>
      <form className="info">
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
        <button type="button">Submit</button>
      </form>
    </div>
  );
};

export default Info;
