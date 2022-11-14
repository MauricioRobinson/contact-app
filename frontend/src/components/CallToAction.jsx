import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";

const CallToAction = (props) => {
  return (
    <div>
      <Link href={props.link}>
        <a className="font-bold">
          <button className="mt-12 bg-green-600 px-4 py-2 rounded-lg flex items-center transition duration-500 ease-in-out hover:bg-green-700 hover:outline hover:outline-2 hover:outline-offset-2 hover:outline-green-700">
            {props.text}{" "}
            <span className="ml-2">
              <ArrowRightIcon className="w-4 h-4" />
            </span>
          </button>
        </a>
      </Link>
    </div>
  );
};

export { CallToAction };
