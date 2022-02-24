import React from "react";

const Scroll = ({ vh, ...props }) => {
  return (
    <div style={{ overflowY: "scroll", maxHeight: `${vh}vh` }}>
      {props.children}
    </div>
  );
};

export default Scroll;
