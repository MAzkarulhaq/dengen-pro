import React from "react";
import "./Password.css";
import { useState } from "react";
import discord from "./Assets/discord.png";

export const Password = ({ setUserPassword }) => {
  return (
    <div style={{ textAlign: "center" }} className="mt-5 text-white">
      <h3>Enter Password</h3>
      <br />

      <input
        type="text"
        onChange={(e) => {
          setUserPassword(e.target.value);
        }}
      />
      <br />
      <br />
      <h3>If you don't have a password, join the Discord server!</h3>
      <img
        onClick={() => window.open("https://discord.com/invite/long")}
        src={discord}
        className="img-fluid"
        width="50"
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};
