import React from "react";
import "./Introduction.css";
import om from "../../Assets/images/MyPhoto1.jpg";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import resume from "../../Assets/pdf/Om_Prakash_Gupta_Resume.pdf";

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
                I am a Full Stack Developer with 2+ years of experience specializing in the MERN stack and modern web technologies like Next.js, Redux, and Tailwind CSS. I excel at designing and developing scalable, user-focused applications, delivering high-quality solutions that meet business needs. Passionate about problem-solving and innovation, I stay updated with the latest technologies to ensure optimal performance and usability in every project. I aim to leverage my skills and expertise to drive impactful results in dynamic and forward-thinking organizations.
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
                        "https://drive.google.com/file/d/1jRCTmBRqmMjeamcwhvCV3vl7-ewe0xa4/view?usp=sharing"
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
