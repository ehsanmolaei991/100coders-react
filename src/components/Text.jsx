import React from "react";
import PropType from "prop-types";

function Text({ name }) {
  console.count("Rendering: ");

  return <h1>Some Text Here</h1>;
}

// Text.propTypes = {
//   name: PropType.string.isRequired,
// };

export default Text;
