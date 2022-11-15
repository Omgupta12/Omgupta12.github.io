import React from 'react'
import { educationData } from '../../data/educationData'
import EducationCard from './EducationCard'
import "./Education.css"
import svg from "./eduPurple.svg"

const Education = () => {
  return (
    <div style={{marginTop:"8rem"}} data-aos="fade-right" className="education" id="resume" >
   <h2 className="section__title different" style={{color: " #80618c",textAlign:"center"}}>Education</h2>
            <div style={{marginTop:"1rem"}} className="education-body">
                <div  className="education-description">
                   

                    {educationData.map(edu => (
                        <EducationCard 
                            key={edu.id}
                            id={edu.id}
                            institution={edu.institution}
                            course={edu.course}
                            startYear={edu.startYear}
                            endYear={edu.endYear}
                        />
                    ))}
                </div>
                <div className="education-image">
                    <img src={svg} alt="eduction-logo"/>
                </div>
            </div>
        </div>
  )
}

export default Education