import React from "react";
import "./chats.css";
import Chat from "./Chat";
function Chats() {
  return (
    <div className="Chats">
      <Chat
        name="Jeff Bezos"
        message="hi..."
        timestamp="40 seconds ago"
        profilePic=""
      />
      <Chat
        name="Halsey"
        message="hey! how are you :)"
        timestamp="40 minutes ago"
        profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Halsey_2019_by_Glenn_Francis_%28cropped%29_2.jpg/1200px-Halsey_2019_by_Glenn_Francis_%28cropped%29_2.jpg"
      />
      <Chat
        name="Khaleesi"
        message=" Whats up Drogo?"
        timestamp="3 minutes ago"
        profilePic="https://i.pinimg.com/originals/e1/9e/78/e19e78d2b2e10828353c47b2fc5a8d71.jpg"
      />
      <Chat
        name="Zakhir"
        message="Sakhti broo...."
        timestamp="5 minutes ago"
        profilePic="https://media.insider.in/image/upload/c_crop,g_custom/v1508826149/mrcuwvksgdusnaflqgbm.jpg"
      />
    </div>
  );
}

export default Chats;
