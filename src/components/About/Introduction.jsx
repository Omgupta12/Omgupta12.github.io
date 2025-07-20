import React from "react";
import "./Introduction.css";
import om from "../../Assets/images/MyPhoto1.jpg";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import resume from "../../Assets/pdf/OmPrakash_Resume.pdf";

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
                I am a Full Stack Developer with over 2+ years of hands-on experience, specializing in the MERN stack and modern web technologies such as React.js, Next.js, Node.js, MongoDB, and MySQL. I have a strong track record of building scalable, user-centric applications that align with business goals and deliver real value. With a passion for problem-solving and innovation, I continuously explore emerging technologies to enhance performance, usability, and overall user experience. I’m eager to contribute my skills and expertise to forward-thinking teams focused on creating impactful digital solutions.
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
                  download="Om_Prakash_Gupta_Resume"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    style={{ backgroundColor: " #80618c", color: "white" }}
                    onClick={() =>
                      handleresume(
                        "https://drive.google.com/file/d/15Nt5GTtzlfbSkqpO6RjQDQtNOL7ebP1b/view?usp=sharing"
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
