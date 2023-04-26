"use client";

import React, { MouseEventHandler } from "react";
import { TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { getCookie } from "cookies-next";
// import { useContact } from "@/hooks/useContact";

type IDeleteContact = {
  id: string;
};

const ContactCardButton = ({ id }: IDeleteContact) => {
  // const { dispatch } = useContact();

  const handleDelete: MouseEventHandler<HTMLButtonElement> = async () => {
    // const cookie = getCookie("token");
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/contacts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${cookie.toString()}`,
      },
    });

    const json: Array<IDeleteContact> = await res.json();
  };

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-4">
      <button
        disabled
        className="rounded-md cursor-not-allowed text-white bg-green-600 transition duration-300 ease-in-out hover:bg-green-700 px-4 py-2 font-bold mb-4 sm:mb-0">
        Edit contact
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
