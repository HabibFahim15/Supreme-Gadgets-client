import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error))
  }



  const navItem = <>
    <li className='hover:text-purple-500 font-semibold text-black'><Link to={'/'}>Home</Link></li>
    <li className='hover:text-purple-500 font-semibold text-black'><Link to={'/allitem'}>All Product</Link></li>
    <li className='hover:text-purple-500 font-semibold text-black'><Link to={'/aboutus'}>About Us</Link></li>

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
              className="menu menu-sm dropdown-content bg-gray-400 rounded-box z-50 mt-3 w-52 p-2 shadow">

              {navItem}

            </ul>
          </div>
          <Link to={'/'} className="btn btn-ghost font-bold text-lg md:text-3xl">Supreme <span className='text-purple-500'>Gadgets</span></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItem}
          </ul>
        </div>
        <div className="navbar-end gap-2">

          {
            user ? <>
              <div className="dropdown dropdown-end">
                <div tabIndex={0}  className="btn  btn-ghost btn-circle">
                  <div className="avatar">
                    <div className="w-16 rounded-full">
                      {user?.photoURL ? <img src={user.photoURL} /> : <img src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg" alt="user" />}
                    </div>
                  </div>
                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-purple-900 dark:text-white rounded-box z-50 w-64 p-2 shadow">
                  <div className="divider font-semibold">User Info</div>
                  <li className='font-semibold text-md'><a>Name: {user.displayName}</a></li>
                  <li className='font-semibold text-md'><a>Email: {user.email}</a></li>
                  <div className="divider font-semibold">Other Option</div>
                  <Link to={'addProduct'} className='btn-ghost  font-semibold bg-slate-200 hover:text-white text-black btn'>Add Product</Link>
                  <Link to={'addedProduct'} className='btn-ghost mt-2 mb-4 font-semibold bg-slate-200 hover:text-white text-black btn'>Added Product</Link>
                  <li className='flex rounded-lg bg-red-400 border-red-100'><a  onClick={handleLogOut} className='btn-ghost  font-semibold text-white btn'>Log Out</a></li>
                </ul>
              </div>
              
            </> : <>
              <Link to={'register'} className="btn bg-green-400 border-none text-black hover:text-white">Register</Link>
              <Link to={'/login'} className="btn bg-red-400 border-none text-black hover:text-white">Login</Link>
            </>
          }


        </div>
      </div>
    </div>
  );
};

export default Navbar;