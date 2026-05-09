import React from "react";

function LeftImg({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container ">
      <div className="row p-3">
        {/* left */}
        <div className="col-5 ">
          <img src={imageURL} />
        </div>
        <div className="col-2"></div>
        {/* right */}
        <div className="col-5 p-5">
          <h1 className="fs-3 mb-4">{productName}</h1>
          <p className="text-muted fs-6" style={{ lineHeight: 1.8 }}>
            {productDescription}
          </p>
          <div>
            <a href={tryDemo}>Try Demo</a>
            <a href={learnMore}>Learn More</a>
          </div>
          <div>
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a href={appStore}>
              <img src="media/images/appstoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LeftImg;
