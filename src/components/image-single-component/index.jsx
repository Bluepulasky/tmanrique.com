import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

export default function ImageSingleComponent(props) {
  const { image } = props;

  return (
    <div className="image-single-container">
      <img src={image} alt=""></img>
    </div>
  );
}

ImageSingleComponent.propTypes = {
  image: PropTypes.string,
};
