
import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {


  return (
    <div className="navbar max-w-6xl mx-auto">
      <div className="navbar-start">
        <img
          className="w-20  lg:w-32 h-12"
          src="https://res.cloudinary.com/dgohi0iqm/image/upload/v1706732767/nsudc_ez5pef.jpg"
          alt=""
        />
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a href="/" className="text-md text-[#07073A]">About</a></li>
          <li><a href="/" className="text-md text-[#07073A]">Events</a></li>
          <li><a href="/" className="text-md text-[#07073A]">Publications</a></li>
          <li><a href="/" className="text-md text-[#07073A]">Gallery</a></li>
          <li><a href="/" className="text-md text-[#07073A]">Executive Body</a></li>
          <li><a href="/" className="text-md text-[#07073A]">Hall of Fame</a></li>
        </ul>
      </div>

      <div className="navbar-end flex gap-2 relative">
        <a className="rounded px-4 py-2 bg-[#312e81] text-white">Register</a>
        <div className="relative ">
        <div className="dropdown dropdown-bottom dropdown-end lg:hidden">
  <div tabIndex={0} role="button" > <button
            className="rounded px-4 py-2.5 bg-[#312e81] text-white"
          >
            <AiOutlineMenu className="text-white text-xl font-extrabold" />
          </button></div>
  <ul tabIndex={0} className="dropdown-content z-[999] menu p-2 shadow bg-[#07073A] rounded-box w-52">
              {/* Dropdown content here */}
              <li><a href="/" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="/" className="text-gray-400 hover:text-white">Events</a></li>
              <li><a href="/" className="text-gray-400 hover:text-white">Publications</a></li>
              <li><a href="/" className="text-gray-400 hover:text-white">Gallery</a></li>
              <li><a href="/" className="text-gray-400 hover:text-white">Executive Body</a></li>
              <li><a href="/" className="text-gray-400 hover:text-white">Hall of Fame</a></li>
  </ul>
</div>
         
        
        </div>
      </div>
    </div>
  );
};

export default Navbar;
