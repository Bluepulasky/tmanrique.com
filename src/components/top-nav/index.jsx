import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./index.scss";

export default function TopNav() {
  const [showTopNav, setShowTopNav] = useState(false);

  const location = useLocation();

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY < 500) {
        setShowTopNav(false);
      } else {
        setShowTopNav(true);
      }
    };
  }, []);

  return (
    <div
      className="top-nav"
      style={showTopNav ? { height: "48px" } : { height: "120px" }}
    >
      <div className="top-nav-container_left">
        <Link to="/">Tomas Manrique</Link>
      </div>
      <div className="top-nav-container_right">
        <Link className={location.pathname === "/" ? "selected" : ""} to="/">
          Work
        </Link>
        <a href="/#footer">Contact</a>
      </div>
    </div>
  );
}
