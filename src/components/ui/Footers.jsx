import "./Footers.css";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { SiNpm } from "react-icons/si";

export const Footers = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <SiNpm size={40} style={{ marginBottom: "10px" }} />
        <FaGithub size={40} />
      </div>

      <div className="footer-section">
        <h4>Support</h4>
        <ul>
          <li>Help</li>
          <li>Advisories</li>
      <li>Status</li>
          <li><a href="Contact">Contact</a> </li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Company</h4>
        <ul>
          <li><a href="about">About</a></li>
          <li>Blog</li>
          <li>Press</li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Terms & Policies</h4>
        <ul>
          <li>Policies</li>
          <li>Terms of Use</li>
          <li>Code of Conduct</li>
          <li>Privacy</li>
        </ul>
      </div>
    </footer>
  );
};
