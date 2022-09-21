import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import socketIO from "socket.io-client";
// connection to server
const socket = socketIO.connect("http://localhost:3001");

function App() {
  return (
    <BrowserRouter>
      <div>
        <p>Hello World!</p>
        <Routes>
          <Route path="/" element={<Home socket={socket} />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
