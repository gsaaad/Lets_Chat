import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  const handleSubmit = (e) => {
    // set username in localstorage, and go to chat component
    e.preventDefault();
    localStorage.setItem("userName", userName);
    navigate("/chat");
  };

  return (
    <form onSubmit={handleSubmit} className="home__container">
      <h2 className="home__header">Sign in to open chat!</h2>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        minLength={5}
        name="username"
        id="username"
        className="username_input"
        value={userName}
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <button className="home__cta">SIGN IN</button>
    </form>
  );
};
export default Home;
