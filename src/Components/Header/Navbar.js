import { React, useState } from "react";

import logo from "../../Assets/Imgs/logo.png";
import { faBars, faRectangleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className=" space-x-4 p-6 shadow-sm shadow-white mb-2  bg-gradient-to-b from-zinc-500 ">
        <div className="flex place-items-center justify-between  bg-transparent ">
          <img src={logo} alt="logo" className="h-14 w-auto rounded-xl" />

          <div className="hidden md:flex gap-8 bg-transparent">
            {[
              ["Home", "/dashboard"],
              ["Team", "/team"],
              ["Projects", "/projects"],
              ["Reports", "/reports"],
            ].map(([title, url]) => (
              <a
                key={url}
                href={url}
                className="rounded-lg px-3 py-2 text-white transition-all duration-500 hover:bg-orange-500 hover:text-black "
              >
                {title}
              </a>
            ))}
          </div>
          <div className="md:hidden bg-transparent text-xl">
            <button onClick={toggleNavBar}>
              {isOpen ? (
                <FontAwesomeIcon
                  icon={faRectangleXmark}
                  className="text-white bg-transparent"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faBars}
                  className="text-white bg-transparent"
                />
              )}
            </button>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="flex flex-col items-center">
          {[
            ["Home", "/dashboard"],
            ["Team", "/team"],
            ["Projects", "/projects"],
            ["Reports", "/reports"],
          ].map(([title, url]) => (
            <a
              href={url}
              className="rounded-lg px-3 py-2 text-white transition-all duration-500 hover:bg-orange-500 hover:text-black"
            >
              {title}
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
