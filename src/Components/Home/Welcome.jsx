import React from "react";
import Img from "./Facebook_Messenger_logo.png"
export const Welcome = () => {
  return (
    <div className="welcome flex justify-center items-center p-2">
      <div className="welcome-inner items-end flex-wrap flex gap-2">
      <p className="welcome-text py-8 px-4">
        Welcome messager Please open account click Registration button . Alias odit
        aliquid assumenda explicabo qui enim iste voluptates exercitationem ea
        libero iusto esse suscipit cumque nihil et perferendis, inventore
        perspiciatis! 
      </p>
      <span className="welcomeLogo "><img src={Img} alt="" /></span>
      </div>
    </div>
  );
};
