import React from "react";
import { useTitle } from "./Title";

const Badge = (props) => {
  useTitle("Badge");
  let bgColor;
  if(props.id % 2 === 0){
    bgColor = '#a00'
  }else{
    bgColor = '#006040'
  }
  return (
    <div>
      <section className="badge--content">
        <h3 className="badge--header" style={{backgroundColor: bgColor}} >Badge:{props.num}</h3>
        <ul>
          <li key={props.id}>Name: {props.firstName} {props.lastName}</li>
          <li>Place of birth: {props.birthPlace}</li>
          <li>Email: {props.email}</li>
          <li>Phone: {props.phone}</li>
          <li>Favorite food: {props.favFood}</li>
        </ul>
        <textarea name="skills" id="skills" cols="30" rows="10" value={props.skills} readOnly></textarea>
      </section>
    </div>
  );
};

export default Badge;
