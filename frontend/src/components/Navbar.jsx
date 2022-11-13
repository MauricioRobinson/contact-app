import React from "react";
import { PhoneIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  return (
    <nav className="w-full max-h-20">
      <div className="flex justify-between items-center p-4">
        <div className="">
          <PhoneIcon className="w-8 h-8" />
        </div>
        <ul className="list-none flex items-center font-semibold tracking-wide">
          <li className="mr-6 cursor-pointer hover:bg-blue-500">Home</li>
          <li className="mr-6 cursor-pointer">Contacts</li>
          <li className="mr-6 cursor-pointer">Sigin</li>
          <li>Logout</li>
        </ul>
      </div>
    </nav>
  );
};

export { Navbar };
