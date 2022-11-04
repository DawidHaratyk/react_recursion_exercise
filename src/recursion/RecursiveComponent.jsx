import React from "react";
import PropTypes from "prop-types";

function RecursiveComponent({ components, currentIndex }) {
  return currentIndex < components.length ? (
    <div className="App-box">
      <div>{components[currentIndex].name}</div>
      <RecursiveComponent
        components={components}
        currentIndex={currentIndex + 1}
      />
    </div>
  ) : null;
}

RecursiveComponent.propTypes = {
  components: PropTypes.arrayOf(PropTypes.elementType).isRequired,
  currentIndex: PropTypes.number,
};

export default RecursiveComponent;
