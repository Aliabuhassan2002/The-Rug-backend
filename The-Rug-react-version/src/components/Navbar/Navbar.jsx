// import './Navbar.css'
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from 'react-router-dom';
// import Cookies from 'js-cookie';
// import { LogOut } from 'lucide-react';


// function Navbar(){
//       const count = useSelector((state) => state.product.count);
      
//        const handleLogout = () => {
//     Cookies.remove('token');
//     navigate('/login');
//   };
  
//     return(
// <nav className='w-full bg-[#444444] border-b fixed top-0 left-0 z-1000'>
//     <div className='container mx-auto flex items-center justify-between px-4 sm:px-6 py-3'>

//                 {/* Logo Section */}
//                 <div className="flex items-center">
//                     <a href="javascript:void(0)" className="max-sm:hidden">
//                         <img src="src/assets/10075827.jpg" alt="logo" className='w-25 h-20' />
//                     </a>
//                     <a href="javascript:void(0)" className="hidden max-sm:block">
//                         <img src="https://readymadeui.com/readymadeui-short.svg" alt="logo" className='w-9' />
//                     </a>
//                 </div>

//                 {/* Navigation Links */}
//                 <div id="collapseMenu" className='lg:flex lg:ml-6 max-lg:hidden'>
//                   <ul className='lg:flex lg:gap-x-3'>
//     {/* <li className='px-3 text-white'><a href='javascript:void(0)' className='hover:text-[#007bff] text-[15px] font-semibold'>Home</a></li>
//     <li className='px-3 text-white'><a href='javascript:void(0)' className='hover:text-[#007bff] text-[15px] font-semibold'>Shop</a></li>
//     <li className='px-3 text-white'><a href='javascript:void(0)' className='hover:text-[#007bff] text-[15px] font-semibold'>About Us</a></li>
//     <li className='px-3 text-white'><a href='javascript:void(0)' className='hover:text-[#007bff] text-[15px] font-semibold'>Contact Us</a></li>
//     <li className='px-3 text-white'><a href='javascript:void(0)' className='hover:text-[#007bff] text-[15px] font-semibold'>Manage</a></li> */}
//     <Link className='px-3 text-white' to="/"><li  className='hover:text-[#007bff] text-[15px] font-semibold'>Home</li></Link>
//     <Link className='px-3 text-white' to="/shop"><li  className='hover:text-[#007bff] text-[15px] font-semibold'>Shop</li></Link>
//     <Link className='px-3 text-white' to="/become-provider"><li  className='hover:text-[#007bff] text-[15px] font-semibold'>become provider</li></Link>
//     <Link className='px-3 text-white' to="/about"><li  className='hover:text-[#007bff] text-[15px] font-semibold'>About us</li></Link>
//     <Link className='px-3 text-white' to="/contact"><li  className='hover:text-[#007bff] text-[15px] font-semibold'>Contact us</li></Link>
//     <Link className='px-3 text-white' to="/dashboard"><li  className='hover:text-[#007bff] text-[15px] font-semibold'>Manage</li></Link>
//     <Link className='px-3 text-white' to="/accessories"><li  className='hover:text-[#007bff] text-[15px] font-semibold'>Accessories</li></Link>
// </ul>

//                 </div>

//                 {/* Mobile Menu */}
//                 <div className="lg:hidden">
//                     <button id="toggleOpen">
//                         <svg className="w-7 h-7" fill="#333" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                             <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
//                         </svg>
//                     </button>
//                 </div>

//                 {/* Right Side Items */}
//                 <div className="flex items-center gap-x-6">
//                     {/* Search Bar */}
//                     <div className='hidden lg:flex bg-gray-50 border focus-within:bg-transparent focus-within:border-gray-400 rounded-full px-4 py-2.5 max-w-52'>
//                         <input type='text' placeholder='Search something...' className='w-full text-sm bg-transparent outline-none pr-2' />
//                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px" className="cursor-pointer fill-gray-600">
//                             <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
//                         </svg>
//                     </div>

//                     {/* Wishlist */}
//                     <div className="flex flex-col items-center justify-center gap-0.5 cursor-pointer">
//                         <div className="relative">
//                             <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer fill-[#fff] inline w-5 h-5" viewBox="0 0 64 64">
//                                 <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" />
//                             </svg>
//                             <span className="absolute left-auto -ml-1 top-0 rounded-full bg-red-500 px-1 py-0 text-xs text-white">0</span>
//                         </div>
//                         <span className="text-[13px] font-semibold text-[#fff]">Wishlist</span>
//                     </div>

