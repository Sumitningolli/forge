"use client";
import React from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { Model } from "../Model/page";
import * as THREE from "three";
// @ts-ignore
import { EXRLoader } from "three/examples/jsm/loaders/EXRLoader";
import { FaLongArrowAltRight } from "react-icons/fa";
import { GiFlowerStar } from "react-icons/gi";



function HDRBackground() {
  const texture = useLoader(EXRLoader, "/forest.exr");
  texture.mapping = THREE.EquirectangularReflectionMapping;

  return (
    <>
      <primitive attach="background" object={texture} />
      <primitive attach="environment" object={texture} />
    </>
  );
}

const HeroSection = () => {
  return (
    <div className="relative flex flex-col items-center justify-center text-center pt-15 h-[100vh] w-full">
      {/* 3D Model Section */}
      <div className="flex justify-center items-center w-full h-[100vh] overflow-hidden shadow-lg">
        <Canvas camera={{ position: [3, 2, 5], fov: 45 }}>
          {/* HDRI Background + Environment */}
          <HDRBackground />

          {/* Lights */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />

          {/* Controls + Model */}
          <OrbitControls enableZoom={true} />
          <Model scale={0.6} />
        </Canvas>
      </div>

      {/* Overlayed Heading Text */}
      <div
        style={{ fontFamily: "var(--font-poppins)", fontWeight: 900 }}
        className="absolute top-20 left-1/2 -translate-x-1/2 text-center"
      >
        <h1 className="text-black text-4xl md:text-5xl font-bold drop-shadow-lg pt-2 text-center">
          Precision <span className="text-blue-500">CNC</span> Parts
        </h1>
        <p className="text-black text-xl md:text-2xl font-semibold drop-shadow-md text-center mt-2">
          Shipped as Fast as Tomorrow
        </p>
      </div>

      {/* Bottom Section */}
      <div className="absolute bottom-5  flex flex-col justify-between items-center w-[300px] px-6">
        <p className="text-black text-sm pb-2">
          Upload your CAD file, and we’ll take care of machining, finishing, and
          shipping — accurate parts delivered fast, no stress.
        </p>
        <button className="flex items-center gap-2 px-3 py-1 text-white text-xs rounded-sm bg-blue-700 hover:bg-blue-900">
          <FaLongArrowAltRight />
          Upload Your Design
          <span className="bg-gray-300 rounded-2xl p-0.5 text-gray-800">
            <GiFlowerStar />
          </span>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
