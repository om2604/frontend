import React from "react";

function Pricing() {
  return (
    // <div className="container">
    //   <div className="row">
    //     <div className="col-4">
    //       <h1 className="mb-3 fs-2">Unbeatable pricing</h1>
    //       <p>
    //         We pioneered the concept of discount broking and price transparency
    //         in India. Flat fees and no hidden charges.
    //       </p>
    //       <a href="" style={{ textDecoration: "none" }}>
    //         See Pricing{" "}
    //         <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
    //       </a>
    //     </div>
    //     <div className="col-2"></div>
    //     <div className="col-6  mb-5">
    //       <div className="row text-center">
    //         <div className="col p-3 border">
    //           <h1 className="mb-3">₹0</h1>
    //           <p>
    //             Free equity delivery and
    //             <br />
    //             direct mutual funds
    //           </p>
    //         </div>
    //         <div className="col p-3 border">
    //           <h1 className="mb-3">₹20</h1>
    //           <p>Intraday and F&O</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // <div className="container">
    //   <div className="row">
    //     {/* Left Section */}
    //     <div className="col-4">
    //       <div className="row">
    //         <h1 className="mb-3 fs-2">Unbeatable pricing</h1>
    //         <p>
    //           We pioneered the concept of discount broking and price
    //           transparency in India. Flat fees and no hidden charges.
    //         </p>
    //         <a href="" style={{ textDecoration: "none" }}>
    //           See Pricing{" "}
    //           <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
    //         </a>
    //       </div>
    //     </div>
    //     {/* Empty space */}
    //     <div className="col-1"></div>
    //     {/* Right Section */}
    //     <div className="col-2 d-flex align-items-center">
    //       <div className="row">
    //         <img src="media/images/pricing0.svg" alt="pricing" />
    //         <p>Free account opening</p>
    //       </div>
    //     </div>
    //     <div className="col-2">
    //       <div className="row">
    //         <img src="media/images/pricing0.svg" alt="pricing20" />
    //         <p>Free equity delivery and direct mutual funds</p>
    //       </div>
    //     </div>
    //     <div className="col-3">
    //       <div className="row">
    //         <img src="media/images/pricing20.svg" alt="pricing" />
    //         <p>Intraday and F&O</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Left Section - Text */}
        <div className="col-5">
          <h1 className="mb-3 fs-2">Unbeatable pricing</h1>
          <p className="text-muted">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#pricing" style={{ textDecoration: "none" }}>
            See Pricing{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>

        {/* Right Section - Pricing Row */}
        <div className="col-7">
          <div className="row">
            {/* Item 1 */}
            <div className="col-4 d-flex align-items-center">
              <img
                src="media/images/pricing0.svg"
                alt="0"
                style={{ width: "100px" }}
              />
              <p
                className="text-muted small ms-2 mb-0"
                style={{ fontSize: "0.7rem" }}
              >
                Free account opening
              </p>
            </div>

            {/* Item 2 */}
            <div className="col-4 d-flex align-items-center">
              <img
                src="media/images/pricing0.svg"
                alt="0"
                style={{ width: "100px" }}
              />
              <p
                className="text-muted small ms-1 mb-0 "
                style={{ fontSize: "0.6rem" }}
              >
                Free equity delivery and direct mutual funds
              </p>
            </div>

            {/* Item 3 */}
            <div className="col-4 d-flex align-items-center">
              <img
                src="media/images/pricing20.svg"
                alt="20"
                style={{ width: "100px" }}
              />
              <p
                className="text-muted small ms-2 mb-0 "
                style={{ fontSize: "0.7rem" }}
              >
                Intraday and F&O
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
