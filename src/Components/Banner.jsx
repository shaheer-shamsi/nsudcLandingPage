import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen  bg-[#07073A]" style={{backgroundImage: 'url(https://res.cloudinary.com/dgohi0iqm/image/upload/v1706733214/DWC2_c5nees.jpg)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content  text-center text-neutral-content">
          <div className="max-w-lg " >
            <h1 className="mb-5 text-5xl font-bold">WELCOME TO NSUDC</h1>
            <p className="mb-5 w-[35vh] mx-auto ">The voice of NSU at home and abroad
Dream. Dare. Debate</p>
            <button className="btn btn-outline btn-ghost">Explore </button>
          </div>
        </div>
      </div>
    );
};

export default Banner;