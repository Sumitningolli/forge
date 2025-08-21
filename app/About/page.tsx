"use client";
import React, { useState } from "react";
import { PiBracketsCurlyBold } from "react-icons/pi";
import { GiTransportationRings, GiTriorb } from "react-icons/gi";
import { FaRibbon } from "react-icons/fa";
import { motion } from "framer-motion";

const AboutPage = () => {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  const defaultImage = "/images/Default.png"; // 

  const rows = [
    {
      id: 1,
      label: "Custom Brackets",
      icon: <PiBracketsCurlyBold />,
      img: "/images/Custom.png",
    },
    {
      id: 2,
      label: "Steel Adapters",
      icon: <GiTransportationRings />,
      img: "/images/Steel.png",
    },
    {
      id: 3,
      label: "Motor Mounts",
      icon: <GiTriorb />,
      img: "/images/Motor.png",
    },
    {
      id: 4,
      label: "Enclosures",
      icon: <FaRibbon />,
      img: "/images/Enclousers.png",
    },
  ];

  return (
    <motion.div 
    className="pt-20  p-5 flex flex-col lg:flex lg:flex-row lg:justify-between"
    initial={{
      opacity:0.5
    }}
    whileInView={{
      opacity:1,
      scale:0.95,
      transition:{
        duration:1
      }
    }}
    viewport={{
      margin:"-200px"
    }}
    >
      {/* For large screen left */}
      <div className="lg:w-[50%] flex flex-col gap-5 md:gap-10">
        {/* button */}
        <div>
          <button className="bg-[#1c45d3] rounded-md px-2 py-1 text-white text-sm">
            About
          </button>
        </div>

        {/* text section */}
        <div>
          <h1 className="text-3xl md:text-6xl font-bold">Revolutionizing</h1>
          <h1 className="text-3xl md:text-6xl font-bold">Manufacturing with</h1>
          <h1 className="text-3xl md:text-6xl font-bold">
            Speed and <span className="text-[#7d899f]">Precision</span>
          </h1>
        </div>

        {/* table */}
        <table className=" text-black font-bold w-full">
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.id}
                className="border-t-2 border-gray-200 cursor-pointer hover:text-blue-700 transition"
                onMouseEnter={() => setHoveredRow(row.id)}
                onMouseLeave={() => setHoveredRow(null)}
              >
                <td className="px-2 py-2 w-12">
                  {String(row.id).padStart(2, "0")}.
                </td>
                <td className="px-2 py-2">{row.label}</td>
                <td className="px-2 py-2">{row.icon}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* photo preview */}
        <div className="mt-5 md:m-0">
          <img
            src={
              hoveredRow
                ? rows.find((r) => r.id === hoveredRow)?.img
                : defaultImage
            }
            alt="preview"
            className="w-full h-[150px]  object-cover transition-opacity duration-300"
          />
        </div>
      </div>

      {/* about section // For large screen right side  */}
      <div className="bg-gray-100 p-1 sm:w-full md:mt-1  lg:w-[30%] md:mr-10 md:p-4 lg:mt-10 ">
        <div className="flex">
          <img
            className="w-[80px] h-[80px] object-contain rounded-xl p-2"
            src="/images/person.jpg"
            alt=""
          />
          <div className="flex flex-col pl-5 justify-center">
            <h1 className="font-semibold">Ayrton Senna</h1>
            <p className="text-gray-600">CEO & Senior Partner at Forge</p>
          </div>
        </div>
        <div
          className="py-5 text-[14px]"
          style={{ fontFamily: "var(--font-poppins)", fontWeight: 10 }}
        >
          <p>
            Ayrton Senna is a visionary leader with a proven track record of
            driving innovation and building sustainable growth strategies in
            competitive markets. With years of experience in business
            leadership, he has successfully led Forge into becoming a trusted
            name in the industry.His commitment to excellence inspires the
            entire team to push boundaries and deliver outstanding results.
            Ayrton’s forward-thinking approach ensures Forge remains at the
            forefront of manufacturing innovation.
          </p>
         <p className="pt-5 hidden md:hidden lg:block">
            As the CEO & Senior Partner, Ayrton continues to shape Forge’s
            long-term vision by exploring emerging trends, forging strategic
            partnerships, and creating solutions that address modern business
            challenges. Beyond his professional achievements, he is recognized
            for his mentorship, dedication to ethical practices.
          </p>
         
        </div>
        <div className="w-[200px] text-sm text-gray-500 ">
          <p>Every Details Matters-At Forge, we believe that excellence.</p>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
