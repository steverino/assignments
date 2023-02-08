import React from "react";
import { useTitle } from "./Title";

const Info = () => {
  useTitle("Information");
  return (
    <div>
      <form className="info">
        <label htmlFor="firstName">First Name</label>
        <input type="text" name="firstName" id="firstName" />
        <label htmlFor="lastName">Last Name</label>
        <input type="text" name="lastName" id="lastName" />
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" />
        <label htmlFor="phone">Phone</label>
        <input type="text" name="phone" id="phone" />
        <label htmlFor="favFood">Favorite Food</label>
        <input type="text" name="favFood" id="favFood" />
        <label htmlFor="skills">Skills</label>
        <textarea name="skills" id="skills" cols="30" rows="10"></textarea>
        <button type="button">Submit</button>
      </form>
    </div>
  );
};

export default Info;
