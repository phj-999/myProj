import React from "react";
// import * as THREE from "three";
import { Html } from "@react-three/drei";

const HtmlModel = (props) => {
  const { children } = props;
  return (
    <Html {...props}>
      <div
        className="cursor-pointer 
        rounded-2xl outline-none border-none 
        text-base font-bold text-pink-900
        bg-indigo-400 py-0.5 px-2.5 tracking-wide 
        flex justify-center items-center 
        gap-5px"
      >
        {children}
      </div>
    </Html>
  );
};

export default HtmlModel;
