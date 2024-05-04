import React from "react";
import { Meteors } from "./meteors";
import { motion } from "framer-motion";
import Link from "next/link";

const Card = ({ data }) => {
  return (
    <motion.div
      initial={{ x: "-50vh" }}
      animate={{ x: "0%" }}
      transition={{ duration: 1 }}
      className="flex justify-center gap-4 md:justify-between flex-col md:flex-row md:odd:flex-row-reverse"
    >
      <motion.div className=" w-full relative md:max-w-xs md:max-h-xs">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <h1 className="font-bold text-xl text-white mb-4 relative z-50">
            {data.title}
          </h1>

          <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
            {data.desc}
          </p>

          <Link
            href={data.link}
            target="_blank"
            className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300"
          >
            Visit
          </Link>

          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </motion.div>

      <div className=" w-full relative max-w-screen-sm">
        <div className="absolute h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl border-gray-600 border rounded">
          <img
            className="aspect-auto object-contain rounded"
            fill
            src={data.img}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
