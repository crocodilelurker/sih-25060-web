"use client";

import { motion } from "motion/react";
import GetButton from "./get-button";
import { SlideRight } from "../_utility/animation";
import { amita, salsa } from "../_utility/font";
import Link from "next/link";
import StackedCarousels from "./StackedCarousels";

const Hero = () => {
  return (
    <div className=" flex-col md:flex-row container mx-auto px-20 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
      {/* Left Side */}
      <div className="flex flex-col justify-center space-y-9 px-6 md:px-0 h-125 mr-10">
        <div className="md:text-8xl text-green-600 text-center w-full min-h-[200px] h-75 mt-30">
          <motion.span
            variants={SlideRight(0.7)}
            initial="hidden"
            animate="visible"
            className={`${amita.className} text-6xl`}
          >
            Welcome
          </motion.span>{" "}
          <motion.span
            variants={SlideRight(0.7)}
            initial="hidden"
            animate="visible"
            className={`${amita.className} text-6xl`}
          >
            to{" "}
          </motion.span>
          <br />
          <motion.div
            variants={SlideRight(0.9)}
            initial="hidden"
            animate="visible"
            className={`${amita.className} my-6 text-9xl bg-gradient-to-r from-orange-500 via-yellow-600 to-green-500 bg-clip-text text-transparent mt-5 h-75 py-6 font-semibold`}
          >
            स्वछ सेतु
          </motion.div>
        </div>
        <motion.p
          variants={SlideRight(1.1)}
          initial="hidden"
          animate="visible"
          className={`${salsa.className} text-gray-500 text-2xl mt-17`}
        >
          Learn to Control Waste Management
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8, delay: 1.7 }}
          className="flex gap-4 justify-center space-x-4"
        >
          <Link href="/about">
            <button className="px-6 py-1 border border-gray-300 rounded-3xl transition join-button">
              Explore
            </button>
          </Link>
          <Link href="/auth">
            <GetButton text="Get Started" />
          </Link>
        </motion.div>
      </div>

      {/* Right Side - Carousels */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8, delay: 1.7 }}
        className="flex flex-col justify-between md:w-[100%] h-[calc(100vh_-_20rem)] max-w-4xl mx-auto gap-4"
      >
        <StackedCarousels />
      </motion.div>
    </div>
  );
};

export default Hero;
