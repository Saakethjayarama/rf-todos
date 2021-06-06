import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div
      className="Footer"
      onClick={() => window.open("https://saakethjayarama.github.io/")}
    >
      &copy; Sudo Daemon
    </div>
  );
}

export default Footer;
