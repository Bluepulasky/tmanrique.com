import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./index.scss";

export default function TopNav() {
  const location = useLocation();

  return (
    <div className="top-nav">
      <div className="container_left">
        <Link  to="/">
          Tomas Manrique
        </Link>
      </div>
      <div className="container_right">
        <Link className={location.pathname === "/" ? "selected" : ""} to="/">Work</Link>
        <Link className={location.pathname === "/contact" ? "selected" : ""} to="/contact">Contact</Link>
      </div>
    </div>
  );
}
