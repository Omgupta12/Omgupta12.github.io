import React from "react";
import "./Introduction.css";
import om from "../../Assets/images/MyPhoto1.jpg";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import resume from "../../Assets/pdf/Om_Prakash_Gupta-Resume.pdf";

export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  const handleresume = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={om} className="introduction_img" alt="om" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi, I am <span className="different">Om Prakash Gupta </span>{" "}
                from <span className="different">Raebareli, Uttar Pradesh. </span>
               I’m a B.Tech graduate in Electrical and Electronics Engineering with 1.6 years of experience as a Full-Stack Developer at LM Exchange. My expertise lies in the MERN stack, including MongoDB, Express.js, React.js, and Node.js.

I’m passionate about web development and continuously learning new technologies to stay updated. My goal is to apply my skills to contribute to a dynamic organization and drive innovative solutions.
              </h4>
              <h4>Some of my interests apart form Coding :</h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Playing Volleyball & Cricket{" "}
              </h4>

              <button
                style={{
                  textAlign: "center",
                  marginTop: "2rem",
                  width: "8rem",
                  padding: "0.8rem",
                  backgroundColor: " #80618c",
                }}
              >
                <a
                  href={resume}
                  // onClick={toggleNavList}
                  // className="link link--nav"
                  download="Om Prakash Gupta - Resume"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    style={{ backgroundColor: " #80618c", color: "white" }}
                    onClick={() =>
                      handleresume(
                        "https://drive.google.com/file/d/17aOU7PZ4E19E43B-SqMDW9R6VYQY6Gnt/view?usp=sharing"
                      )
                    }
                  >
                    Resume
                  </button>
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
