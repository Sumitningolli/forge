"use client";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";

const PopularDetails = () => {
  const products = [
    {
      name: "Spherical Joint",
      material: "Steel, Stainless Steel",
      load: "Up to 100,000 N",
      motion: "Multi DOF",
      bearingType: "Ball or Plain",
      image: "/images/Spiral-joint.png",
    },
    {
      name: "Mounting Plate",
      material: "Steel, Aluminum",
      holeDiameter: "6 mm to 32 mm",
      vibrationDamping: "Rubber Inserts",
      mountingStyle: "Horizontal, Vertical",
      image: "/images/Plate.png",
    },
    {
      name: "Multi-Pin Enclosure",
      material: "Plastic, Metal",
      pinCount: "25 to 256 Pins",
      waterproofRating: "IP65/IP67",
      locking: "Screw or Clip",
      image: "/images/Multi-pin.png",
    },
  ];

  const products2 = [
    {
      name: "Spherical Joint",
      material: "Steel, Stainless Steel",
      load: "Up to 100,000 N",
      motion: "Multi DOF",
      bearingType: "Ball or Plain",
      image: "/images/Spiral-joint.png",
    },
    {
      name: "Protective Cap",
      material: "Steel, Aluminum",
      holeDiameter: "6 mm to 32 mm",
      vibrationDamping: "Rubber Inserts",
      mountingStyle: "Horizontal, Vertical",
      image: "/images/productive-cap.png",
    },
    {
      image: "/images/Drag&drop.png",
    },
  ];

  const { scrollYProgress } = useScroll();

  // animation for fading between product sets
  const firstOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 1]);
  const secondOpacity = useTransform(scrollYProgress, [0.3, 0.7], [0, 1]);

  return (
    <motion.section
      id="manufacture"
      className=" relative h-[200vh] bg-white"
      initial={{ opacity: 0.5 }}
      whileInView={{
        opacity: 1,
        scale: 0.95,
        transition: {
          duration: 1,
        },
      }}
      viewport={{ margin: "-200px" }}
    >
      {/* Heading */}
      <div className="sticky top-0 py-12 bg-white z-20 text-center">
        <span className="text-sm font-medium text-white uppercase tracking-wide px-3 py-1 bg-blue-600 rounded-md">
          Manufacture
        </span>
        <h2 className="mt-4 text-3xl md:text-5xl font-bold text-gray-900">
          The Most Popular{" "}
          <span className="italic text-gray-600">
            <br />
            Details
          </span>{" "}
          We Produce
        </h2>
      </div>

      {/* First Product Set */}
      <motion.div
        style={{ opacity: firstOpacity }}
        className="sticky top-45 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 pt-10"
      >
        {products.map((item, index) => (
          <div
            key={index}
            className="rounded-xl p-6 shadow-sm hover:shadow-lg transition bg-[#f8f9fd] flex flex-col"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {item.name}
              </h3>
              <FaArrowRight className="text-gray-400" />
            </div>
            <ul className="text-sm text-gray-600 space-y-1">
              {Object.entries(item)
                .filter(([key]) => key !== "name" && key !== "image")
                .map(([key, value], idx) => (
                  <li key={idx}>
                    <span className="font-medium capitalize">{key}:</span>{" "}
                    {value}
                  </li>
                ))}
            </ul>
            <div className="flex justify-center items-center mt-6 h-40 w-full">
              <Image
                src={item.image}
                alt={item.name}
                width={160}
                height={160}
                className="object-contain h-full w-auto"
              />
            </div>
          </div>
        ))}
      </motion.div>

      {/* Second Product Set */}
      <motion.div
        style={{ opacity: secondOpacity }}
        className="sticky top-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 pt-35"
      >
        {products2.map((item, index) => (
          <div
            key={index}
            className="rounded-xl p-6 shadow-sm hover:shadow-lg transition bg-[#f8f9fd] flex flex-col"
          >
            {index === 2 ? (
              <div className="flex justify-center items-center w-full h-full">
                <img
                  src={item.image}
                  alt="Drag & Drop"
                  className="object-contain w-full h-[300px] md:h-[400px]"
                />
              </div>
            ) : (
              <>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.name}
                  </h3>
                  <FaArrowRight className="text-gray-400" />
                </div>
                <ul className="text-sm text-gray-600 space-y-1">
                  {Object.entries(item)
                    .filter(([key]) => key !== "name" && key !== "image")
                    .map(([key, value], idx) => (
                      <li key={idx}>
                        <span className="font-medium capitalize">{key}:</span>{" "}
                        {value}
                      </li>
                    ))}
                </ul>
                <div className="flex justify-center items-center mt-6 h-40 w-full">
                  <Image
                    src={item.image}
                    alt="Images"
                    width={160}
                    height={160}
                    className="object-contain h-full w-auto"
                  />
                </div>
              </>
            )}
          </div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default PopularDetails;
