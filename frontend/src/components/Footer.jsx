import React from "react";
import { Logo } from "@components/Logo";
import { menuData } from "@constants/menuData";
import Link from "next/link";

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <footer className="mt-20 p-4">
      <div className="py-8 border-t border-t-slate-800 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex items-center justify-center">
          <Logo />
        </div>
        <div className="">
          <h5>Naviagation</h5>
          <ul className="list-none">
            {menuData.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer px-2 py-1 text-slate-500 text-sm hover:text-slate-300`}>
                <Link href={item.url}>
                  <a>{item.text}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <h5>Help</h5>
          <ul className="list-none">
            <li
              className={`cursor-pointer px-2 py-1 text-slate-500 text-sm hover:text-slate-300`}>
              FAQs
            </li>
            <li
              className={`cursor-pointer px-2 py-1 text-slate-500 text-sm hover:text-slate-300`}>
              Client support
            </li>
            <li
              className={`cursor-pointer px-2 py-1 text-slate-500 text-sm hover:text-slate-300`}>
              Report abuse
            </li>
          </ul>
        </div>
        <div className="">
          <h5>Contact</h5>
          <ul className="list-none">
            <li
              className={`cursor-pointer px-2 py-1 text-slate-500 text-sm hover:text-slate-300`}>
              Fcebook
            </li>
            <li
              className={`cursor-pointer px-2 py-1 text-slate-500 text-sm hover:text-slate-300`}>
              Twitter
            </li>
            <li
              className={`cursor-pointer px-2 py-1 text-slate-500 text-sm hover:text-slate-300`}>
              Instagram
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center border-t border-t-slate-800">
        <p className="text-slate-400 text-xs mt-2">
          &copy; {currentYear}. Contact App. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export { Footer };
