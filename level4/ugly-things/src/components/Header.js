import React, { useContext } from "react";
import { UserContext } from "../App";

const Header = () => {
  const myUser = useContext(UserContext);

  return (
    <>
      <div className="header">Ugly Things
        <div className="welcome">Welcome {myUser}</div>
      </div>
    </>
  );
};

export default Header;
