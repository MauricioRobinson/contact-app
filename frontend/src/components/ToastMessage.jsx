import {
  CheckBadgeIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/solid";
import React from "react";

const ToastMessage = ({ message, success, error }) => {
  return (
    <div className="flex items-center mt-4">
      <span>
        {success ? (
          <CheckBadgeIcon className="text-green-600 w-4 h-4 mr-2" />
        ) : (
          <ExclamationTriangleIcon className="text-red-600 w-4 h-4 mr-2" />
        )}
      </span>
      <span
        className={`font-semibold tracking-wide ${
          success ? "text-green-600" : ""
        } ${error ? "text-red-600" : ""}`}>
        {message}
      </span>
    </div>
  );
};

export { ToastMessage };
