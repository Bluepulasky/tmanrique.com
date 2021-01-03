import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./index.scss";

export default function ImageComponent(props) {
  const { image, title, linktarget } = props;

  return (
    <div className="image-container">
      <Link to={linktarget}>
        <img src={image} alt="" />
      </Link>
      <div className="title-container">{title}</div>
    </div>
  );
}

ImageComponent.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  linktarget: PropTypes.string,
};