//                     {/* Cart */}
//                     <Link to={'/cart'}>
//                     <div className="flex flex-col items-center justify-center gap-0.5 cursor-pointer">
//                         <div className="relative">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" className="cursor-pointer fill-[#fff] inline" viewBox="0 0 512 512">
//                                 <path d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"></path>
//                             </svg>
//                             <span className="absolute left-auto -ml-1 top-0 rounded-full bg-red-500 px-1 py-0 text-xs text-white">{count}</span>
//                         </div>
//                         <span className="text-[13px] font-semibold text-[#fff]">Cart</span>
//                     </div>
//                     </Link>

//                     {/* Sign In Button */}
//                     <Link to={"/register"}>
//                     <button className='hidden lg:block px-4 py-2 text-sm rounded-full text-white border-2 border-[#007bff] bg-[#007bff] hover:bg-[#004bff]'>
//                         Sign In
//                     </button>
//                     </Link>
//                 </div>
//             </div>

//             {/* Mobile Menu (Hidden by default) */}
//             <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50 hidden">
//                 <div className="bg-white w-1/2 min-w-[300px] h-full p-6 overflow-auto">
//                     <div className="flex items-center justify-between mb-6">
//                         <img src="https://readymadeui.com/readymadeui.svg" alt="logo" className='w-36' />
//                         <button className='px-4 py-2 text-sm rounded-full text-white border-2 border-[#007bff] bg-[#007bff]'>Sign In</button>
                 
//                     </div>
//                            <button
//             onClick={handleLogout}
//             className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200"
//           >
//             <LogOut className="h-4 w-4 mr-2" />
//             Logout
//           </button>
//                     <ul className='space-y-3'>
//                         <li className='border-b py-3'><a href='javascript:void(0)' className='text-[#007bff] text-[15px] font-semibold'>New</a></li>
//                         <li className='border-b py-3'><a href='javascript:void(0)' className='text-[#333] hover:text-[#007bff] text-[15px] font-semibold'>Men</a></li>
//                         <li className='border-b py-3'><a href='javascript:void(0)' className='text-[#333] hover:text-[#007bff] text-[15px] font-semibold'>Women</a></li>
//                         <li className='border-b py-3'><a href='javascript:void(0)' className='text-[#333] hover:text-[#007bff] text-[15px] font-semibold'>Kids</a></li>
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//     );
// }

// export default Navbar;

