import React from "react";

const Flex = ({ children,className }:Readonly<{children: React.ReactNode; className?:string}>) => {
  return <div className={`flex ${className}`}>{children}</div>;
};

export default Flex;
