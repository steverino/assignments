import React from "react";
import { useTitle } from "./Title";

const Badge = () => {
  useTitle("Badge");

  
  
  return (
    <div>
      <section className="badge--content">
        <h3 className="badge--header">Badge:</h3>
        <ul>
          <li>Name:</li>
          <li>Place of birth:</li>
          <li>Email:</li>
          <li>Phone:</li>
          <li>Favorite food:</li>
        </ul>
      </section>
    </div>
  );
};

export default Badge;
