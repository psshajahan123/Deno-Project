import React from "react";

import { MdAccountCircle } from "react-icons/md";

import "./index.css";

const CurrentUsers = ({ users }) => (
  <div className="textContainer">
    <div>
      <h1>Chat Application</h1>
    </div>
    {users ? (
      <div>
        <h1>People currently chatting:</h1>
        <div className="activeContainer">
          {users.map(({ name }) => (
            <div key={name} className="activeItem">
              {name}
              <MdAccountCircle />
            </div>
          ))}
        </div>
      </div>
    ) : null}
  </div>
);

export default CurrentUsers;
