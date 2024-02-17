import React from "react";

import { MdAccountCircle } from "react-icons/md";

import "./index.css";

const CurrentUsers = ({ users }) => (
  <div className="text-container">
    {users ? (
      <div>
        <p className="online-text">Online Users:</p>
        <div className="active-container">
          {users.map(({ name }) => (
            <div key={name} className="active-item">
              <MdAccountCircle className="active-name-icon" />
              <p className="names">{name}</p>
            </div>
          ))}
        </div>
      </div>
    ) : null}
  </div>
);

export default CurrentUsers;
