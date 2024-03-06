import React from "react";

const Arrow = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="29"
      height="18"
      viewBox="0 0 29 18"
      fill="none"
    >
      <path d="M14.5 0L28.7894 18H0.210581L14.5 0Z" fill={color} />
    </svg>
  );
};

export default Arrow;
