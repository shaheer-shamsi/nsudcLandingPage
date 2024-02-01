import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
    return (
        <div className="navbar lg:px-[220px]">
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
  <div className="navbar-end flex gap-2">
    <a className="rounded px-4 py-2 bg-[#312e81] text-white">Register</a>
    <div className="drawer drawer-end lg:hidden">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer-4" className=" "><AiOutlineMenu className="text-black text-2xl font-bold"/> </label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu p-4 w-32 z-999 min-h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <li><a>About</a></li>
      <li><a>Events</a></li>
      <li><a>Publications</a></li>
      <li><a>Gallery</a></li>
      <li><a>Executive Body</a></li>
     
      <li><a>Hall of Fame</a></li>
    </ul>
  </div>
</div>
  </div>
</div>
    );
};

export default Navbar;