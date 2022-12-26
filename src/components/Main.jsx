import React from "react";
import egg from "../assets/images/desktop/image-transform.jpg";
import glass from "../assets/images/desktop/image-stand-out.jpg";
import Testimonials from "./Testimonials";
import Gallery from "./Gallery";

const Main = () => {
  return (
    <main>
      <div className="card">
        <div className="card-text">
          <div className="content">
            <h2>Transform your brand</h2>
            <p>
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>
            <a href="/" className="more">
              Learn More
            </a>
          </div>
        </div>
        <div className="image">
          <img src={egg} alt="stand" />
        </div>
      </div>
      {/* Hello  */}
      <div className="card red">
        <div className="image">
          <img src={glass} alt="glass" />
        </div>
        <div className="card-text">
          <div className="content">
            <h2>Stand out to the right audience</h2>
            <p>
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we’ll build and
              extend your brand in digital places.
            </p>
            <a href="/" className="more--red">
              Learn More
            </a>
          </div>
        </div>
      </div>
      <div className="card cimages">
        <div className="card-text ph">
          <div className="content">
            <h3>Photography</h3>
            <p>
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </div>
        </div>
        <div className="card-text gd">
          <div className="content">
            <h3>Graphic design</h3>
            <p>
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients’
              attention.
            </p>
          </div>
        </div>
      </div>
      <Testimonials />
      <Gallery />
    </main>
  );
};

export default Main;
