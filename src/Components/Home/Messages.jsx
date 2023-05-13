import React, { useContext, useState } from "react";
import { Input } from "./Input";
import { ContextProvider } from "../../Context/ContextProvider";

export const Messages = () => {
  let { allMsg, user } = useContext(ContextProvider);
  return (
    <div className="messages fixed left-0 right-0 top-0 bg-white flex flex-col-reverse p-4 overflow-y-scroll pb-32">
      {allMsg.map((message) =>
        message.email === user.email ? (
          <div
            className="messages_my flex justify-end w-full my-2 "
            key={message.id}
          >
            <div className="messages_my-p">
              <p className="inline-block p-2 px-4  text-sm text-white rounded-3xl">
                {message.msg}
              </p>
            </div>
          </div>
        ) : (
          <div className="messages_other flex mt-4" key={message.id}>
            <div className="messages_other-img rounded-full overflow-hidden">
              <img
                src={message.photo}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="messages_other-msg w-full ml-3">
              <span className="block">{message.name}</span>
              <p className="inline-block p-2 text-sm rounded-3xl px-4 mt-2">
                {message.msg}
              </p>
            </div>
          </div>
        )
      )}

      <Input />
    </div>
  );
};
