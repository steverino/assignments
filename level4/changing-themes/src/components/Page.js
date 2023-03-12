import React, {useContext} from "react";
import Button from "./Button";
import { ThemeContext } from "./themeContext";

const Page = () => {
    const context = useContext(ThemeContext)
  return (
    <>
      <div className={`${context.color}-theme page`}>Page
        <Button />
      </div>
    </>
  );
};

export default Page;
