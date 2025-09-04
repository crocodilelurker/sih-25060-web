'use client'

import { motion } from "motion/react";
import { useState } from "react";
import GetButton from "./get-button";
import { SlideRight } from "../utility/animation";

const Hero = () => {
  const images = ["/image1.png", "/image2.png", "/image3.png"]; // replace with your images
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="container mx-auto px-20 grid grid-cols-1 md:grid-cols-2 min-h-[650px] gap-8 text-center">
      {/* Left Side */}
      <div className="flex flex-col justify-center space-y-6 px-4 md:px-0">
        <p className="text-8xl md:text-8xl text-green-600 text-center">
          <motion.span
            variants={SlideRight(0.7)}
            initial="hidden"
            animate="visible"
            className="text-6xl"
          >
            Welcome
          </motion.span>{" "}
          <motion.span
            variants={SlideRight(0.7)}
            initial="hidden"
            animate="visible"
            className="text-6xl"
          >
            to{" "}
          </motion.span>
          <br></br>
          <motion.span
            variants={SlideRight(0.9)}
            initial="hidden"
            animate="visible"
            className=" bg-gradient-to-r from-orange-500 via-yellow-600 to-green-500 bg-clip-text text-transparent font-semibold"
          >
            Swach Setu
          </motion.span>
        </p>
        <motion.p
          variants={SlideRight(1.1)}
          initial="hidden"
          animate="visible"
          className="text-gray-500 text-2xl font-salsa "
        >
          Learn to Control Waste Management
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8, delay: 1.7 }}
          className="flex gap-4 justify-center space-x-4"
        >
          <button className="px-6 py-2 border border-gray-300 rounded transition join-button">
            Join
          </button>
          <GetButton text="Get Started" />
        </motion.div>

        {/* Navigation links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8, delay: 1.3 }}
          className="flex gap-4 mt-4 flex justify-center space-x-4"
        >
          {["Overview", "Courses", "Incentives", "Support"].map((link) => (
            <button
              key={link}
              className="px-4 py-1 text-gray-600 hover:text-gray-800 transition shadow-md hover:shadow-lg rounded"
            >
              {link}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Right Side - Carousel */}
      <div className="flex flex-col justify-center items-center bg-black p-4 rounded-lg relative">
        <motion.img
          key={images[current]}
          src={images[current]}
          alt="carousel"
          className="w-[350px] md:w-[550px] xl:w-[700px]"
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -200 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
        />

        {/* Carousel Controls */}
        <div className="flex gap-4 mt-4">
          <button
            onClick={prevSlide}
            className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition"
          >
            Prev
          </button>
          <button
            onClick={nextSlide}
            className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
