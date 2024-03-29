import React from "react";

const Footer = () => {
  let copyYear = new Date().getFullYear()
  
  if (copyYear > 2023) {
    copyYear = `2023 - ${copyYear}`;
  }

  return (
    <>
      <section className="footer">
        <div>Copyright {copyYear} &copy; </div>
        <div className="footer-links">
          <ul>
            <li>link1</li>
            <li>link2</li>
            <li>link3</li>
            <li>link4</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Footer;
