"use client";

import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { encryptText } from "@/utils/encryption";
import { useState } from "react";

const info = [
  {
    icon: <FaPhoneAlt/>,
    title: 'Phone',
    description: "+1 469 682 9009"
  },
  {
    icon: <FaEnvelope/>,
    title: 'Email',
    description: "rvkausik.pegasian@gmail.com"
  },
  {
    icon: <FaMapMarkerAlt/>,
    title: 'Address',
    description: "8181 Fannin St, Apt 321, Houston TX, 77054"
  }
]


const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleContactForm = async () => {
    try {
      const encryptedText = encryptText("12345");
      const response = await fetch("http://localhost:9094/api/v1/pf-contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Portfolio-View": encryptedText,
        },
        body: JSON.stringify(formData), // Send form data to the API
      });

      if (!response.ok) {
        throw new Error("Failed to send message.");
      }

      // Clear the form after successful API call
      setFormData({
        firstName: "",
        lastName: "",
        emailAddress: "",
        phoneNumber: "",
        description: "",
      });

      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send message.");
    }
  };

  return (
    <motion.section initial={{ opacity: 0 }}
    animate={{
      opacity: 1,
      transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
    }} className="py-6">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rouded-xl" onSubmit={(e) => {
                e.preventDefault(); // Prevent default form submission
                handleContactForm(); // Call the API on form submission
              }}>
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                Let’s collaborate to bring your ideas to life with cutting-edge full stack development solutions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="firstname" placeholder="FirstName" name="firstName" className="px-2 py-2 text-black/60" value={formData.firstName}
                  onChange={handleChange}/>
                <input type="lastname" placeholder="LastName" name="lastName" className="px-2 py-2 text-black/60" value={formData.lastName}
                  onChange={handleChange}/>
                <input type="email" placeholder="Email address" name="emailAddress" className="px-2 py-2 text-black/60" value={formData.emailAddress}
                  onChange={handleChange}/>
                <input type="phone" placeholder="Phone number" name="phoneNumber" className="px-2 py-2 text-black/60" value={formData.phoneNumber}
                  onChange={handleChange}/>
              </div>
              <Textarea className="h-[200px]" placeholder="Type your message here." name="description" value={formData.description}
                onChange={handleChange}/>
              <Button size="md" className="max-w-40">Send message</Button>
            </form>
          </div>
          <div className="flex-1 flex flex-col gap-10 order-1 xl:order-none mb-8">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return <li key={index} className="flex flex-row items-center gap-6">
                  <div className="p-4 bg-[#27272c] text-accent rounded-md flex items-center justify-center gap-4">
                    <div className="text-[28px]">{item.icon}</div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </div>
                </li>
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact