"use client"

import React, { useState } from "react"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import { motion } from "framer-motion"

const data = [
  {
    index: 1,
    type: "Community Event",
    area: "Riverside Park",
    title: "Organizing Community Clean-up Drive This Saturday",
    organizer: "by Sarah Chen",
    uploaded: "2 hours ago",
    content:
      "Hey everyone! We’re organizing a community clean-up drive this Saturday at Riverside Park. Bring gloves and trash bags - we’ll provide water and snacks. Let’s make our neighborhood shine! Last event we collected over 200kg of waste.",
    replies: 18,
    likes: 42,
    dislikes: 3,
  },
  {
    index: 2,
    type: "Report Issue",
    area: "Oak Street Bridge",
    title: "Illegal Dumping Spotted on Oak Street",
    organizer: "by Lisa Andrews",
    uploaded: "5 hours ago",
    content:
      "There’s a pile of construction debris that’s been dumped illegally on Oak Street near the bridge. It’s been there for 3 days now and starting to attract pests. Has anyone reported this to the authorities?",
    replies: 12,
    likes: 9,
    dislikes: 1,
  },
  {
    index: 3,
    type: "Good News",
    area: "Downtown Square",
    title: "New Recycling Bins Installed Downtown!",
    organizer: "by Emma Davis",
    uploaded: "10 hours ago",
    content:
      "Great news! The city finally installed the new smart recycling bins we’ve been advocating for. They have separate compartments for different materials and even compact the waste automatically. This is a huge win for our sustainability efforts!",
    replies: 11,
    likes: 21,
    dislikes: 2,
  },
  {
    index: 4,
    type: "Tips & Advice",
    area: "Green Valley",
    title: "Tips for Reducing Plastic Waste at Home",
    organizer: "by Mark Brown",
    uploaded: "2 days ago",
    content:
      "I’ve been working on reducing my family’s plastic consumption and wanted to share some tips that really work: 1) Use reusable water bottles, 2) Buy in bulk with your own containers, 3) Choose products with minimal packaging. What other tips do you have?",
    replies: 24,
    likes: 36,
    dislikes: 4,
  },
  {
    index: 5,
    type: "Infrastructure",
    area: "Maple Avenue",
    title: "Street Lights Out on Maple Avenue",
    organizer: "by Lucas Ho",
    uploaded: "4 days ago",
    content:
      "Several street lights have been out on Maple Avenue for over a week now. It’s getting dark early and this creates safety concerns, especially for people walking their dogs or jogging in the evening. The area also looks less cared for.",
    replies: 9,
    likes: 7,
    dislikes: 0,
  },
]

const GreenHero = () => {
  const [filterType, setFilterType] = useState<string | null>(null)

  // 🔹 filter data by type
  const filteredData = filterType
    ? data.filter((item) => item.type === filterType)
    : data

  // 🔹 get unique types for dropdown menu
  const uniqueTypes = [...new Set(data.map((item) => item.type))]

  return (
    <div className="flex gap-6 p-6">
      {/* Left section */}
      <div className="flex-1">
        <h1 className="font-bold text-5xl lg:text-6xl bg-gradient-to-r from-orange-500 via-green-700 to-green-900 bg-clip-text text-transparent ">
          BHAGALPUR
        </h1>

        <div className="flex justify-between items-center mt-6 mb-4">
          <div>
            <h4 className="text-xl font-semibold">Recent Discussions</h4>
            <p className="text-slate-500">
              Join your community's environmental conversations
            </p>
          </div>

          {/* 🔹 Dropdown Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger className="px-4 py-2 bg-gray-200 rounded-md text-sm font-medium">
              {filterType ? `Filter: ${filterType}` : "Filter by Type"}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setFilterType(null)}>
                All
              </DropdownMenuItem>
              {uniqueTypes.map((type) => (
                <DropdownMenuItem
                  key={type}
                  onClick={() => setFilterType(type)}
                >
                  {type}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* 🔹 filtered data cards */}
        <div>
          {filteredData.map((item, i) => (
            <motion.div
              key={item.index}
              className="border p-4 rounded-lg mb-4 shadow bg-white"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0px 8px 20px rgba(0,0,0,0.15)",
              }}
            >
              <h2 className="text-lg font-bold mb-1">{item.title}</h2>
              <p className="text-sm text-gray-500">
                <span className="cursor-pointer font-medium hover:font-semibold hover:text-gray-900 transition-all duration-200 mr-1 border px-2 py-0.5 rounded-full border-slate-300 bg-slate-100">
                  {item.type}
                </span>
                | {item.area}
              </p>
              <p className="mt-2">{item.content}</p>
              <p className="text-xs text-gray-400 mt-1">
                {item.organizer} • {item.uploaded}
              </p>
              <div className="flex gap-4 mt-2 text-sm">
                <span className="cursor-pointer">
                  💬 {item.replies} replies
                </span>
                <span className="cursor-pointer">👍 {item.likes}</span>
                <span className="cursor-pointer">👎 {item.dislikes}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right section (Sidebar) */}
      <div className="w-1/6 h-max bg-white shadow-md rounded-xl p-7 border">
        {/* Title */}
        <h1 className="text-xl font-bold text-gray-800">Cleanliness Score</h1>
        <p className="text-sm text-gray-500">Downtown Area</p>

        {/* Score */}
        <h1 className="text-4xl font-extrabold text-green-600 mt-2">
          <span>7.2</span>
          <span className="text-lg text-gray-700"> /10</span>
        </h1>
        <p className="text-sm text-green-500 font-medium"> 📈 +0.4 from last week</p>

        <hr className="my-3 border-gray-200" />

        {/* Categories */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <h2 className="text-sm font-semibold text-green-700">Excellent</h2>
            <p className="text-xs text-gray-500">8-10</p>
          </div>
          <div className="flex justify-between items-center">
            <h2 className="text-sm font-semibold text-blue-600">Good</h2>
            <p className="text-xs text-gray-500">6-7.9</p>
          </div>
          <div className="flex justify-between items-center">
            <h2 className="text-sm font-semibold text-red-600">Needs Work</h2>
            <p className="text-xs text-gray-500">0-5.9</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GreenHero
