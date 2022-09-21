import React from "react";
import { useNavigate } from "react-router-dom";

const ChatBody = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* <div>Chart Body</div>; */}
      <header className="chat__mainHeader">
        <p>Chat with friends~</p>
        <button className="leaveChat__btn"> LEAVE CHAT</button>
      </header>
      {/* receiving */}
      <div className="message__container">
        <div className="message_chats">
          <p className="sender__name">You</p>
          <div className="message__sender">
            <p>Hello There~!</p>
          </div>
        </div>
        {/* sending */}
        <div className="message__chats">
          <p>Other</p>
          <div className="message__recipient">
            <p>Hey, Im Good, How's it going?</p>
          </div>
        </div>
        {/* when a user is typing */}
        <div className="message_status">
          <p>User is typing...</p>
        </div>
      </div>
    </>
  );
};
export default ChatBody;
