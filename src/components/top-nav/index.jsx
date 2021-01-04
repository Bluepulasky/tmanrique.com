import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./index.scss";

export default function TopNav() {
  const [showTopNav, setShowTopNav] = useState(false);

  const location = useLocation();
  const scrollToRef = (linkref) =>
    window.scrollTo(0, linkref.current.offsetTop);

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY < 500) {
        setShowTopNav(false);
      } else {
        setShowTopNav(true);
      }
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (location.hash == "#" + id) {
        scrollToRef();
      }
    }, 500);
  }, [id, linkRef, location]);

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
        <Link to={scrollToRef("#footer")}>Contact</Link>
      </div>
    </div>
  );
}
