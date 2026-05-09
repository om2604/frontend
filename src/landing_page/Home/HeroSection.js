import React from 'react';

function Hero() {
    return ( 
        <div className="contianer p-5">
            <div className='row text-center'>
                <img src ='media/images/homeHero.png' alt='Hero Section' className='mb-5' style={{width:"50%", margin:"0 auto"}}></img>
                <h1 className='mt-5 fs-24px'>Invest in everything</h1>
                <p className='fs-5'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className='btn btn-primary p-2 fs-5' style={{width:"20%", margin:"0 auto"}}>Sign Up For Free</button>
            </div>
        </div> 

     );
}

export default Hero;