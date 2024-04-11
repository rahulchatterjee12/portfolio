"use client"
import Image from "next/image";
import { motion } from "framer-motion";

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
          <Image src='/hero.png' alt="" fill className="object-contain  rounded-lg" />
        </div>

        {/* TEXT */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold"> asdfklahsd lfkjashdf kash fasldfj</h1>
          <p className="md:text-xl">khlkja hsfkjasd hjalksdf halskdhf kasjdfas
            asdkflhaksdj asdjkals dfalksdj laksjdf alskdf j
            kajsld fjalsdkjflaksjdflkasj dflasjdflk asdjf
            akjlsdf kasdflkasdflk
            ksaldjfalskdf
          </p>
          <div className="w-full flex gap-4">
            <button className="bg-black rounded-lg text-white p-3">View My Work</button>
            <button className="border border-black text black rounded-lg p-3">Contact Me</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
