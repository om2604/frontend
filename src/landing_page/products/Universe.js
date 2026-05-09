import React from "react";

function Universer() {
  return (
    <div className="container ">
      <div className="row text-center ">
        <h3>
          Want to know more about our technology stack? Check out the
          Zerodha.tech blog.
        </h3>
        <h2>The Zerodha Universe</h2>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="row">
          <div className="col-4">
            <img
              src="media/images/zerodhaFundhouse.png"
              style={{ width: "50%" }}
            />
            <p>
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
          <div className="col-4">
            <img src="media/images/sensibullLogo.svg" />
            <p>
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
          </div>
          <div className="col-4">
            <img src="media/images/tijori.svg" style={{ width: "50%" }} />
            <p>
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <img src="media/images/streakLogo.png" style={{ width: "50%" }} />
            <p>
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </p>
          </div>
          <div className="col-4">
            <img
              src="media/images/smallcaseLogo.png"
              style={{ width: "50%" }}
            />
            <p>
              Thematic investing platform that helps you invest in diversified
              baskets of stocks on ETFs.
            </p>
          </div>
          <div className="col-4">
            <img src="media/images/dittoLogo.png" style={{ width: "50%" }} />
            <p>
              Personalized advice on life and health insurance. No spam and no
              mis-selling. Sign up for free
            </p>
          </div>
        </div>

        <button
          className="btn btn-primary p-2 fs-5 mt-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign Up For Free
        </button>
      </div>
    </div>
  );
}
export default Universer;
