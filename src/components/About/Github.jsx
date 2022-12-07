import React from "react";
import Githubcalendar from "react-github-calendar";
import { ThemeContext } from "../../Context/theme";

export const Github = () => {

  const colourTheme = {
    background: "transparent",
    text: "#ffffff",
    grade4: "#8400b8",
    grade3: "#b22ff4",
    grade2: "#b265f6",
    grade1: "#c084f5",
    grade0: "#ecd9fc",
  };
  
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <div data-aos="fade-right" style={{marginTop:"1rem"}} >
        <h2 className="section__title different">
          Days I <span className="different"> Code</span>
        </h2>
        <div  style={{ border: "3px solid var(--clr-primary)",borderRadius:"1rem",padding:"1rem"}}>
        <Githubcalendar
          username="Omgupta12"
          blockSize={15}
          blockMargin={5}
         color={ "#80618c"}
          fontSize={12}
        />
        </div>
      </div>
    </>
  );
};
