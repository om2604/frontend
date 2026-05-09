import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row  mt-3 mb- p-5 ">
        <h1 className="fs-3 text-center">People</h1>
      </div>

      <div className="row mb-5 mt-2 p-5 ">
        <div
          className="col-6   mb-5 text-muted text-center"
          style={{ lineHeight: "1.5", fontSize: "1.1rem" }}
        >
          <img
            src="media/images/nithinKamath.jpg"
            alt="nithin kamath"
            className="img-fluid rounded-circle mb-3"
            style={{ width: "300px", height: "300px", margignLeft: "100px" }}
          />
          <h3 className="fs-5 ">Nithin Kamath</h3>
          <p className="text-muted fs-6">Founder, CEO</p>
        </div>
        <div
          className="col-6  mb-5 text-muted"
          style={{ lineHeight: "1.5", fontSize: "1.1rem" }}
        >
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>Connect on Homepage / TradingQnA / Twitter</p>
        </div>
      </div>
    </div>
  );
}

export default Team;
