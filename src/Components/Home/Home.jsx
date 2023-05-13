import React, { useContext } from "react";
import { Welcome } from "./Welcome";
import { Messages } from "./Messages";
import { ContextProvider } from "../../Context/ContextProvider";
import "../scss/Home.scss"
export const Home = () => {
  const { loader, user } = React.useContext(ContextProvider);
  return !loader ? user ? <Messages /> :<Welcome/> : "Loading...";
};
