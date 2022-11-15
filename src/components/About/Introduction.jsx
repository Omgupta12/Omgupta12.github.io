import React from "react";
import "./Introduction.css";
import om from "../../Assets/images/Om.jpeg";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";

export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img
                src={om}
                alt="Images"
              />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi, I am{" "}
                <span className="different">Om Prakash Gupta </span> from{" "}
                <span className="different">Raebareli, Uttar Pradesh</span>. I
                have completed my graduation in Electrical & Electronics Engineering from
               Dr.A.P.J Abdul Kalam Technical University, Lucknow, Uttar Pradesh.  
                A Full-stack web developer with strong technical skills. An impactful team player with creative problem - solving skills and willing to build user - friendly products. Looking for a role as a developer to implement diverse experience and be a part of a growth-oriented environment.
              </h4>
              <h4>Some of my interests apart form Coding :</h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Playing Volleyball & Cricket{" "}
              </h4>
              <button >Resume</button>
            
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
