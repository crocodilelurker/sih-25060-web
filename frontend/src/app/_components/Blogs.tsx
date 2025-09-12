"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/_components/card";
import { Button } from "@/app/_components/button";
import { motion } from "framer-motion";
import Image from "next/image";

import { Bebas_Neue } from "next/font/google";

export const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

import { Merriweather } from "next/font/google";

export const merriweather = Merriweather({
  weight: ["400", "700"],
  subsets: ["latin"],
});


const blogs = [
  {
    id: 1,
    title: "The Importance of Waste Segregation at Home",
    category: "Waste Management",
    excerpt:
      "Learn why separating wet and dry waste is the first step to effective recycling.",
    author: "Aditi Sharma",
    date: "Sep 1, 2025",
    image: "/waste-separation.jpg",
  },
  {
    id: 2,
    title: "How Composting Reduces Household Waste",
    category: "Sustainability",
    excerpt:
      "Turn your kitchen scraps into rich compost instead of sending them to landfills.",
    author: "Rohan Patel",
    date: "Aug 28, 2025",
    image: "/compost.jpg",
  },
  {
    id: 3,
    title: "Plastic Waste: The Silent Polluter",
    category: "Environment",
    excerpt:
      "Understand the long-term damage caused by single-use plastics and alternatives.",
    author: "Meera Nair",
    date: "Aug 20, 2025",
    image: "/plastic-waste.jpg",
  },
  {
    id: 4,
    title: "E-Waste Recycling: Why It Matters",
    category: "Technology",
    excerpt:
      "From old phones to laptops, learn the safe way to dispose of electronic waste.",
    author: "Arjun Mehta",
    date: "Aug 12, 2025",
    image: "/ewaste.jpg",
  },
  {
    id: 5,
    title: "How Schools Can Promote Waste Awareness",
    category: "Education",
    excerpt:
      "Simple activities and programs schools can run to teach kids waste management.",
    author: "Priya Verma",
    date: "Aug 5, 2025",
    image: "/classroom.jpg",
  },
  {
    id: 6,
    title: "5 Creative Ways to Reuse Plastic Bottles",
    category: "DIY",
    excerpt:
      "Turn waste into value with these simple and eco-friendly DIY projects.",
    author: "Karan Singh",
    date: "Jul 28, 2025",
    image: "/water-bottle.jpg",
  },
  {
    id: 7,
    title: "The Role of Municipalities in Waste Management",
    category: "Policy",
    excerpt:
      "How local governments can lead effective waste management initiatives.",
    author: "Ananya Gupta",
    date: "Jul 19, 2025",
    image: "/municipality.jpg",
  },
  {
    id: 8,
    title: "Zero-Waste Lifestyle: Is It Possible?",
    category: "Lifestyle",
    excerpt:
      "Explore practical tips for adopting a zero-waste lifestyle at home.",
    author: "Vikram Rao",
    date: "Jul 11, 2025",
    image: "/low-waste.jpg",
  },
  {
    id: 9,
    title: "Impact of Landfills on Environment",
    category: "Environment",
    excerpt:
      "A closer look at how landfills affect soil, water, and air quality.",
    author: "Sanya Kapoor",
    date: "Jul 2, 2025",
    image: "/landfill.jpg",
  },
  {
    id: 10,
    title: "Recycling Myths You Should Stop Believing",
    category: "Awareness",
    excerpt: "Debunking common misconceptions around recycling processes.",
    author: "Rahul Jain",
    date: "Jun 25, 2025",
    image: "/recycling.jpg",
  },
  {
    id: 11,
    title: "The Circular Economy Explained",
    category: "Economy",
    excerpt:
      "Why moving from a linear to circular economy is the future of sustainability.",
    author: "Sneha Iyer",
    date: "Jun 15, 2025",
    image: "/circular-economy.jpg",
  },
  {
    id: 12,
    title: "How Restaurants Can Reduce Food Waste",
    category: "Food",
    excerpt:
      "Practical solutions for eateries to cut down food waste and save money.",
    author: "Aarav Khanna",
    date: "Jun 7, 2025",
    image: "/restaurant-food.jpg",
  },
  {
    id: 13,
    title: "Biodegradable Alternatives You Should Try",
    category: "Products",
    excerpt:
      "From bags to cutlery, explore eco-friendly alternatives to plastic.",
    author: "Nisha Menon",
    date: "May 29, 2025",
    image: "/biodegradable.jpg",
  },
  {
    id: 14,
    title: "Community Clean-Up Drives: Making a Difference",
    category: "Community",
    excerpt:
      "How local clean-up events bring people together for a greener world.",
    author: "Manish Yadav",
    date: "May 20, 2025",
    image: "/community.jpg",
  },
  {
    id: 15,
    title: "The Future of Smart Waste Bins",
    category: "Technology",
    excerpt:
      "Exploring how AI and IoT are transforming waste collection and sorting.",
    author: "Divya Pillai",
    date: "May 10, 2025",
    image: "/waste-bin.jpg",
  },
];

