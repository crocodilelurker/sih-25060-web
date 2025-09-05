"use client"
import React from "react";
import { motion } from "framer-motion";
import { Saira } from "next/font/google";

const saira =Saira ({
  subsets:["latin"],
  weight:["600"]
})
const Statistics: React.FC = () => {
  return (
    <div className="mt-10 max-w-4xl mx-auto px-5 mb-5">
      {/* Header */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: -30}}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className={`text-5xl  mb-3 text-emerald-500 ${saira.className}`}>
          Waste Management Statistics
        </h1>
        <p className=" text-gray-600 text-lg font-semibold">
          Track progress in waste segregation and management.
        </p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
        {/* Card 1 */}
        <motion.div
          className="bg-white shadow-md rounded-2xl p-6 border border-amber-200"
          initial={{ opacity: 0, y: 40}}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.15)",
          }}
        >
          <p className="text-gray-500">Total Waste Segregated</p>
          <h1 className="text-3xl font-bold text-black">2000 Tons</h1>
          <p className="text-green-600 font-medium mt-2">+25% this month</p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="bg-white shadow-md rounded-2xl p-6 border border-amber-200"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.15)",
          }}
        >
          <p className="text-gray-500">Active Participants in Training</p>
          <h1 className="text-3xl font-bold text-black">15,000</h1>
          <p className="text-green-600 font-medium mt-2">+5% this month</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Statistics;
