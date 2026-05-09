import React from "react";

function HeroSection() {
  return (
    <div className="container border-bottom mb-5">
      <div className="row p-5 mt-5 mb-5 text-center">
        <h2 className="fs-3 ">Zerodha Products</h2>
        <h4 className="text-muted mt-3 mb-3 fs-5">
          Sleek, modern, and intuitive trading platforms
        </h4>
        <p>
          {" "}
          Check out our<span> </span>
          <a href="#pricing" style={{ textDecoration: "none" }}>
            investment offerings{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
