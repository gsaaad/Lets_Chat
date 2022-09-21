import React from "react";
import ChatBar from "./ChatBar";
import ChatBody from "./ChartBody";
const ChatPage = ({ socket }) => {
  return (
    <div className="chat">
      {/* <p>ChatBAR</p> */}
      <ChatBar />

      <div className="chat__main">
        {/* <p>MAIN CHAT</p> */}
        <ChatBody />
      </div>
    </div>
  );
};
export default ChatPage;
