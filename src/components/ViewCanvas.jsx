"use client";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { View } from "@react-three/drei";

const ViewCanvas = () => {
  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: "50%",
        transform: "translate(-50%)",
        // overflow: "hidden",
        // pointerEvents: "none",
        zIndex: 30,
      }}
      shadows
      dpr={[1, 1.5]}
      gl={{ antialias: true }}
      camera={{
        fov: 35,
      }}
    >
      <View.Port />
    </Canvas>
  );
};

export default ViewCanvas;
