import React from "react";
import "./scss/Navbar.scss";
import { ContextProvider } from "../Context/ContextProvider";
import { useState } from "react";
export const Navbar = () => {
  let { register, user, loader, logout } = React.useContext(ContextProvider);
  const userRegister = () => {
    register();
  };
  const userLogout = () => {
    logout();
    console.log("user logout");
  };
  const User = () => {
    return !loader ? (
      user ? (
        <li>
          <button
            className="bg-themeblue p-2 shadow-md outline-none"
            onClick={userLogout}
          >
            Logout
          </button>
        </li>
      ) : (
        <li>
          <button
            className="bg-themeblue p-2 shadow-md outline-none"
            onClick={userRegister}
          >
            Register With Google
          </button>
        </li>
      )
    ) : (
      "Loading..."
    );
  };
  let imgurl = user?.photoURL;
  
  return (
    <div className="navbar w-full h-16 fixed top-0 left-0 right-0 flex justify-center items-center ">
      <div className="navbar_container w-full my-0 mx-auto flex items-center  px-1 sm:p-0 text-white">
        <div className="navbar_logo flex-1">Messanger</div>
        <div className="navbar_links flex-2 sm:flex-1">
          {!user}
          <li>
            <span className="navbar_img rounded-full">
              <img
                src={imgurl}
                alt=""
                className={user ? `w-12 h-12 mr-2 rounded-full` : ""}
              />
            </span>
          </li>
          {User()}
        </div>
      </div>
    </div>
  );
};
