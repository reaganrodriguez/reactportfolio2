
import React from 'react';
import pic from "../img/pic.jpg"
import "./home.css";

function Home() {
  return (
    <div className="container">
      <h1 className="heading">Welcome to My Portfolio Site</h1>
      <img src={pic} alt="My Avatar" className="avatar" />
      {/* <img src="../public/img/pic.jpg" alt="My Avatar" className="avatar" /> */}
      <p className="brand-statement">
        Hi, my name is REAGAN RODRIGUEZ and I am a FrontEnd developer I am passionate about coding. I specialize in Reactjs and I am excited to share my work with you.
      </p>
      <p className="portfolio-indication">Here are some examples of my work in Boot Camp</p>
    </div>
  );
}

export default Home;
