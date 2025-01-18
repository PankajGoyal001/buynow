import React, { useState } from "react";

const Footer = () => {
  const [rotate, setRotate] = useState(true);

  return (
    <>
      <div className="">
        <button onClick={() => setRotate(!rotate)}>
          {rotate ? "pankaj" : "babbl"}
        </button>
      </div>
    </>
  );
};

export default Footer;
