"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-[#6C0400] to-[#944C00]",
    title: "Gov. tender-listed construction materials e-commerce",
    desc: "I have developed this e-commerce website tailored for the construction industry on behalf of the company I am currently employed with. This platform serves as a centralized hub where contractors can access tenders, materials and related resources efficiently. Utilizing Next.js, I led the frontend development, accounting for 90% of the project's implementation. Notable technologies incorporated include MaterialUI, Tailwind CSS, Redux, among others.",
    img: "/projects/project1.png",
    link: "https://www.runway.org.in",
  },
  {
    id: 2,
    color: "from-[#944C00] to-[#3F2071]",
    title: "Supplier Portal for the E-commerce Platform",
    desc: "I have spearheaded the development of the supplier portal for our e-commerce website. This portal enables suppliers to seamlessly register, list their products, and manage essential details such as pricing, quantity, and stock units. Leveraging Next.js, I assumed full responsibility for the frontend implementation, accounting for 100% of the project's frontend development. Noteworthy technologies employed include MaterialUI, Tailwind CSS, Redux, among others.",
    img: "/projects/project2.png",
    link: "http://supplier.runway.org.in/",
  },
  {
    id: 3,
    color: "from-[#3F2071] to-[#D24668]",
    title: "Car View and Rent App",
    desc: "I developed this application using React.js, integrating an open-source API to retrieve comprehensive details about available cars. Users can conveniently browse through the car listings, make rental bookings, and access their booking history seamlessly.",
    img: "/projects/project3.png",
    link: "https://car-view.vercel.app/",
  },
  {
    id: 4,
    color: "from-[#D24668] to-[#A32695]",
    title: "Spotify Music App",
    desc: "I developed an interactive user interface for a learning platform during my internship at Ebug Technologies, utilizing React.js. It's important to note that this UI prototype is non-functional, focusing solely on the design aspect of the website. My responsibility primarily entailed the development of the user interface using React.js.",
    img: "/projects/project5.png",
    link: "https://nimble-crepe-f97813.netlify.app/",
  },
  {
    id: 5,
    color: "from-[#A32695] to-[#3F2071]",
    title: "Weather App",
    desc: "I have developed an application using React.js that integrates with an open-source API to fetch weather data for any location. Users can easily search for the weather conditions of any desired place.",
    img: "/projects/project4.png",
    link: "https://gleaming-zabaione-64569f.netlify.app/",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full "
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[700vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex flex-col gap-7 items-center justify-center text-2xl lg:text-8xl font-serif text-center text-white">
          Would you like to take a look at my creations?
          <motion.svg
            initial={{ opacity: 0.2, y: 0 }}
            animate={{ opacity: 1, y: "10px" }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width={50}
            height={50}
          >
            <path
              d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
              stroke="#fff"
              strokeWidth="1"
            ></path>
            <path d="M12 6V14" stroke="#fff" strokeWidth="1"></path>
            <path d="M15 11L12 14L9 11" stroke="#fff" strokeWidth="1"></path>
          </motion.svg>
          <span className="text-[20px] lg:text-[28px]">Scroll Down</span>
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-[#004C9B] to-[#6C0400]" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen p-16 flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-0 text-white">
                  <h1 className="text-lg font-bold md:text-xl lg:text-3xl xl:text-4xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image
                      src={item.img}
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link
                    href={item.link}
                    target="_blank"
                    className="flex justify-end"
                  >
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">
                      See Demo
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center bg-gradient-to-b from-[#3F2071] to-[#004C9B] ">
        <h1 className="text-lg md:text-xl lg:text-2xl xl:text-8xl text-white">
          Are you in need of a developer for your project?
        </h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#fff">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Full-Stack-Developer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
