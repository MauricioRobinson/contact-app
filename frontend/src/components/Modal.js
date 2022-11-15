import React from "react";
import { createPortal } from "react-dom";

const Modal = ({ children, mounted }) => {
  return mounted
    ? createPortal(
        <div className="fixed top-0 left-0 right-0 bottom-0 w-full min-h-screen flex items-center justify-center backdrop-blur-sm bg-white/30 px-8">
          {children}
        </div>,
        document.querySelector("#modal")
      )
    : null;
};

export { Modal };
