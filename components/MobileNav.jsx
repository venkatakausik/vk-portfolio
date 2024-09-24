"use client";

import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const MobileNav = () => {
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
    <Sheet>
      <SheetTrigger className="flex justify-center items-center ">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Kausik<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                onClick={() => handleNavClick(link.name)}
                className={`${
                  link.path === pathName &&
                  "text-accent border-b-2 border-accent"
                } text-xl capitalize hover:text-accent transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
