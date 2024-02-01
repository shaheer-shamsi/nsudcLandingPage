import React from 'react';

const Banner = () => {
    return (
        <div
            className="relative bg-center bg-[#07073A] bg-opacity-25"
            style={{
                backgroundImage: 'url("https://res.cloudinary.com/dgohi0iqm/image/upload/v1706733214/DWC2_c5nees.jpg")',
                backgroundSize: 'cover',
            }}
        >
            <div className="absolute inset-0 bg-[#07073A] bg-opacity-50"></div>
            <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56 relative z-10">
                <h1 className="mb-4 text-2xl lg:text-4xl font-extrabold tracking-tight leading-none text-neutral-content md:text-5xl lg:text-6xl">
                    WELCOME TO NSUDC
                </h1>
                <p className="mb-8 text-md  font-normal text-neutral-content lg:text-xl w-full lg:w-[42vh] mx-auto">
                    The voice of NSU at home and abroad Dream. Dare. Debate
                </p>
                <div className="flex flex-col ">
                    <button className=" bg-[#07073A] text-neutral-content w-[15vh] p-3 rounded btn btn-outline mx-auto ">Explore</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
