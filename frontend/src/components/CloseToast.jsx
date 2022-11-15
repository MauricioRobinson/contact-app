import { XMarkIcon } from "@heroicons/react/24/solid";
import React from "react";

const CloseToast = ({ setToast }) => {
  const HandleClose = () => {
    setToast((prevState) => (prevState = false));
  };

  return (
    <button
      onClick={HandleClose}
      className="absolute top-2 right-2">
      <XMarkIcon className="w-4 h-4 text-red-500 font-bold hover:text-red-600" />
    </button>
  );
};

export { CloseToast };
