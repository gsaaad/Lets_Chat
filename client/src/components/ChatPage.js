import React from "react";
import ChatBar from "./ChatBar";
import ChatBody from "./ChartBody";
import ChatFooter from "./ChatFooter";

// prop drilling socket(user.id) to footer!
const ChatPage = ({ socket }) => {
  return (
    <div className="chat">
      {/* <p>ChatBAR</p> */}
      <ChatBar />

      <div className="chat__main">
        {/* <p>MAIN CHAT</p> */}
        <ChatBody />
        <ChatFooter socket={socket} />
      </div>
    </div>
  );
};
export default ChatPage;
