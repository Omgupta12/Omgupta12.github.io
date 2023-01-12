import React from "react";
import "./Introduction.css";
import om from "../../Assets/images/myphoto1.jpg";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import resume from "../../Assets/pdf/Om_Gupta-Resume.pdf";

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
                from <span className="different">Raebareli, Uttar Pradesh.</span>
                I am a B.Tech graduate in EEE, and I love to exploring new
                technologies in the field of Web Development and always try to
                adapt to it. I believe in the concept of continuous learning by
                regularly upgrading my skills and enhancing my knowledge. I have
                learned MERN stack, Data Structures Algorithms, and soft skills
                at Masai School. As a developer, my hunger for learning has
                drastically increased. And I want to centralize my skills and
                learning for enhancement of an organization and more of it, to
                enhance my career."
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
