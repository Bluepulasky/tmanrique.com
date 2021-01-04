import React, { useRef } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import "./index.scss";
import useScrollOnHash from "../../hooks/useScrollOnHash";

export default function ImageComponent(props) {
  const { image, title, linktarget } = props;

  const history = useHistory();

  const divRef = useRef(null);
  useScrollOnHash(divRef, title);

  return (
    <div ref={divRef} className="image-container">
      <div
        className="image"
        onClick={() => history.push(linktarget)}
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="title-container">{title}</div>
    </div>
  );
}

ImageComponent.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  linktarget: PropTypes.string,
};
