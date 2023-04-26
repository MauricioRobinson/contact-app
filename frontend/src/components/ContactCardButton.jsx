import { TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
import { getCookie } from "cookies-next";
import { useContact } from "@/hooks/useContact";

const ContactCardButton = ({ id }) => {
  const { dispatch } = useContact();

  const handleDelete = async () => {
    const cookie = getCookie("token");
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/contacts/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cookie.toString()}`,
        },
      }
    );

    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_CONTACT", payload: json });
    }
  };

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-4">
      <button
        disabled
        className="rounded-md cursor-not-allowed text-white bg-green-600 transition duration-300 ease-in-out hover:bg-green-700 px-4 py-2 font-bold mb-4 sm:mb-0">
        See details
      </button>

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
