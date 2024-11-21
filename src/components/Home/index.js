import React from "react";

const Home = () => {
  return (
    <div id="home" className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-2" />
          <div className="col-md-8 wow fadeIn" data-wow-delay="0.9s">
            <h3>Simple and Elegant</h3>
            <h1>Lavish</h1>
            <h2 className="rotate">
              DESIGNER &amp; DEVELOPER, UI &amp; UX SPECIALIST, PROJECT LEADER
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam
              erat volutpat.
            </p>
            <a
              href="#work"
              className="btn btn-default smoothScroll wow fadeInUp"
              data-wow-delay="1s"
            >
              Get started
            </a>
          </div>
          <div className="col-md-2" />
        </div>
      </div>
    </div>
  );
};

export default Home;
