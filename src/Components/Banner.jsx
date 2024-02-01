import React from 'react';

const Banner = () => {
    return (
        
        <div className="hero  bg-[#07073A] bg-opacity-25" style={{backgroundImage: 'url(https://res.cloudinary.com/dgohi0iqm/image/upload/v1706733214/DWC2_c5nees.jpg)'}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content px-[18%] lg:px-[50%]  py-[13%] bg-[#07073A]  bg-opacity-25">
                <div className="max-w-3xl ">
                    <h1 className="mb-2 lg:mb-5 text-2xl lg:text-3xl font-bold">WELCOME TO NSUDC</h1>
                    <p className="mb-3 w-[35vh] mx-auto">The voice of NSU at home and abroad Dream. Dare. Debate</p>
                    <button className="btn bg-[#07073A] btn-ghost">Explore</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
