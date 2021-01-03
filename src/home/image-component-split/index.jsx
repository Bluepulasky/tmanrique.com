import React from "react";
import PropTypes from "prop-types";
import "./index.scss";
import ImageComponent from "../image-component";

export default function ImageComponentSplit(props) {
  const {
    imageLeft,
    imageRight,
    titleLeft,
    titleRight,
    linkLeft,
    linkRight,
  } = props;

  return (
    <div className="image-container-split">
      <ImageComponent
        linktarget={linkLeft}
        image={imageLeft}
        title={titleLeft}
      />
      <ImageComponent
        linktarget={linkRight}
        image={imageRight}
        title={titleRight}
      />
    </div>
  );
}

ImageComponentSplit.propTypes = {
  imageLeft: PropTypes.string,
  imageRight: PropTypes.string,
  titleLeft: PropTypes.string,
  titleRight: PropTypes.string,
  linkLeft: PropTypes.string,
  linkRight: PropTypes.string,
};
