import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navItem= <>
   <li><Link to={'/'}>Home</Link></li>
   <li><Link to={'/addItem'}>Add Item</Link></li>
   <li><Link to={'/about'}>About Us</Link></li>
  </>
  return (
    <div>
      <div className="navbar text-black bg-sky-100 rounded-md mb-8 md:px-20">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
        
        {navItem}
        
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navItem}
    </ul>
  </div>
  <div className="navbar-end gap-2">
    <Link to={'/register'} className="btn bg-green-400 border-none text-black hover:text-white">Register</Link>
    <Link to={'/login'} className="btn bg-red-400 border-none text-black hover:text-white">Login</Link>
  </div>
</div>
    </div>
  );
};

export default Navbar;