import React from "react";
import { MenuIcon } from "@heroicons/react/outline";

const Navbar = () => {
  let links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/" },
    { name: "Support", link: "/" },
    { name: "Platform", link: "/" },
    { name: "Pricing", link: "/" },
  ];
  return (
    <div className="w-screen h-[30px] z-10 bg-zinc-200 fixed top-0 left-0 drop-shadow-md">
      <div className="flex items-center justify-between  px-2 w-full h-full">
        <div className="flex items-center">
          <h1 className="text-sm mr-4 sm:text-2xl">BRAND.</h1>
        </div>
        <ul className="flex">
          {links.map((link) => (
            <li className="text-[8px]">
              <a href={link.link}>{link.name}</a>
            </li>
          ))}
        </ul>
        <div className="text-xs">
          <button className="text-[8px] border-none bg-transparent text-black mr-1">
            Sign In
          </button>
          <button className="px-2 text-[8px]">Sign Up</button>
        </div>
      </div>

      <MenuIcon className="w-3" />
    </div>
  );
};

export default Navbar;
