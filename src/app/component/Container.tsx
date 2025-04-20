import React from "react";

const Container: React.FC<{ children: React.ReactNode; className?: string }> = ({ children }) => {
  return <div className={`max-w-[1320px] m-auto `}>{children}</div>;
};

export default Container;
