import React from "react";
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import SimpleSteps from "./SimpleSteps";
import About from "./About";
import Contact from "./Contact";
import WhoWeHelp from "./WhoWeHelp";
import { Link } from "react-router-dom";
import decoration_img from "../../assets/Decoration.svg";
import "../../scss/_Home.scss";

const Home = () => {
  return (
    <div>
      <HomeHeader />
      <section className="home" id="home">
        <div className="banner"></div>
        <div className="banner-description">
          <h1>
            Zacznij pomagać! <br></br>
            Oddaj niechciane rzeczy w zaufane ręce
          </h1>
          <img
            src={decoration_img}
            alt="decoration icon"
            className="decoration_img"
          />
          <div className="button-container">
            <Link to="/login">
              <button className="btn">ODDAJ RZECZY</button>
            </Link>
            <Link to="/login">
              <button className="btn">ZORGANIZUJ ZBIÓRKĘ</button>
            </Link>
          </div>
        </div>
      </section>
      <HomeThreeColumns />
      <SimpleSteps />
      <About/>
      <WhoWeHelp/>
      <Contact/>
    </div>
  );
};

export default Home;
