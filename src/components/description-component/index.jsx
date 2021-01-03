import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

export default function DescriptionComponent(props) {
  const { children } = props;

  return (
    <div className="description-container">
      <div className="description">{children}</div>
    </div>
  );
}

DescriptionComponent.propTypes = {
  children: PropTypes.element,
};
