import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineLogin } from "react-icons/md";

import "./index.css";

export default function SignIn() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="join-outer-container">
      <div className="join-inner-container">
        <h1 className="heading">Join Room <span><MdOutlineLogin className="login-sign" /></span></h1>
        <div>
          <input
            placeholder="Username"
            className="join-input"
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Room"
            className="join-input mt-20"
            type="text"
            onChange={(event) => setRoom(event.target.value)}
          />
        </div>
        <Link
          onClick={(e) => (!name || !room ? e.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className={"button mt-20"} type="submit">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
}
