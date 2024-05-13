/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import "./chat.scss";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";
import { format } from "timeago.js";
import { SocketContext } from "../../context/SocketContext";

const Chat = ({ chats }) => {
  const [chat, setchat] = useState(null);
  const { currentUser } = useContext(AuthContext);
  const { socket } = useContext(SocketContext);

  const handleOpenChat = async (id, reciever) => {
    try {
      const res = await apiRequest("/chats/" + id);
      setchat({ ...res.data, reciever });
    } catch (err) {
      console.log(err);
    }
  };
  console.log(chats);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const text = formData.get("text");

    if (!text) return;
    try {
      const res = await apiRequest.post("/messages/" + chat.id, { text });
      setchat((prev) => ({ ...prev, messages: [...prev.messages, res.data] }));
      e.target.reset();
      socket.emit("sendMessage", {
        recieverId: chat.reciever.Id,
        data: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const read = async () => {
      try {
        await apiRequest.put("/chats/read/" + chat.id);
      } catch (err) {
        console.log(err);
      }
    };

    if ((chat, socket)) {
      socket.on("getMessage", (data) => {
        if (chat.id === data.chatId) {
          setchat((prev) => ({ ...prev, messages: [...prev.messages, data] }));
          read();
        }
      });
    }
  }, [chat, socket]);

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
                  ? "lightgrey"
                  : "#143aa2d6",
              color: "black",
            }}
            onClick={() => handleOpenChat(c.id, c.reciever)}
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
              <img src={chat.reciever.avatar || "./noavatar.jpeg"} alt="" />
              {chat.reciever.username}
            </div>
            <span className="close" onClick={() => setchat(null)}>
              X
            </span>
          </div>
          <div className="center">
            {chat.messages.map((message) => (
              <div
                className="chatMessage"
                style={{
                  alignSelf:
                    message.userId === currentUser.id
                      ? "flex-end"
                      : "flex-start",
                  textAlign:
                    message.userId === currentUser.id ? "right" : "left",
                }}
                key={message.id}
              >
                <p>{message.text}</p>
                <span>{format(message.createdAt)}</span>
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="bottom">
            <textarea name="text"></textarea>
            <button>Send</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chat;
