import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./index.scss";

export default function TopNav() {
  const location = useLocation();

  return (
    <div className="top-nav">
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