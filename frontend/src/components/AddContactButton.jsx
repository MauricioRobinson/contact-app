import { PlusIcon } from "@heroicons/react/24/solid";
import React, { useEffect } from "react";

const AddContactButton = ({ setModal }) => {
  const HandleModal = () => {
    setModal((prevState) => (prevState = true));
  };

  return (
    <div className="fixed right-4 bottom-4">
      <button
        onClick={HandleModal}
        className="w-16 h-16 bg-blue-600 flex justify-center items-center cursor-pointer p-2 transition duration-500 ease-in-out hover:bg-blue-700 hover:ring hover:ring-offset-1 hover:ring-offset-blue-600 text-2xl font-bold rounded-full ">
        <span>
          <PlusIcon className="w-8 h-8" />
        </span>
      </button>
    </div>
  );
};

export { AddContactButton };
