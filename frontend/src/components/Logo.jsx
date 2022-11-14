import Link from "next/link";
import React from "react";
import { PhoneIcon } from "@heroicons/react/24/solid";

const Logo = () => {
  return (
    <div className="">
      <Link href="/">
        <a>
          <div className="flex items-center">
            <PhoneIcon className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
            <span className="ml-4 text-lg md:text-xl lg:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-600">
              Contact App
            </span>
          </div>
        </a>
      </Link>
    </div>
  );
};

export { Logo };
