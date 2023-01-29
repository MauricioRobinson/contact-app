import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { menuData } from "@constants/menuData";
import { Logo } from "@components/Logo";
import { useRouter } from "next/router";
import { useLogout } from "@hooks/useLogout";

const Navbar = () => {
  const router = useRouter();
  const [menu, setMenu] = useState(false);
  const { logout } = useLogout();

  const handleMenu = () => {
    setMenu((prevState) => !prevState);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="w-full max-h-20 backdrop-blur-sm bg-white/5 z-50">
      <div className="flex justify-between items-center p-6">
        <Logo />
        <ul className="hidden  list-none md:flex md:items-center font-semibold tracking-wide space-x-4">
          {menuData.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer px-2 py-1 transition duration-300 ease-in-out hover:border-b-2 hover:border-b-blue-600 overflow-hidden ${
                router.asPath === item.url
                  ? "border-b-2 border-b-blue-600"
                  : "border-b-2 border-b-transparent"
              }`}>
              <Link href={item.url}>
                <a>{item.text}</a>
              </Link>
            </li>
          ))}
          <li>
            <button
              className="border-2 border-blue-600 cursor-pointer px-2 py-1 rounded transition duration-300 ease-out hover:bg-blue-600"
              onClick={handleLogout}>
              Logout
            </button>
          </li>
        </ul>

        <div className="md:hidden flex items-center justify-center relative">
          <button onClick={handleMenu}>
            {!menu ? (
              <Bars3Icon className="w-8 h-8 cursor-pointer" />
            ) : (
              <XMarkIcon className="w-8 h-8 cursor-pointer" />
            )}
          </button>
        </div>
      </div>

      <ul
        className={`md:hidden list-none font-semibold tracking-wide absolute top-20 right-0 rounded-bl-md p-6 transition duration-300 ease-in-out backdrop-blur-lg bg-black/70 z-50 ${
          menu
            ? "animate__animated animate__bounceInDown"
            : "animate__animated animate__bounceOutUp"
        }`}>
        {menuData.map((item) => (
          <li
            key={item.id}
            className={`cursor-pointer mx-auto px-2 py-1 transition duration-300 ease-in-out hover:border-b-2 hover:border-b-blue-600 overflow-hidden mb-4 text-xl ${
              router.asPath === item.url
                ? "border-b-2 border-b-blue-600"
                : "border-b-2 border-b-transparent"
            }`}>
            <Link href={item.url}>
              <a>{item.text}</a>
            </Link>
          </li>
        ))}
        <li>
          <button
            className="border-2 border-blue-600 cursor-pointer px-2 py-1 rounded transition duration-300 ease-out hover:bg-blue-600"
            onClick={handleLogout}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export { Navbar };
