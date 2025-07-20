import React from "react";
import "./Techstacks.css";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiRedux,
  SiHtml5,
  SiMaterialui,
  SiExpress,
  SiRedis,
  SiTailwindcss,
  SiNetlify,
  SiPostman,
  SiChakraui,
  SiPostgresql,
  SiNextdotjs,
  SiTypescript,
  SiMysql,
  SiFigma,
} from "react-icons/si";

import { DiCss3, DiMongodb, DiMysql } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap } from "react-icons/bs";


export const Techstacks = () => {
  return (
    <>
      <div className="section main techstack" data-aos="fade-right">
        <h2 className="section__title different">Tech Stack & Tools</h2>
        <div className="techsection">
       
          <div>
            <SiHtml5 />
            <h5>HTML</h5>
          </div>
          <div>
            <DiCss3 />
            <h5>CSS</h5>
          </div>
             <div>
            <SiJavascript />
            <h5>JavaScript</h5>
          </div>
           <div>
            <SiTypescript />
            <h5>TypeScript</h5>
          </div>
          <div>
            <FaReact />
            <h5>React.js</h5>
          </div>
          <div>
            <SiRedux />
            <h5>Redux</h5>
          </div>
          <div>
            <SiNextdotjs />
            <h5>Next.js</h5>
          </div>
          <div>
            <FaNodeJs />
            <h5>Node.js</h5>
          </div>
          <div>
            <SiExpress />
            <h5>Express.js</h5>
          </div>
          <div>
            <DiMongodb />
            <h5>MongoDb</h5>
          </div>
          <div>
            <SiMysql />
            <h5>MySQL</h5>
          </div>
          <div>
            <SiTailwindcss />
            <h5>Tailwind CSS</h5>
          </div>
         

        </div>
      </div>
    </>
  );
};
