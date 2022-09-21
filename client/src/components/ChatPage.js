import React from "react";
import ChatBar from "./ChatBar";
import ChatBody from "./ChartBody";
const ChatPage = ({ socket }) => {
  return (
    <div className="chat">
      <p>ChatBAR</p>
      <ChatBar />

      <div className="chat__main">
        MAIN CHAT
        <ChatBody />
      </div>
    </div>
  );
};
export default ChatPage;
