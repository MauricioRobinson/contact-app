"use client";

import React from "react";
import { Logo } from "@/components/Logo";
import { navLinks } from "@/constants/menuData";
import Link from "next/link";

const Footer = (): JSX.Element => {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <footer className="mt-20 p-4">
      <div className="py-8 border-t border-t-slate-800 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex items-center justify-center col-span-2 md:col-span-1">
          <Logo />
        </div>
        <div className="mx-auto">
          <h5>Naviagation</h5>
          <ul className="list-none">
            {navLinks.map(({ id, label, url }) => (
              <li
                key={id}
                className={`cursor-pointer px-2 py-1 text-slate-500 text-sm hover:text-slate-300`}>
                <Link href={url}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="mx-auto">
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
        <div className="mx-auto">
          <h5>Contact</h5>
          <ul className="list-none">
            <li
              className={`cursor-pointer px-2 py-1 text-slate-500 text-sm hover:text-slate-300`}>
              Facebook
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
