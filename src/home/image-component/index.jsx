import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

export default function ImageComponent(props) {
  const { image, title } = props;

  return (
    <div className="image-container">
      <img src={image} alt="" />
      <div className="title-container">{title}</div>
    </div>
  );
}

ImageComponent.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
};
