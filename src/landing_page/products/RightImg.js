import React from "react";

function RightImg({ imageURL, productName, productDescription, tryDemo }) {
  return (
    <div className="container ">
      <div className="row ">
        {/* left */}
        <div className="col-5 ">
          <h1 className="fs-3 mb-4">{productName}</h1>
          <p className="text-muted fs-6" style={{ lineHeight: 1.8 }}>
            {productDescription}
          </p>
          <a href={tryDemo}>Try Demo</a>
        </div>

        {/* <div className="col-2"></div> */}
        {/* right */}
        <div className="col-5 ">
          <img src={imageURL} />
        </div>
      </div>
    </div>
  );
}
export default RightImg;
