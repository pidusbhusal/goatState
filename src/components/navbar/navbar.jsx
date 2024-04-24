import React, { useState } from "react";
import "./navbar.scss";

export default function Navbar() {
  const [open, setOpen] = useState(false);
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

        <div className="menuicon">
          <img src="menu.png" alt="" onClick={() => setOpen((prev) => !prev)} />
        </div>
      </div>
      <div className={open ? "menu active" : "menu"}>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agent</a>
        <a href="/">Sign in</a>

        <a href="/" className="signUp">
          Sign up
        </a>
      </div>
    </nav>
  );
}
