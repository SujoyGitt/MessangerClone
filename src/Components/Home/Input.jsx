import React, { useContext } from "react";
import { useState } from "react";
import { ContextProvider } from "../../Context/ContextProvider";
export const Input = () => {
  const { sendMessage } = useContext(ContextProvider);
  const [message, setmessage] = useState("");
  let sendMsg = (e) => {
    e.preventDefault();
    sendMessage(message);
    setmessage("")
  };
  return (
    <div className="input-form fixed right-0 bottom-0 left-0">
      <form action="" onSubmit={sendMsg}>
        <input
          type="text"
          name=""
          className="input_control w-full h-14 px-2"
          placeholder="Write a Message..."
          onChange={(e) => setmessage(e.target.value)}
          value={message}
          required
        />
        <button className="py-2 px-3 bg-themeblue text-white absolute right-2 top-2 md:hidden">send</button>
      </form>
    </div>
  );
};
