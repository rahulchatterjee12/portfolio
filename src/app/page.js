"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row  px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE  */}
        <div className="h-1/2 lg:h-full  lg:w-1/2 relative -z-0">
          <Image src='/github.png' alt="" fill className="object-contain  rounded-lg" />
        </div>

        {/* TEXT */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold"> Full-Stack Developer</h1>
          <p className="md:text-xl">Experienced Full Stack Developer proficient in frontend
            and backend technologies. Skilled in HTML, CSS, JavaScript, React.js, Next.js,
            Redux, Node.js, Django Rest Framework and MongoDB. Strong understanding of RESTful APIs
            and collaborative team player. Passionate about staying updated with latest web trends.
          </p>
          <div className="w-full flex gap-4">
            <Link href='/portfolio' className="bg-black rounded-lg text-white p-3">View My Work</Link>
            <Link href='/contact' className="border border-black text black rounded-lg p-3">Contact Me</Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
