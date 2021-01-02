import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

export default function TopNav() {
  return <div className="top-nav">
          <div className="container_left" />
              <Link to="/" >Tomas Manrique</Link>
          <div className="container_middle" />
          <div className="container_right" />
              <Link to="/" >Work</Link>
              <Link to="/contact" >Contact</Link>
          </div>
}
