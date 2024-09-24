"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { encryptText } from "@/utils/encryption";

const links = [
    {
        name: 'home',
        path: '/'
    },
    {
        name: 'resume',
        path: '/resume'
    }
    , {
        name: 'Work',
        path: '/work'
    },
    {
        name: 'contact',
        path: '/contact'
    }
]

const Nav = () => {
  const pathName = usePathname();

  const handleNavClick = async (action_name) => {
    if (
      action_name === "contact" ||
      action_name === "Work" ||
      action_name === "resume"
    ) {
      if (action_name === "contact") {
        action_name = "contact_click";
      }
      if (action_name === "Work") {
        action_name = "work_click";
      }
      if (action_name === "resume") {
        action_name = "resume_click";
      }
      const encryptedText = encryptText("12345");
      await fetch("http://localhost:9094/api/v1/action", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Portfolio-View": encryptedText, // Custom encrypted header
        },
        body: JSON.stringify({ action: action_name }), // Example payload
      });
    }
  };

  return (
    <nav className="flex gap-8">
        {links.map((link, index) => {
            return <Link href={link.path} key={index} onClick={() => handleNavClick(link.name)} className={`${link.path === pathName && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`}>{link.name}</Link>
        })}
    </nav> )
}

export default Nav