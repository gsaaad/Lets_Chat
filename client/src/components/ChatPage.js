import React, { useState, useEffect, useRef } from "react";
import ChatBar from "./ChatBar";
import ChatBody from "./ChartBody";
import ChatFooter from "./ChatFooter";

// prop drilling socket(user.id) to footer!
const ChatPage = ({ socket }) => {
  const [typingStatus, setTypingStatus] = useState("");
  const lastMessageRef = useRef(null);

  // chat messages
  const [chatMessages, setChatMessages] = useState([]);
  // use effect, function, on message response from server, data, useState set chat messages
  useEffect(() => {
    socket.on("messageResponse", (data) => {
      setChatMessages([...chatMessages, data], [socket, chatMessages]);
    });
  });
  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);
  return (
    <div className="chat">
      {/* <p>ChatBAR</p> */}
      <ChatBar socket={socket} />

      <div className="chat__main">
        {/* <p>MAIN CHAT</p> */}
        <ChatBody
          socket={socket}
          chatMessages={chatMessages}
          lastMessageRef={lastMessageRef}
        />
        <ChatFooter socket={socket} />
      </div>
    </div>
  );
};
export default ChatPage;
