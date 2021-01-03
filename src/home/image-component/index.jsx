import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

export default function ImageComponent(props) {
  const { image, title, linktarget } = props;

  return (
    <div className="image-container">
      <a href={linktarget}>
        <img src={image} alt="" />
      </a>
      <div className="title-container">{title}</div>
    </div>
  );
}

ImageComponent.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  linktarget: PropTypes.string,
};
