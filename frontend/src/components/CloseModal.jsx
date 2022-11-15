import { XMarkIcon } from "@heroicons/react/24/solid";
import React from "react";

const CloseModal = ({ setModal }) => {
  const HandleClose = () => {
    setModal((prevState) => (prevState = false));
  };

  return (
    <button
      onClick={HandleClose}
      className="absolute top-4 right-4">
      <XMarkIcon className="w-8 h-8 text-red-500 font-bold hover:text-red-600" />
    </button>
  );
};

export { CloseModal };
