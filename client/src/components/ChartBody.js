import React from "react";
import { useNavigate } from "react-router-dom";

const ChatBody = ({ socket, chatMessages }) => {
  const navigate = useNavigate();

  const handleLeaveChat = () => {
    // leave chat = home page, remove username
    localStorage.removeItem("userName");
    navigate("/");
    window.location.reload();
  };
  return (
    <>
      <header className="chat__mainHeader">
        <p>Chat with friends~</p>
        <button className="leaveChat__btn" onClick={handleLeaveChat}>
          LEAVE CHAT
        </button>
      </header>

      <div className="message__container">
        {/* <div className="message_chats">
          <p className="sender__name">You</p>
          <div className="message__sender">
            <p>Hello There~!</p>
          </div>
        </div>
        {/* sending 
        <div className="message__chats">
          <p>Other</p>
          <div className="message__recipient">
            <p>Hey, Im Good, How's it going?</p>
          </div>
        </div> */}
        {chatMessages.map((message) =>
          message.name === localStorage.getItem("userName") ? (
            <div className="message__chats" key={message.id}>
              <p className="sender__name">
                {message.name}, {localStorage.getItem("userName")}
              </p>
              <div className="message__sender">
                <p>{message.text}</p>
              </div>
            </div>
          ) : (
            <div className="message_chats" key={message.id}>
              <p>{message.name}</p>
              <div className="message__recipient">
                <p>{message.text}</p>
              </div>
            </div>
          )
        )}
      </div>
      {/* when a user is typing */}
      <div className="message_status">
        <p>User is typing...</p>
      </div>
    </>
  );
};
export default ChatBody;
