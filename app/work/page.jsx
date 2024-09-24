"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Offline Video Feed Analysis",
    title: "Full stack",
    description:
      [
        "Developed an offline video analysis desktop application in Flutter, featuring Yolo-v7 model-based object detection with 70% accuracy and MTCNN-powered face-recognition authentication.",
"Engineered Python FastAPIs for efficient data management, enabling real-time storage and retrieval of detected objects in MongoDB, deployed within Docker containers",
"Incorporated geo-tagging features with offline mapping capabilities, coupled with comprehensive trend analysis and report generation for location-specific data insights, enhancing the application’s analytical functionality"
      ],
    stack: [
      {
        name: "Yolo-v7",
      },
      {
        name: "Flutter",
      },
      {
        name: "Python",
      },
      {
        name: "FastAPI",
      },
      {
        name: "MongoDB",
      },
    ],
    image: "/assets/work/OFA.jpg",
    github: "",
  },
  {
    num: "02",
    category: "Real-Time Customer Behavior Analytics with Kafka, Airflow, PostgreSQL, and Grafana",
    title: "project 2",
    description:
      [
        "Implemented real-time customer behavior tracking using Apache Kafka to stream user actions such as purchases, clicks, and views",
        "Designed an ETL pipeline in Airflow to consume Kafka streams, enrich data with customer demographics, and store processed data in PostgreSQL",
        "Built interactive dashboards in Grafana for visualizing customer action data, including geographical sales mapping and product engagement using PostgreSQL as the data source"
      ],
    stack: [
      {
        name: "Apache-Kafka",
      },
      {
        name: "Airflow",
      },
      {
        name: "Grafana",
      },
      {
        name: "PostgreSQL",
      },
    ],
    image: "/assets/work/Sales ETL.png",
    github: "",
  },
  {
    num: "03",
    category: "InventoryCatalyst",
    title: "project 3",
    description:
      [
        "Developed a flutter mobile application for seamless kitchen inventory management",
"Designed and developed app using flutter framework with SpringBoot backend and MongoDB, MySQL databases along with firebase push notifications",
"Implemented CI/CD pipelines with Jenkins, AWS EC2, Kubernetes, Git, automating deployment of online services"
      ],
    stack: [
      {
        name: "Flutter",
      },
      {
        name: "SpringBoot",
      },
      {
        name: "AWS EC2",
      },
      {
        name: "Jenkins",
      },

    ],
    image: "/assets/work/ki_merged.png",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between items-start order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl text-white leading-none font-extrabold text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              <p className="text-white/60">{
                project.description.map((item, index) => {
                  return (
                    <li key={index}>
                      {item}
                    </li>
                  )
                })
              }</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent text-justify">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              {/* <div className="flex items-center gap-4">
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div> */}
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[480px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnstyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
