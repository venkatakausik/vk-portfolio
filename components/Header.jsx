"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { encryptText } from "@/utils/encryption";

const Header = () => {

    const handleHireMeClick = async () => {
      const encryptedText = encryptText("12345");
      await fetch("http://localhost:9094/api/v1/action", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Portfolio-View": encryptedText, // Custom encrypted header
        },
        body: JSON.stringify({ action: "contact_click" }), // Example payload
      });
    };

    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                <h1 className="text-4xl font-semibold">
                    Kausik<span className="text-accent">.</span>
                </h1>
                </Link>
                <div className="hidden xl:flex items-center gap-8">
                <Nav />
                <Link href="/contact">
                    <Button onClick={handleHireMeClick}>
                        Hire me
                    </Button>
                </Link>
                </div>
                <div className="xl:hidden">
                <MobileNav />
                </div>
            </div>
        </header>
    )
}
export default Header