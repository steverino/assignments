import React from "react";

const BadgeList = ({handleClick}) => {

  return (
    <div>
      Badge List
      <ul>
        <li >{handleClick}</li>
      </ul>
    </div>
  );
};

export default BadgeList;
