"use client";
import Link from "next/link"
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import { encryptText } from "@/utils/encryption";
const socials = [
    {
        icon: <FaGithub/>, path:'https://github.com/venkatakausik', name: "github_click"
    },
    {
        icon: <FaLinkedinIn/>, path:'https://linkedin.com/in/venkata-kausik-328561170/', name: "linkedin_click"
    },
];

const Socials = ({containerStyles, iconStyles}) => {

  const handleSocialsClick = async (action_name) => {
    const encryptedText = encryptText("12345");
    await fetch("https://backend.luxara.ai/api/v1/action", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Portfolio-View": encryptedText, // Custom encrypted header
      },
      body: JSON.stringify({ action: action_name }), // Example payload
    });
  };

  return (
    <div className={containerStyles}>{socials.map((item, index) => {
        return <Link key={index} href={item.path} className={iconStyles} target="_blank" onClick={() => handleSocialsClick(item.name)}>{item.icon}</Link>
    })}</div>
  )
}

export default Socials