import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { ThemeContext } from "../../Context/theme";

import "./Header.css";


 const Header = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
   
      <div className="header">
        
        <h3>
          <a href="#home" className="link">
           Om 
          </a>
        </h3>
        <Navbar />
    
      </div>
 
  );
};

export default Header
