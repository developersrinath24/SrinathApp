import React from "react";
import github from "../../assets/images/social/github-logo.png";

const Home = () => {
  return (
    <div id="home">
      <div className="home-wrapper">
        <div className="heading">
          <h1>Srinath Unta</h1>
        </div>
        <div className="subheading">
          <h3>Web Developer</h3>
        </div>
        <div className="home-btn">
          <a className="github-btn" href="github.com">
            <img src={github} width="25" />
            github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
