import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

export default function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footer-container_left">
        <p>
          Get in touch
          <br />
          <Link to="https://wa.me/34651157140">+34 651 157 140</Link>
          <br />
          <Link to="mailto:tomanrique200@gmail.com?subject=Mail from tmanrique.com">
            tomasmanrique200@gmail.com
          </Link>
          <br />
          <span>Tomas Manrique&#174; | 2021 | Design by Manuel Etchegaray</span>
        </p>
      </div>
      <div className="footer-container_right">
        <Link to="https://www.instagram.com/tomanrique/">
          <img src="./assets/svgs/instagram.svg" alt=""></img>
        </Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}
