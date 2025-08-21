import React from "react";
import { FaStarOfLife } from "react-icons/fa";

const CallToAction = () => {
  return (
    <section id="getintouch" className=" bg-blue-600 text-white py-20 flex flex-col items-center text-center px-5">
      {/* Icon */}
      <FaStarOfLife className="text-2xl mb-4" />

      {/* Heading */}
      <h2 className="text-2xl md:text-4xl font-semibold mb-4">
        Ready to Bring Your Detail to Life?
      </h2>

      {/* Description */}
      <p className="max-w-2xl text-gray-200 mb-6">
        From prototypes to production runs — our CNC machining platform is built
        for speed, precision, and scale. Share your project with us, and we’ll
        turn your ideas into real, production-ready details.
      </p>

      {/* Button */}
      <button className="bg-white text-blue-600 px-6 py-2 rounded-md font-medium hover:bg-gray-100 transition">
        GET IN TOUCH
      </button>
    </section>
  );
};

export default CallToAction;
