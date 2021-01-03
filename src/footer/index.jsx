import React from "react";
import "./index.scss";

import instagramSvg from "../assets/svgs/instagram.svg";
import upwkSvg from "../assets/svgs/upwork.svg";
import behanceSvg from "../assets/svgs/behance.svg";

export default function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footer-container_left">
        <p>
          Get in touch
          <br />
          <a href="https://wa.me/34651157140" target="_blank" rel="noreferrer">
            +34 651 157 140
          </a>
          <br />
          <a
            href="mailto:tomanrique200@gmail.com?subject=Mail from tmanrique.com"
            target="_blank"
            rel="noreferrer"
          >
            tomasmanrique200@gmail.com
          </a>
          <br />
          <span>Tomas Manrique&#174; | 2021 | Design by Manuel Etchegaray</span>
        </p>
      </div>
      <div className="footer-container_right">
        <a
          href="https://www.instagram.com/tomanrique/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramSvg} alt=""></img>
        </a>
        <a
          href="https://www.upwork.com/freelancers/~01dc0c7cbd9f0ea334"
          target="_blank"
          rel="noreferrer"
        >
          <img src={upwkSvg} alt=""></img>
        </a>
        <a
          href="https://www.behance.net/tomasmanrique"
          target="_blank"
          rel="noreferrer"
        >
          <img src={behanceSvg} alt=""></img>
        </a>
      </div>
    </div>
  );
}
