import React from "react";
import { PortalWithState } from "react-portal";
import ProfilePic from "./Mo-pic.png";

function Navbar() {
  // usages is a link where it displays a react portal
  // contains all stack and packages i use in the project
  const usages = [
    { id: new Date().getTime().toString(), tech: "ReactJS" },
    { id: new Date().getTime().toString(), tech: "Tailwindcss" },
    { id: new Date().getTime().toString(), tech: "React Portal" },
    { id: new Date().getTime().toString(), tech: "localStorage" },
    { id: new Date().getTime().toString(), tech: "VS Code" },
  ];
  return (
    <div className="p-5 mb-10 flex flex-col md:flex-row items-center">
      <h1 className="text-[2rem] italic text-white font-bolder grow">
        GROCERY
      </h1>

      {/* Modal to open Usages link  */}
      <PortalWithState closeOnOutsideClick closeOnEsc>
        {({ openPortal, closePortal, isOpen, portal }) => (
          <React.Fragment>
            <button
              onClick={openPortal}
              className="underline  text-[1.9rem] text-white"
            >
              Uses
            </button>
            {portal(
              <div
                className=" w-full md:w-2/5 bg-indigo-100 flex content-center p-8 flex-col"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <button className="order-first ml-auto" onClick={closePortal}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 md:h-10 md:w-10"
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
                <div className="m-auto mb-2">
                  <img
                    className="rounded-full w-[120px] h-[120px] border-8 border-solid border-red-500"
                    src={ProfilePic}
                    alt="My Profile Picture"
                  />
                </div>
                <div className="flex justify-center  mb-4">
                  <h2 className="text-xl font-bold text-center">
                    Waht i used in this project?
                  </h2>
                </div>
                <ul className="flex flex-col gap-2 justify-center items-center">
                  {usages.map((technology) => {
                    return (
                      <li key={technology.id} className="bg-white p-2">
                        * {technology.tech}
                      </li>
                    );
                  })}

                  <div>
                    <h3 className="text-xl font-bold mb-2">Notes:-</h3>
                    <p>
                      <q>
                        <i>
                          if colors indeices &gt; 10, the text color changes to
                          a lighter one.
                        </i>
                      </q>
                      <hr />
                      <p className="text-right italic my-4">
                        <q>Mohamed Salah Abdelazeem</q>
                      </p>
                    </p>
                    <div className="flex gap-2 social-media">
                      <a
                        target="_blank"
                        href="https://www.github.com/mo7medsalah7"
                        className="underline font-bold "
                      >
                        Github
                      </a>
                      <a
                        target="_blank"
                        href="https://www.linkedin.com/in/mohamad-salah-5a9451113/"
                        className="underline font-bold "
                      >
                        Linkedin
                      </a>
                    </div>
                  </div>
                </ul>
              </div>
            )}
          </React.Fragment>
        )}
      </PortalWithState>
    </div>
  );
}

export default Navbar;
