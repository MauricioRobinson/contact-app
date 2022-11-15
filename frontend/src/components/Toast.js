import React from "react";
import { createPortal } from "react-dom";

const Toast = ({ children, open }) => {
  return open
    ? createPortal(
        <div
          className={`fixed bottom-0 left-0 max-w-xs h-16 bg-slate-800 flex items-center justify-center px-4 rounded-lg ${
            open ? "animate__animated animate__backInLeft" : ""
          }`}>
          {children}
        </div>,
        document.querySelector("#toast")
      )
    : null;
};

export { Toast };
