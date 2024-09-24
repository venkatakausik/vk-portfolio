"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[298px] h-[298px] 
            xl:w-[458px] xl:h-[458px] 
            mix-blend-lighten absolute">
            <Image
              src="/assets/profile_cropped.png"
              priority
              quality={100}
              fill
              alt=""
              className="object-contain"
            />
          
        </motion.div>

        <motion.svg className="w-[300px] xl:w-[466px] h-[300px] xl:h-[466px]"
            fill="transparent" viewBox="0 0 466 466" xmlns="http://www.w3.org/2000/svg">
                <motion.circle 
                cx="233"
                cy="233"
                r="230"
                stroke="#00ff99"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{strokeDasharray: "24 10 0 0"}}
                animate={{
                    strokeDasharray: ["15 120 25 25", "16 25 92 7", "4 250 22 22"],
                    rotate: [120, 360],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
                />
            </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
