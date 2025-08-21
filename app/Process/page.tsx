import React from "react";
import Image from "next/image"; // ✅ Next.js optimized Image
import { FaAngleDoubleRight } from "react-icons/fa";
import { IoCloudUploadSharp } from "react-icons/io5";
import { MdComment } from "react-icons/md";
import { RiContractFill } from "react-icons/ri";
import { FaShippingFast } from "react-icons/fa";

const ProcessPage = () => {
  let boxes = [
    {
      symbol: <IoCloudUploadSharp />,
      heading: "Upload Step Files",
      content:
        "Select from a wide range of materials, Precision tolerances, and custom threads to match your exact needs",
    },
    {
      symbol: <MdComment />,
      heading: "Get a quote & checkout",
      content:
        "No waiting-just fast, transport, pricing and control over how soon you want your parts delivered",
    },
    {
      symbol: <RiContractFill />,
      heading: "We make your parts",
      content:
        "Once you place an order our machines get to work immediately-no delays.",
    },
    {
      symbol: <FaShippingFast />,
      heading: "Parts are shipped",
      content:
        "Finalized parts are out the door quickly, with delivery typically completed with 48 hours.",
    },
  ];

  return (
    <section className="pt-20 p-5 flex flex-col gap-5 bg-white ">
      {/* button */}
      <div>
        <button className="flex items-center p-1 bg-blue-600 text-white rounded-sm">
          <span className="mr-2">
            <FaAngleDoubleRight />
          </span>
          Process
        </button>
      </div>

      {/* Heading */}
      <div>
        <h1 className="text-3xl font-semibold md:text-6xl">
          CNC Machining <br /> Made{" "}
          <span className="text-[#747d8b] font-bold">Easy</span>
        </h1>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {boxes.map((item, index) => (
          <div key={index} className="bg-gray-200 p-4 rounded-md">
            <h3 className="flex items-center font-semibold">
              <span className="pr-2">{item.symbol}</span>
              {item.heading}
            </h3>
            <p className="text-gray-500">{item.content}</p>
          </div>
        ))}
      </div>

      {/* Image section for mobile */}
      <div className="md:hidden">
        <Image
          className="rounded-md w-full h-[300px] object-cover"
          src="/images/process.png"
          alt="Process"
          width={600}
          height={300}
        />
      </div>

      {/* Image section for desktop */}
      <div className="hidden md:flex w-full gap-1">
        <Image
          src="/images/part1.png"
          alt="Part 1"
          width={400}
          height={400}
          className="w-1/4 h-[400px] rounded-md object-full"
        />
        <Image
          src="/images/part2.png"
          alt="Part 2"
          width={400}
          height={400}
          className="w-1/4 h-[400px] rounded-md object-full"
        />
        <Image
          src="/images/part3.png"
          alt="Part 3"
          width={400}
          height={400}
          className="w-1/4 h-[400px] rounded-md object-full"
        />
        <Image
          src="/images/part4.png"
          alt="Part 4"
          width={400}
          height={400}
          className="w-1/4 h-[400px] rounded-md object-full"
        />
      </div>
    </section>
  );
};

export default ProcessPage;