import { useNavigate, Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import Cookies from 'js-cookie';
import { LogOut } from 'lucide-react';
import axios from 'axios';

function Navbar() {
    const count = useSelector((state) => state.product.count);
    const navigate = useNavigate();
    
    const handleLogout = async () => {
          try {
      await axios.post(
        "http://localhost:5000/api/auth/logout",
        {},
        { withCredentials: true }
      );
      window.location.href = "/login";
    } catch (error) {
      console.error("فشل في تسجيل الخروج");
    }
       
    };
   

    return (
        <nav className='w-full bg-[#444444] border-b fixed top-0 left-0 z-1000'>
            <div className='container mx-auto flex items-center justify-between px-4 sm:px-6 py-3'>
                {/* Logo Section */}
                <div className="flex items-center">
                    <a href="javascript:void(0)" className="max-sm:hidden">
                        <img src="src/assets/10075827.jpg" alt="logo" className='w-25 h-20' />
                    </a>
                    <a href="javascript:void(0)" className="hidden max-sm:block">
                        <img src="https://readymadeui.com/readymadeui-short.svg" alt="logo" className='w-9' />
                    </a>
                </div>

                {/* Navigation Links */}
                <div id="collapseMenu" className='lg:flex lg:ml-6 max-lg:hidden'>
                    <ul className='lg:flex lg:gap-x-3'>
                        <Link className='px-3 text-white' to="/"><li className='hover:text-[#007bff] text-[15px] font-semibold'>Home</li></Link>
                        <Link className='px-3 text-white' to="/shop"><li className='hover:text-[#007bff] text-[15px] font-semibold'>Shop</li></Link>
                        <Link className='px-3 text-white' to="/become-provider"><li className='hover:text-[#007bff] text-[15px] font-semibold'>become provider</li></Link>
                        <Link className='px-3 text-white' to="/about"><li className='hover:text-[#007bff] text-[15px] font-semibold'>About us</li></Link>
                        <Link className='px-3 text-white' to="/contact"><li className='hover:text-[#007bff] text-[15px] font-semibold'>Contact us</li></Link>
                        <Link className='px-3 text-white' to="/dashboard"><li className='hover:text-[#007bff] text-[15px] font-semibold'>Manage</li></Link>
                        <Link className='px-3 text-white' to="/provider-profile"><li className='hover:text-[#007bff] text-[15px] font-semibold'>provider profile</li></Link>
                        <Link className='px-3 text-white' to="/accessories"><li className='hover:text-[#007bff] text-[15px] font-semibold'>Accessories</li></Link>
                    </ul>
                </div>

                {/* Mobile Menu */}
                <div className="lg:hidden">
                    <button id="toggleOpen">
                        <svg className="w-7 h-7" fill="#fff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                        </svg>
                    </button>
                </div>

                {/* Right Side Items */}
                <div className="flex items-center gap-x-6">
                    {/* Search Bar */}
                    <div className='hidden lg:flex bg-gray-50 border focus-within:bg-transparent focus-within:border-gray-400 rounded-full px-4 py-2.5 max-w-52'>
                        <input type='text' placeholder='Search something...' className='w-full text-sm bg-transparent outline-none pr-2' />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px" className="cursor-pointer fill-gray-600">
                            <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
                        </svg>
                    </div>

                    {/* Wishlist */}
                    <div className="flex flex-col items-center justify-center gap-0.5 cursor-pointer">
                        <div className="relative">
                            <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer fill-[#fff] inline w-5 h-5" viewBox="0 0 64 64">
                                <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" />
                            </svg>
                            <span className="absolute left-auto -ml-1 top-0 rounded-full bg-red-500 px-1 py-0 text-xs text-white">0</span>
                        </div>
                        <span className="text-[13px] font-semibold text-[#fff]">Wishlist</span>
                    </div>

                    {/* Cart */}
                    <Link to='/cart'>
                        <div className="flex flex-col items-center justify-center gap-0.5 cursor-pointer">
                            <div className="relative">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" className="cursor-pointer fill-[#fff] inline" viewBox="0 0 512 512">
                                    <path d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"></path>
                                </svg>
                                <span className="absolute left-auto -ml-1 top-0 rounded-full bg-red-500 px-1 py-0 text-xs text-white">{count}</span>
                            </div>
                            <span className="text-[13px] font-semibold text-[#fff]">Cart</span>
                        </div>
                    </Link>

                    {/* Auth Buttons */}
                    <div className="flex items-center gap-x-2">
                        <button
                            onClick={handleLogout}
                            className="px-4 py-2 text-sm rounded-full text-white border-2 border-red-600 bg-red-600 hover:bg-red-700 transition-colors duration-200 flex items-center"
                        >
                            <LogOut className="h-4 w-4 mr-2" />
                            Logout
                        </button>
                        <Link to="/register">
                            <button className='hidden lg:block px-4 py-2 text-sm rounded-full text-white border-2 border-[#007bff] bg-[#007bff] hover:bg-[#004bff]'>
                                Sign In
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Mobile Menu (Hidden by default) */}
            <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50 hidden">
                <div className="bg-white w-1/2 min-w-[300px] h-full p-6 overflow-auto">
                    <div className="flex items-center justify-between mb-6">
                        <img src="https://readymadeui.com/readymadeui.svg" alt="logo" className='w-36' />
                        <button className='px-4 py-2 text-sm rounded-full text-white border-2 border-[#007bff] bg-[#007bff]'>Sign In</button>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200"
                    >
                        <LogOut className="h-4 w-4 mr-2" />
                        Logout
                    </button>
                    <ul className='space-y-3'>
                        <li className='border-b py-3'><a href='javascript:void(0)' className='text-[#007bff] text-[15px] font-semibold'>New</a></li>
                        <li className='border-b py-3'><a href='javascript:void(0)' className='text-[#333] hover:text-[#007bff] text-[15px] font-semibold'>Men</a></li>
                        <li className='border-b py-3'><a href='javascript:void(0)' className='text-[#333] hover:text-[#007bff] text-[15px] font-semibold'>Women</a></li>
                        <li className='border-b py-3'><a href='javascript:void(0)' className='text-[#333] hover:text-[#007bff] text-[15px] font-semibold'>Kids</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;