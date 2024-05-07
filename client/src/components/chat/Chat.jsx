/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import "./chat.scss";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";

const Chat = ({ chats }) => {
  const [chat, setchat] = useState(true);
  const { currentUser } = useContext(AuthContext);

  const handleOpenChat = async (id) => {
    try {
      const res = await apiRequest("/chats/" + id);
      setchat(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(chats);

  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        {chats?.map((c) => (
          <div
            className="message"
            key={c.id}
            style={{
              backgroundColor:
                c.seenBy.includes(currentUser.id) || chat?.id === c.id
                  ? "black"
                  : "#143aa2d6",
              color: "white",
            }}
            onClick={handleOpenChat}
          >
            <img src={c.reciever.avatar || "./noavatar.jpeg"} alt="" />
            <span>{c.reciever.username}</span>
            <p>{c.lastMessage}</p>
          </div>
        ))}
      </div>
      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img
                src="https://insertface.com/fb/1492/black-goku-wallpaper-face-1492179-yztb2-fb.jpg"
                alt=""
              />
              Madhur Pathak
            </div>
            <span className="close" onClick={() => setchat(null)}>
              X
            </span>
          </div>
          <div className="center">
            <div className="chatMessage">
              <p>Lorem ipsum, dolor sit amet consectetur!</p>
              <span>5 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum, dolor sit amet consectetur!</p>
              <span>5 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum, dolor sit amet consectetur!</p>
              <span>5 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum, dolor sit amet consectetur!</p>
              <span>5 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum, dolor sit amet consectetur!</p>
              <span>5 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum, dolor sit amet consectetur!</p>
              <span>5 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum, dolor sit amet consectetur!</p>
              <span>5 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum, dolor sit amet consectetur!</p>
              <span>5 hour ago</span>
            </div>
          </div>
          <div className="bottom">
            <textarea></textarea>
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
