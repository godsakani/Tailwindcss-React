import React, {useState} from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
 const [nav, setNav] = useState(false);
 const handleClick = () => setNav(!nav);

  let links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/" },
    { name: "Support", link: "/" },
    { name: "Platform", link: "/" },
    { name: "Pricing", link: "/" },
  ];
  return (
    <div className="w-screen h-[50px] z-10 bg-zinc-200 fixed top-0 left-0 drop-shadow-md">
      <div className="flex items-center justify-between  px-3 w-full h-full">
        <div className=" items-center">
          <h1 className="text-[20px] mr-5 font-bold ">BRAND.</h1>
        </div>
        <div className="w-full">
          <ul className="flex md:hidden xs:hidden">
            {links.map((link) => (
              <li className="text-[15px]">
                <a href={link.link} className="">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex  md:hidden  text-lg w-full justify-end ">
          <button className="text-[14px] border-none bg-transparent text-black mr-1">
            Sign In
          </button>
          <button className="px-7 py-1 text-[14px]">Sign Up</button>
        </div>
        <div className="hidden md:flex" onClick={handleClick}>
        {!nav  ? <MenuIcon className="w-5" /> : <XIcon className="w-5"/>} 
          
        </div>
      </div>

      <ul className={!nav  ? 'hidden' : " 2xl:hidden  bg-zinc-200 w-full px-5"}>
        {links.map((link) => (
          <li className=" text-[15px] border-b-2 border-zinc-300 w-full">
            <a href={link.link} className="">
              {link.name}
            </a>
          </li>
        ))}
        <div className="flex flex-col my-1">
          <button className="bg-transparent text-indigo-600 px-8 py-2 mb-4">Sign In</button>
          <button className="px-8 py-2">Sign Up</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
