"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../public/logo.png";
import "../css/Navbar.css";

export default function Header() {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNavBar = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <header>
      <Link href="/">
        <Image src={logo} alt="Logo" className="logo" />
      </Link>
      <nav className={isNavVisible ? "responsive_nav" : ""}>
        <Link href="/who-we-are">Who We Are</Link>
        <Link href="/our-team" className="mr-2">
          Our Team
        </Link>
        <Link href="/gst" className="mr-2">
          GST
        </Link>
        <Link href="/services">Services</Link>
        <Link href="/contact-us">Contact Us</Link>
        <button onClick={toggleNavBar} className="nav-btn nav-close-btn">
          <FaTimes />
        </button>
      </nav>
      <button onClick={toggleNavBar} className="nav-btn">
        <FaBars />
      </button>
    </header>
  );
}
