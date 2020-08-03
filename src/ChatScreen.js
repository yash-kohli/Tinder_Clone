import React, { useState } from "react";
import "./ChatScreen.css";
import { Avatar } from "@material-ui/core";
function ChatScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Halsey",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Halsey_2019_by_Glenn_Francis_%28cropped%29_2.jpg/1200px-Halsey_2019_by_Glenn_Francis_%28cropped%29_2.jpg",
      message: "hello",
    },
    {
      name: "Halsey",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Halsey_2019_by_Glenn_Francis_%28cropped%29_2.jpg/1200px-Halsey_2019_by_Glenn_Francis_%28cropped%29_2.jpg",
      message: "yo yo whats up",
    },
    {
      message: "hiiii,how are you??",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };
  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        You Matched with halsey on 10/10/20
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image__user"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}
      <form className="chatScreen__input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chatScreen__inputField"
          type="text"
          placeholder="Type a message..."
        />
        <button
          onClick={handleSend}
          type="submit"
          className="chatScreen__inputButton"
        >
          SEND
        </button>
      </form>
    </div>
  );
}
export default ChatScreen;
