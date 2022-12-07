import React from 'react'
// import { useContext } from 'react';
// import { ThemeContext } from '../../contexts/ThemeContext';
import './Gitstats.css';

const Gitstats = () => {
  // const { theme } = useContext(ThemeContext);
  return (
    <div  data-aos="fade-right" style={{ "textAlign": "center", marginTop: "3rem" }}>
      <h2 className="section__title different" style={{ color: " #80618c" }} >GitHub Stats</h2>

      <div className="gitstat-status" >
        <img  src="https://streak-stats.demolab.com/?user=Omgupta12&theme=buefy)" />
        <img  alt="Omgupta12stats"
          src="https://github-readme-stats.vercel.app/api?username=Omgupta12&show_icons=true&theme=algolia&count_private=true" />
      </div>
    </div>
  )
}

export default Gitstats