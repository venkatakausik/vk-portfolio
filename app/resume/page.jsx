"use client";

import {
  FaJs,
  FaReact,
  FaJava,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaPython,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiFlutter,
  SiMysql,
  SiMongodb,
  SiElasticsearch,
} from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {Tooltip,TooltipContent,TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { useState } from "react";

const Modal = ({ show, onClose, title, highlights }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#232329] w-full max-w-xl p-6 rounded-lg shadow-lg text-white">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <ScrollArea className="h-[300px]">
          <ul className="list-disc pl-5 space-y-2">
            {highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </ScrollArea>
        <button
          onClick={onClose}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

const about = {
  title: "About",
  description:
    "Passionate software engineer with expertise in fullstack development, scalable systems, and a drive to solve complex technical challenges",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Venkata Kausik Renduchintala",
    },
    {
      fieldName: "Phone",
      fieldValue: "+1 469 682 9009",
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Email",
      fieldValue: "rvkausik.pegasian@gmail.com",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "Experienced in developing scalable backend systems, creating high-performance APIs, and optimizing databases using Java, Python, and Spring Boot, with a proven track record of delivering robust solutions in dynamic, fast-paced environments",
  items: [
    {
      company: "Securin Inc.",
      position: "Software Engineer",
      duration: "2021 - 2023",
      highlights : [
        "Contributed as a Java backend developer at Securin in developing a SaaS product for attack surface management that is architected to identify vulnerable exposures and assets for organizations",
       ,"Optimized database schemas utilizing MySQL, ElasticSearch and RedisCache for efficient data ingestion and retrieval,"
       ,"Implemented scalable and fault-tolerant 5+ microservices using Spring Boot and Hibernate",
       , "Developed high-performance scalable RESTful APIs using Java, SpringBoot, Kafka, MySQL, ElasticSearch adhering to REST principles, and ensuring API consistency and security"
       ,"Debugged 20+ bugs across server and client pages, enhancing the reliability of backend services."
      ]
    },
    {
      company: "Codemania",
      position: "Mobile App Developer",
      duration: "Summer 2019",
      highlights: [
        "Developed a responsive Used Car Rental mobile application using Flutter and reduced build time using parallelization",
        "Employed and developed 5+ backend Microservices in Spring Boot API’s, utilizing Junit for unit testing",
        "Integrated a floating chatbot in Home and FAQ pages implemented using NLP, MongoDB."
      ]
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "I'm pursuing a Master of Science in Computer Science at the University of Houston, building on my Bachelor of Technology in Computer Science and Engineering from SASTRA Deemed University with a strong foundation in computer science, fueling my passion for solving complex technical challenges",
  items: [
    {
      institution: "University of Houston",
      degree: "Masters in Computer Science",
      duration: "2023 - 2025",
      cgpa: "3.67 / 4"
    },
    {
      institution: "SASTRA Deemed University",
      degree: "Bachelors in Computer Science",
      duration: "2017 - 2021",
      cgpa: "9.00 / 10"
    },
  ],
};

const skills = {
  title: "My skills",
  description:
    "Experienced in fullstack development with Java, Python, Spring Boot and React, I excel at creating scalable, high-performance systems. Proficient in databases like MySQL, MongoDB, and ElasticSearch, I bring expertise in building robust APIs, containerizing applications with Docker, and deploying them on AWS",
  skillList: [
    {
      icon: <FaJava />,
      name: "Java",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <SiMysql />,
      name: "MySQL",
    },
    {
      icon: <SiElasticsearch />,
      name: "ElasticSearch",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaAws />,
      name: "AWS",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <SiFlutter />,
      name: "Flutter",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
  ],
};

const Resume = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30ox] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 mb-8 mt-8">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                          onClick={() => setSelectedExperience(item)}
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* <span></span> */}
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full h-full">
              <div className="flex flex-col gap-[30ox] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 mb-8 mt-8">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* <span></span> */}
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                          <div className="flex items-center gap-3">
                            {/* <span></span> */}
                            <p className="text-white/60">{item.cgpa}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <div>
                  <h3 className="text-4xl font-bold mb-8">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px] xl:mb-10">
                  {skills.skillList.map((skill, index) => {
                    return <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="flex flex-col items-start xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
      <Modal
        show={!!selectedExperience}
        onClose={() => setSelectedExperience(null)}
        title={"My experience at " + selectedExperience?.company}
        highlights={selectedExperience?.highlights || []}
      />
    </motion.div>
  );
};

export default Resume;
