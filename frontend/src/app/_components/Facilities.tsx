"use client"
import React from 'react'
import { motion } from "framer-motion"

const Facilities = () => {
  return (
    <div className='flex flex-col md:flex-row p-7 justify-between'>
      {/* Left Section */}
      <motion.div 
        className='flex flex-col gap-5 mx-auto p-4 group'
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
      <h1 className="text-5xl font-bold 
               transition-all duration-500 
               group-hover:bg-gradient-to-r 
                 group-hover:from-orange-500 
                 group-hover:via-yellow-600 
                 group-hover:to-green-500 
                 group-hover:bg-clip-text 
                 group-hover:text-transparent">
             Waste Management Facilities
      </h1>
        <p>Find the nearest waste management facilities</p>
        <motion.button 
          className='px-5 bg-black text-white w-[40%] py-3 rounded-xl transition duration-300 ease hover:bg-white hover:text-black border-2 uppercase border-white font-bold cursor-pointer ' 
          whileHover={{ boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.15)" }}
          transition={{ duration: 0.3, ease: "easeInOut" } }
          whileTap={{ scale: 0.95 }}
           
        >
         VIEW ALL
        </motion.button>
      </motion.div>

      {/* Right Section */}
      <div className='flex flex-col md:flex-row justify-between gap-3 mx-auto'>

        {/* Card 1 */}
        <motion.div 
          className='flex flex-col gap-4 bg-white shadow-md rounded-2xl p-6 border border-none cursor-pointer'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.15)"
          }}
        >
          <img src="" alt="img1" className='mx-auto aspect-square rounded-full border border-amber-300' />
          <h2 className='text-2xl font-bold text-center'>Biomethanization Plant</h2>
          <p className='text-center'>Converts organic waste to biogas</p>
          <h1 className='text-2xl text-center font-bold'>Open Daily</h1>
        </motion.div>

        {/* Card 2 */}
        <motion.div  
          className='flex flex-col gap-4 bg-white shadow-md rounded-2xl p-6 border border-none cursor-pointer'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.15)",
          }}
        >
          <img src="" alt="img2" className='mx-auto aspect-square rounded-full border border-amber-300' />
          <h2 className='text-2xl font-bold text-center'>Recycling Centre</h2>
          <p className='text-center'>Recycle your plastic and metal waste</p>
          <h1 className='text-2xl text-center font-bold'>Open Weekdays</h1>
        </motion.div>

      </div>
    </div>
  )
}

export default Facilities
