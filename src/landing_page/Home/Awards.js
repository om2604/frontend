import React from 'react';

function Awards() {
    return ( 
       
      //  <div className="contianer mt-5">
      //       <div className='row '>
                
      //            <div className='col-6 pf-10'>
      //               <h2 className='mb-5'>Trust with confidence</h2>

      //               <h3 className='mb-3'>Customer-first always</h3>
      //               <p>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India</p>

      //               <h3 className='mb-3'>No spam or gimmicks</h3>
      //               <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>

      //               <h3 className='mb-3'>The Zerodha universe</h3>
      //               <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

      //               <h3 className='mb-3'>Do better with money</h3>
      //               <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money</p>

                   
      //            </div>

      //            <div className='col-6'>
      //               <img src='media/images/largestBroker.png' alt='Star' className='img-fluid pf-5' style={{width:"90%", margin:"0 auto"}}></img>
      //               {/* <a src='#'>Explore our products </a> <a src='#'>Try Kite demo </a> */}
      //           </div>
      //             <div className='col text-center'>
      //               <img src='/media/images/pressLogos.png' alt='press' className='text-center'></img>
      //             </div>
                  
      //       </div>
      //   </div> 
      <section className="container-fluid py-5">
  <div className="container">
    <div className="row align-items-start g-5">
      {/* Left Section - Text Content */}
      <div className="col-lg-6 col-md-12">
        <h2 className="mb-4 fw-bold">Trust with confidence</h2>

        <div className="mb-5">
          <h4 className="mb-3 fw-semibold">Customer-first always</h4>
          <p className="text-muted">
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India's largest broker; contributing to 15% of daily retail exchange volumes in India
          </p>
        </div>

        <div className="mb-5">
          <h4 className="mb-3 fw-semibold">No spam or gimmicks</h4>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.
          </p>
        </div>

        <div className="mb-5">
          <h4 className="mb-3 fw-semibold">The Zerodha universe</h4>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.
          </p>
        </div>

        <div className="mb-5">
          <h4 className="mb-3 fw-semibold">Do better with money</h4>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money
          </p>
        </div>
      </div>

      {/* Right Section - Image Content */}
      <div className="col-lg-6 col-md-12 d-flex flex-column gap-4">
        <div className="d-flex justify-content-center">
          <img
            src="media/images/largestBroker.png"
            alt="Largest Broker"
            className="img-fluid"
            style={{ maxWidth: "85%", height: "auto" }}
          />
        </div>

        {/* Action Links Below Image */}
        <div className="mt-4 d-flex gap-4 flex-wrap justify-content-center">
          <a 
            href="/products" 
            className="text-decoration-none fw-semibold"
            style={{ color: "#0066cc" }}
          >
            Explore our products →
          </a>
          <a 
            href="https://kite-demo.zerodha.com/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none fw-semibold"
            style={{ color: "#0066cc" }}
          >
            Try Kite demo →
          </a>
        </div>
    </div>
    </div>
  </div>
  {/* Press Logos Section */}
    <div className="row mt-5">
      <div className="col-12 text-center">
        <img
          src="/media/images/pressLogos.png"
          alt="Press Logos"
          className="img-fluid"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
    </div>
</section>


     );
}

export default Awards;