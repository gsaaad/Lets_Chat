import React, { useState } from "react";

const ChatFooter = ({ socket }) => {
  const [message, setMessage] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim() && localStorage.getItem("userName")) {
      socket.emit("message", {
        text: message,
        name: localStorage.getItem("userName"),
        // random socket id
        id: `${socket.id}${Math.random()}`,
        socketID: socket.id,
      });
    }
    console.log({ userName: localStorage.getItem("userName"), message });
    setMessage("");
  };

  return (
    <>
      <div>Hello Footer</div>
      <div className="chat__footer">
        <form className="form" onSubmit={handleSendMessage}>
          <input
            type="text"
            placeholder="Write Message"
            className="message"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <button className="sendBtn">Send</button>
        </form>
      </div>
    </>
  );
};

export default ChatFooter;
