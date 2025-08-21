import React from "react";
import { FaAngleRight, FaArrowRight } from "react-icons/fa";

const PortfolioPage = () => {
  const projects = [
    { name: "Electric Bicycle", category: "Motor Mounts" },
    { name: "Prefab Home", category: "Metal Components", active: true },
    { name: "Mechanical Watch", category: "Spacer Rings" },
    { name: "3D Printer", category: "Threaded Adapters" },
    { name: "Drone", category: "Custom Brackets" },
    { name: "Motorcycle", category: "Gear Components" },
    { name: "Robotic Arm", category: "Shafts" },
    { name: "Electric Skateboard", category: "Bushings" },
    { name: "CNC Router", category: "Couplings" },
    { name: "Wind Turbine", category: "Rotor Hubs" },
    { name: "Smartphone Gimbal", category: "Stabilizer Mounts" },
    { name: "Satellite Dish", category: "Support Frames" },
    { name: "Hydraulic Press", category: "Piston Components" },
    { name: "Industrial Robot", category: "Joint Couplers" },
    { name: "Electric Car", category: "Battery Casings" },
    { name: "Medical Scanner", category: "Precision Guides" },
    { name: "Space Rover", category: "Chassis Parts" },
    { name: "Agricultural Drone", category: "Propeller Mounts" },
    { name: "3D Scanner", category: "Calibration Fixtures" },
  ];

  return (
    <section className="bg-black text-white py-20 px-10">
      {/* Portfolio Button */}
      <button className="bg-blue-600 text-sm px-3 py-1 rounded-md mb-6 w-fit">
        Portfolio
      </button>

      {/* Heading */}
      <h1 className="text-4xl font-bold leading-snug mb-10">
        Check Our <br />
        Latest <span className="italic text-gray-400">Works</span>
      </h1>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left Image */}
        <div className="flex items-start">
          <img
            src="/images/portfolio-img.png"
            alt="Prefab Home"
            className="rounded-md  h-[350px] object-contain"
          />
        </div>

        {/* Right Project List */}
        <div>
          <ul className="space-y-4">
            {projects.map((project, index) => (
              <li
                key={index}
                className="flex justify-between items-center border-b border-gray-700 pb-2 text-gray-400"
              >
                <div className="flex items-center gap-2">
                  <span>{project.name}</span>
                </div>
                <span className="text-xs uppercase tracking-wider text-gray-500">
                  {project.category}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className=" text-white px-5 py-10 flex flex-col items-center">
        {/* Small Heading */}
        <p className="text-sm text-gray-400 mb-2">More in the vault...</p>
        <p className="text-sm text-gray-400 mb-6">Take a look.</p>

        {/* Button */}
        <button className="flex items-center justify-between w-full md:w-1/2 lg:w-1/3 border bg-white text-black border-gray-700 px-5 py-3 rounded-md hover:bg-gray-300 transition">
          <span className="flex items-center gap-2 text-sm font-medium">
            <FaArrowRight className="text-gray-400" />
            SEE MORE
          </span>   
        </button>
      </div>
    </section>
  );
};

export default PortfolioPage;
