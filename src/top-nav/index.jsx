import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

export default function TopNav() {
  return <div className="top-nav">
    <div className="title" />
    <Link to="/" >Work</Link>
    <Link to="/contact" >Contact</Link>
  </div>;
}
