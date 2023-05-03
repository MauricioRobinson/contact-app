"use client";

import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";

const CallToAction = ({
  text,
  link,
}: {
  text: string;
  link: string;
}): JSX.Element => {
  return (
    <Link href={link}>
      <button className="mt-12 font-bold bg-green-600 px-4 py-2 rounded-lg flex items-center transition duration-500 ease-in-out hover:bg-green-700 hover:outline hover:outline-2 hover:outline-offset-2 hover:outline-green-700">
        {text}{" "}
        <span className="ml-2">
          <ArrowRightIcon className="w-4 h-4" />
        </span>
      </button>
    </Link>
  );
};

export default CallToAction;
