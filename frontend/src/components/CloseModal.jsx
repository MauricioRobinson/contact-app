import { XMarkIcon } from "@heroicons/react/24/solid";
import React from "react";

const CloseModal = ({ setModal }) => {
  const HandleClose = () => {
    setModal((prevState) => (prevState = false));
  };

  return (
    <button
      onClick={HandleClose}
      className="absolute top-2 right-2">
      <XMarkIcon className="w-6 h-6 text-red-500 font-bold hover:text-red-600" />
    </button>
  );
};

export { CloseModal };