const categories = ["All", ...Array.from(new Set(blogs.map((blog) => blog.category)))];


const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

const Blogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const blogsPerPage = 9;

  const filteredBlogs =
    selectedCategory === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === selectedCategory);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  return (
    <div className="container mx-auto px-4 py-10 space-y-12 ">
      {/* Section 1: Welcome */}
     <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center w-full  bg-gradient-to-r  rounded-xl text-white"
      >
          <div className={`${bebas.className} w-fit px-2  rounded-xl mx-auto     leading-snug font-bold mb-5 text-black drop-shadow-2xl`}>
              <p className="text-4xl lg:text-6xl">   Welcome to Our Blog!</p>
              <p className=" text-sm lg:text-2xl">  Insights that turn awareness into action.</p>
          </div>
      </motion.section>

      {/* Section 2: Categories */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="flex flex-wrap justify-center gap-3"
      >
        {categories.map((cat, i) => (
          <Button 
          key={i} 
          onClick={() => {
              setSelectedCategory(cat);
              setCurrentPage(1);
            }}
            variant={selectedCategory === cat ? "default" : "outline"}className="rounded-full">
            {cat}
          </Button>
        ))}
      </motion.section>

      {/* Section 3: Blog Cards */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-6 px-4 md:px-8"
      >
        {currentBlogs.map((blog, i) => (
          <motion.div
            key={blog.id}
            custom={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-md rounded-2xl hover:shadow-lg transition overflow-hidden">
              {blog.image ? (
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
              ) : (
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
                  No Image
                </div>
              )}
              <CardHeader>
                <CardTitle>{blog.title}</CardTitle>
                <p className="text-sm text-gray-500">{blog.category}</p>
              </CardHeader>
              <CardContent>
                <p className="mb-3 text-gray-700">{blog.excerpt}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>By {blog.author}</span>
                  <span>{blog.date}</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.section>

      {/* Section 4: Pagination */}
      <section className="flex justify-center items-center gap-2">
        <Button
          variant="outline"
          disabled={currentPage === 1}
          onClick={() => {
            setCurrentPage((prev) => prev - 1)
            window.scrollTo(0,0)
          }}
        >
          Previous
        </Button>
        {Array.from({ length: totalPages }, (_, i) => (
          <Button
            key={i}
            variant={currentPage === i + 1 ? "default" : "outline"}
            onClick={() => {
              setCurrentPage(i + 1)
              window.scrollTo(0,0)
            }}
          >
            {i + 1}
          </Button>
        ))}
        <Button
          variant="outline"
          disabled={currentPage === totalPages}
          onClick={() => {
            setCurrentPage((prev) => prev + 1)
            window.scrollTo(0,0)
          }}
        >
          Next
        </Button>
      </section>
    </div>
  );
};

export default Blogs;
