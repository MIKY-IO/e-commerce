import React from "react";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineSkype,
  AiOutlineMail,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2023 | MIKY.IO | All rights reserverd</p>
      <p className="icons">
        <AiFillInstagram />
        <AiFillLinkedin />
        <AiOutlineSkype />
        <AiOutlineMail />
      </p>
    </div>
  );
};

export default Footer;
