"use client";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import Socials from "@/components/ui/Socials";
import { FiDownload } from "react-icons/fi";
import { encryptText } from '../utils/encryption';
import { useEffect } from 'react';
const Home = () => {
  
  const handleResumeDownloadClick = async () => {
    const encryptedText = encryptText("12345");
    await fetch("https://backend.luxara.ai/api/v1/action", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Portfolio-View": encryptedText, // Custom encrypted header
      },
      body: JSON.stringify({ action: "resume_download" }), // Example payload
    });
  }


  const updateViewCount = async () => {
    try {
      const encryptedText = encryptText("12345");
      const response = await fetch('https://backend.luxara.ai/api/v1/action', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "X-Portfolio-View": encryptedText, // Custom encrypted header
        },
        body: JSON.stringify({ action: "landing_view" }), 
      });
      if (!response.ok) {
        throw new Error('Failed to update view count');
      }
    } catch (error) {
      console.error('Error updating view count:', error);
    }
  };

  useEffect(() => {
    // Check if the user has already visited the landing page
    const hasVisited = localStorage.getItem('hasVisitedLandingPage');

    if (!hasVisited) {
      // If not visited before, update the view count and set flag
      updateViewCount();
      localStorage.setItem('hasVisitedLandingPage', 'true');
    }
  }, []);

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pb-8">
          <div className="text-center xl:text-left order-2 xl:order-none">
            {/* <span>Software Developer</span> */}
            <h2 className="h2">
              Hello I'm <br />{" "}
              <span className="text-accent">Venkata Kausik Renduchintala</span>
            </h2>
            <p className="xl:max-w-[400px] mb-9 text-white/80">
            Innovative software engineer specializing in fullstack development and scalable solutions, driven by a passion for solving complex challenges
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <div onClick={() => handleResumeDownloadClick()}>
              <a
                href="/Venkata_Kausik_Renduchintala_Resume.pdf"
                download="Venkata_Kausik_Renduchintala_Resume.pdf"
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2 border-2 border-white rounded-full px-4"
              >
                <span>Download Resume</span>
                <FiDownload className="text-xl "></FiDownload>
              </a></div>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};
export default Home;
