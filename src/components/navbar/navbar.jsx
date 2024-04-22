import React from "react";
import "./navbar.scss";

export default function Navbar() {
  return (
    <nav>
      <div className="leftside">
        <a href="./" className="logo">
          <img src="./logo.png" alt="" />
          <span>GoatState</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agent</a>
      </div>
      <div className="rightside">
        <a href="/">Sign in</a>

        <a href="/" className="signUp">
          Sign up
        </a>
      </div>
    </nav>
  );
}
