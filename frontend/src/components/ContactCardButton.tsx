"use client";

import React, { MouseEventHandler, useState } from "react";
import { TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { getCookie } from "cookies-next";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useToast } from "@chakra-ui/react";

type IdContact = {
  id: string;
};

const ContactCardButton = ({ id }: IdContact) => {
  const [loading, setLoading] = useState<boolean | undefined>(undefined);
  const [isError, setIsError] = useState<boolean | undefined>(undefined);
  const router = useRouter();
  const toast = useToast();

  const handleDeleteContact = async (id: string) => {
    const cookieToken = getCookie("token");

    const res = await axios.delete(
      `${process.env.NEXT_PUBLIC_API}/contacts/${id}`,
      {
        headers: {
          Authorization: `Bearer ${cookieToken}`,
        },
      }
    );

    if (res.status === 200) {
      setIsError(false);
      router.refresh();
    } else {
      setIsError(true);
      router.refresh();
    }
  };

  const handleToast = (error: boolean | undefined) => {
    !error
      ? toast({
          title: "Contact Deleted",
          description: `Contact removed successfully!`,
          duration: 5000,
          isClosable: true,
          position: "top",
          variant: "solid",
          status: "success",
        })
      : toast({
          title: "Error",
          description: `Unexpected error while deleting the contact. Please try again later!`,
          duration: 5000,
          isClosable: true,
          position: "top",
          variant: "solid",
          status: "error",
        });
  };

  const handleDelete: MouseEventHandler<HTMLButtonElement> = async () => {
    await handleDeleteContact(id);
    handleToast(isError);
  };

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-4">
      <button
        disabled
        className="rounded-md cursor-not-allowed text-white bg-green-600 transition duration-300 ease-in-out hover:bg-green-700 px-4 py-2 font-bold mb-4 sm:mb-0">
        <p className="flex items-center gap-x-2">
          <span>Edit</span> <PencilSquareIcon className="w-5 h-5" />
        </p>
      </button>

      <button
        onClick={handleDelete}
        className="rounded-md bg-red-500 font-bold px-4 py-2 transition duration-300 ease-in-out hover:bg-red-700">
        <p className="flex items-center gap-x-2">
          <span>Delete</span>
          <TrashIcon className="w-5 h-5" />
        </p>
      </button>
    </div>
  );
};

export default ContactCardButton;
