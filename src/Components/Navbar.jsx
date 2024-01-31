import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar px-[220px]">
  <div className="navbar-start">
<img className='w-20 h-10' src="https://res.cloudinary.com/dgohi0iqm/image/upload/v1706732767/nsudc_ez5pef.jpg" alt="" />    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>About</a></li>
      <li><a>Events</a></li>
      <li><a>Publications</a></li>
      <li><a>Gallery</a></li>
      <li><a>Executive Body</a></li>
     
      <li><a>Hall of Fame</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="rounded px-4 py-2 bg-[#312e81] text-white">Register</a>
  </div>
</div>
    );
};

export default Navbar;