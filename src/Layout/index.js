import React from "react";
import Navbar from "./Navbar";

function index(props) {
  return (
    <div className="bg-indigo-400 min-h-screen ">
      <div className="container m-auto">
        <Navbar />
        <div>{props.children}</div>
      </div>
    </div>
  );
}

export default index;
