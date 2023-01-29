import { TrashIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import Link from "next/link";
import React from "react";

const ContactCardButton = ({ id }) => {
  const handleDelete = async () => {
    const response = await axios.delete(
      `${process.env.NEXT_PUBLIC_API}/contacts/${id}`
    );

    if (response.statusText !== "OK") {
      throw Error("We could not delete the contact");
    }

    return response;
  };

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-4">
      <Link
        href={{
          pathname: "/contacts/[id]",
          query: { id: id },
        }}>
        <a className="rounded-md text-white bg-green-600 transition duration-300 ease-in-out hover:bg-green-700 px-4 py-2 font-bold mb-4 sm:mb-0">
          See details
        </a>
      </Link>
      <button
        onClick={handleDelete}
        className="flex items-center gap-x-2 rounded-md bg-red-500 font-bold px-4 py-2 transition duration-300 ease-in-out hover:bg-red-700">
        <span>Delete</span>
        <span>
          <TrashIcon className="w-5 h-5" />
        </span>
      </button>
    </div>
  );
};

export default ContactCardButton;
