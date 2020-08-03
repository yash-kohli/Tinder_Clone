import React, { useState } from "react";

function ChatScreen() {
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
      message: "hiiii",
    },
  ]);
  return (
    <div className="chatScreen">
      <p>You Matched with halsey on 10/10/20</p>
      {messages.map((message) => (
        <div>
          <p>{message.message}</p>
        </div>
      ))}
    </div>
  );
}
export default ChatScreen;
