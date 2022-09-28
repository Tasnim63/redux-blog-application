import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { BiLogOut} from 'react-icons/bi';
import { FaHome ,FaUserAlt} from "react-icons/fa";
import { Link } from "react-router-dom";
import auth from '../firebase.init';

const Navbar = () => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className=' flex justify-between shadow items-center h-24 mx-auto px-4 text-black'>
      <h1 className=' text-3xl font-bold'>  <Link to='/' className=" text-4xl cursor-pointer">
            <FaHome></FaHome>
             </Link></h1>
      <ul className='hidden md:flex'>
       
        <li className='p-4'>
        <Link className="hover:text-gray-300 duration-300" to='/add-comments'>Comments</Link>
        </li>
        <li className='p-4'>
        <Link className="hover:text-gray-300 duration-300" to='/'>All Views</Link>
        </li>
        <li className='p-4'>
        { user ?  <button onClick={logout}><BiLogOut className=' text-3xl text-indigo-900'></BiLogOut></button> : <Link className="hover:text-gray-300 duration-300" to='/login'><FaUserAlt className=' text-3xl text-indigo-900'></FaUserAlt></Link>}
        </li>
      
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r  bg-white ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold m-4'> <span className=" text-4xl cursor-pointer">
            <FaHome></FaHome>
             </span></h1>
          <li className='p-4 border-b border-gray-600'>
         
          </li>
          <li className='p-4 border-b border-gray-600'>
          <Link className="hover:text-gray-300 duration-300" to='/add-comments'>Blog</Link>
          </li>
          <li className='p-4 border-b border-gray-600'>
          <Link className="hover:text-gray-300 duration-300" to='/'>All Views</Link>
          </li>
          </ul>
    </div>
  );
};

export default Navbar;







