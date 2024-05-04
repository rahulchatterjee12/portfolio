"use client";
import Card from "@/components/Portfolio/Card";
import { motion } from "framer-motion";

const items = [
  {
    id: 1,
    color: "from-[#6C0400] to-[#944C00]",
    title: "Gov. Tender & Construction E-commerce",
    desc: "I led the creation of our e-commerce supplier portal, streamlining registration, product listing, and management of pricing and stock. I handled all frontend work, utilizing Next.js and technologies like MaterialUI and Tailwind CSS.",
    img: "/projects/project1.png",
    link: "https://www.runway.org.in",
  },
  {
    id: 2,
    color: "from-[#944C00] to-[#3F2071]",
    title: "Supplier Portal for the E-commerce Platform",
    desc: "I led the creation of our e-commerce supplier portal, streamlining registration, product listing, and management of pricing and stock. I handled all frontend work, using Next.js and technologies like MaterialUI, Tailwind CSS, and Redux.",
    img: "/projects/project2.png",
    link: "http://supplier.runway.org.in/",
  },
  {
    id: 3,
    color: "from-[#3F2071] to-[#D24668]",
    title: "Car View and Rent App",
    desc: "I built an application with React.js, incorporating an open-source API to fetch detailed information on available cars. Users can easily navigate car listings, book rentals, and access their booking history effortlessly.",
    img: "/projects/project3.png",
    link: "https://car-view.vercel.app/",
  },
  {
    id: 4,
    color: "from-[#D24668] to-[#A32695]",
    title: "Learning Platform Design",
    desc: "I crafted a user interface for a learning platform during my internship at Ebug Technologies, employing React.js. It's essential to clarify that this UI prototype is non-functional, emphasizing design rather than functionality. My main task was UI development using React.js.",
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
  return (
    <motion.div
      className="h-full mx-2 md:mx-10 overflow-y-scroll flex flex-col gap-10 pb-5"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {items.map((item) => (
        <Card data={item} key={item.id} />
      ))}
    </motion.div>
  );
};

export default PortfolioPage;
