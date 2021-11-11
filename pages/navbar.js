import Link from "next/link";
import { useState } from "react";
const Navbar = () => {

    const [toggle, setToggle] = useState(false);
    const toggleDropdown = () => {
        setToggle(!toggle)
    }
    return (
        <>
<nav className="bg-gray-100">
  <div className="max-w-6xl mx-auto px-4">
    <div className="flex justify-between">

      <div className="flex space-x-4">
 
        <div>
          <a href="#" className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
            <svg class="h-6 w-6 mr-1 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            <span className="font-bold">Shopping</span>
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-1">
         <Link href="/"><a className="py-5 px-3 text-gray-700 hover:text-gray-900">HOME</a></Link>
         <Link href="/about"><a className="py-5 px-3 text-gray-700 hover:text-gray-900">ABOUT US</a></Link>
         <Link href="/contact"><a className="py-5 px-3 text-gray-700 hover:text-gray-900">CONTACT</a></Link>
         <Link href="/product"><a className="py-5 px-3 text-gray-700 hover:text-gray-900">PRODUCTS</a></Link>
         <Link href="/addcart"><a className="py-5 px-3 text-gray-700 hover:text-gray-900">CART</a></Link>
        </div>
      </div>


      <div className="hidden md:flex items-center space-x-4">
        <a href="" className="py-5 px-3">Login</a>
        {/* <a href="" class="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300">Signup</a> */}
      </div>

      <div className="md:hidden flex items-center">
        <button className="mobile-menu-button" onClick={toggleDropdown}>
          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>

  <div className={`mobile-menu ${toggle ? '' : "hidden"}`}>
   <Link href="/"><a className="block py-2 px-4 text-sm hover:bg-gray-200">HOME</a></Link>
   <Link href="/about"><a className="block py-2 px-4 text-sm hover:bg-gray-200">ABOUT US</a></Link> 
   <Link href="/contact"><a className="block py-2 px-4 text-sm hover:bg-gray-200">CONTACT US</a></Link> 
   <Link href="/product"><a className="block py-2 px-4 text-sm hover:bg-gray-200">PRODUCTS</a></Link> 
   <Link href="/addcart"><a className="block py-2 px-4 text-sm hover:bg-gray-200">ADD CART</a></Link> 
  </div>
</nav>
</>
);
};
export default Navbar;