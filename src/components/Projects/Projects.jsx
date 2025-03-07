import React from "react";
import "./Projects.css";
import timetracker from "../../Assets/images/TimeTracker.png";
import nordstrom from "../../Assets/images/FusionStrom.png";
import pluralsight from "../../Assets/images/Pluralsight.png";
import forever from "../../Assets/images/Forever.png";
import bluefly2 from "../../Assets/images/Bluefly-2.png";
import gymwolf from "../../Assets/images/Gymwolf.png";
import { FaReact, FaHardHat } from "react-icons/fa";

import {
  SiChakraui,
  SiHtml5,
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiCss3,
  SiTailwindcss,
  SiStripe
} from "react-icons/si";

export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different" data-aos="fade-right">
          Projects
        </h2>

        {/* 1st project */}

        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img src={forever} alt="forever" />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Forever</h2>
              <p>
                A full-featured e-commerce platform that allows users to seamlessly browse products, add items to their cart, make secure purchases, and manage their accounts with an intuitive and user-friendly experience.
                <p style={{ color: "#80618c", marginTop: "30px" }}>
                  Tech Stack
                </p>
              </p>

              <div className="projects_techsection">
              <div>
                  <FaReact />
                  <h5>React JS</h5>
                </div>
                <div>
                  <SiTailwindcss />
                  <h5>Tailwind CSS</h5>
                </div>
                <div>
                  <SiNodedotjs />
                  <h5>Node JS</h5>
                </div>
                <div>
                  <SiExpress />
                  <h5>Express</h5>
                </div>
                <div>
                  <SiMongodb />
                  <h5>Mongodb</h5>
                </div>                         
                {/* <div>
                  <SiStripe />
                  <h5>Stripe</h5>
                </div> */}
              </div>

              <div>
                <a
                  href="https://e-commerce-om.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Omgupta12/E-Commerce-Application"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>


        {/* 2nd project */}

        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img src={timetracker} alt="timetracker" />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>TimeTracker</h2>
              <p>
                TimeTracker help you to save your precious time and improve your
                effeciency and you can also keep an eye on your performance that
                how much did you worked on each tasks.
                <p style={{ color: "#80618c", marginTop: "30px" }}>
                  Tech Stack
                </p>
              </p>

              <div className="projects_techsection">
                <div>
                  <SiMongodb />
                  <h5>Mongodb</h5>
                </div>

                <div>
                  <SiExpress />
                  <h5>Express</h5>
                </div>

                <div>
                  <FaReact />
                  <h5>React JS</h5>
                </div>

                <div>
                  <SiNodedotjs />
                  <h5>Node JS</h5>
                </div>

                <div>
                  <SiChakraui />
                  <h5>Chakra UI</h5>
                </div>
                {/* <div>
                  <SiHtml5 />
                  <h5>HTML</h5>
                </div> */}
              </div>

              <div>
                <a
                  href="https://frontend-omgupta12.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Anshul-Singla/tender-letter-2789"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 3rd project */}

        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img src={nordstrom} alt=" nordstrom" />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>FusionStrom</h2>
              <p>
                FusionStrom is a leading fashion retailer offering compelling
                clothing, shoes and accessories for men, women and kids.
                <p style={{ color: "#80618c", marginTop: "30px" }}>
                  Tech Stack
                </p>
              </p>

              <div className="projects_techsection">
                <div>
                  <SiMongodb />
                  <h5>Mongodb</h5>
                </div>

                <div>
                  <SiExpress />
                  <h5>Express</h5>
                </div>

                <div>
                  <FaReact />
                  <h5>React JS</h5>
                </div>

                <div>
                  <SiNodedotjs />
                  <h5>Node JS</h5>
                </div>

                <div>
                  <SiChakraui />
                  <h5>Chakra UI</h5>
                </div>
                {/* <div>
                  <SiHtml5 />
                  <h5>HTML</h5>
                </div> */}
              </div>

              <div>
                <a
                  href="https://fusion-strome-clone.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/shubhamksingh/sole-wing-9343"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>


        {/* 4th project */}

        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img src={gymwolf} alt="gymwolf" />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Gymwolf</h2>
              <p>
                Gymwolf is a workout tracking tool. Add workouts, create our own
                customized workout plans or find suitable plan. Accomplish our
                goals with motivation from personal trainer and committed
                training.
                <p
                  style={{
                    color: " #80618c",
                    marginTop: "20px",
                    marginBottom: "-5px",
                  }}
                >
                  Tech Stack
                </p>
              </p>

              <div className="projects_techsection">
                <div>
                  <FaReact />
                  <h5>React JS</h5>
                </div>
                <div>
                  <SiJavascript />
                  <h5>JavaScript</h5>
                </div>
                <div>
                  <SiChakraui />
                  <h5>Chakra UI</h5>
                </div>
                <div>
                  <SiHtml5 />
                  <h5>HTML</h5>
                </div>

                <div>
                  <SiCss3 />
                  <h5>CSS</h5>
                </div>
              </div>

              <div>
                <a
                  href="https://can-table-5382-omgupta12.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Omgupta12/Gymwolf-Clone"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 5th project */}

        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img src={pluralsight} alt="pluralsight" />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Pluralsight</h2>
              <p>
                Pluralsight is an Ed-tech website, It provides video courses for
                corporate professionals.
                <p
                  style={{
                    color: " #80618c",
                    marginTop: "30px",
                    marginBottom: "-10px",
                  }}
                >
                  Tech Stack
                </p>
              </p>

              <div className="projects_techsection">
                <div>
                  <SiJavascript />
                  <h5>JavaScript</h5>
                </div>
                <div>
                  <SiHtml5 />
                  <h5>HTML</h5>
                </div>

                <div>
                  <SiCss3 />
                  <h5>CSS</h5>
                </div>
              </div>

              <div>
                <a
                  href="https://dulcet-brigadeiros-75a972.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Omgupta12/PluralSight-Clone"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
