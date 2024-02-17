import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import io from "socket.io-client";

import CurrentUsers from "../CurrentUsers";
import Messages from "../Messages/Messages";
import { MdAdjust, MdClose } from "react-icons/md";
import { IoSend } from "react-icons/io5";

import "./index.css";

const socket = io.connect("https://deno-project.onrender.com/");

const Chat = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const name = searchParams.get("name");
    const room = searchParams.get("room");
    // socket = io.connect(ENDPOINT);

    setRoom(room);
    setName(name);

    socket.emit("join", { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });
  }, [searchParams]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  const renderActiveRoomSection = (room) => {
    return (
      <div className="room-info-bar">
        <div className="room-container">
          <MdAdjust />
          <p className="room-name">{room}</p>
        </div>
        <div className="room-close-container">
          <a href="/">
            <MdClose className="room-close-icon" />
          </a>
        </div>
      </div>
    );
  };

  return (
    <div className="chat-app-container">
      <div className="chat-left-container">
        {renderActiveRoomSection(room)}
        <Messages messages={messages} name={name} />
        <form className="form">
          <input
            className="text-input"
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={({ target: { value } }) => setMessage(value)}
            onKeyPress={(event) =>
              event.key === "Enter" ? sendMessage(event) : null
            }
          />
          <button className="send-button" onClick={(e) => sendMessage(e)}>
            <IoSend />
          </button>
        </form>
        {/* <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        /> */}
      </div>
      <CurrentUsers className="chat-right-container" users={users} />
    </div>
  );
};

export default Chat;
