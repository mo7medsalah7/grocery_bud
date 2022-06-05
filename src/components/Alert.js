import React from "react";

function Alert({ type, msg, removeAlert }) {
  if (type === "success") {
    return (
      <div className="p-2 mb-2 bg-green-200 flex flex-row ">
        <p className="grow">{msg}</p>
        <button onClick={removeAlert}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 md:h-8 md:w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>
    );
  } else if (type === "danger") {
    return (
      <div className="p-2 mb-2 bg-red-200 flex flex-row ">
        <p className="grow">{msg}</p>
        <button onClick={removeAlert}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 md:h-8 md:w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>
    );
  }
}

export default Alert;
