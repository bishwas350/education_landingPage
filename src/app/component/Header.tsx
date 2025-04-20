"use client";
import React, { useState } from "react";
import Container from "./Container";
import logo from "/public/Logo.webp";
import Flex from "./Flex";
import Link from "next/link";
import bag from "/public/ShoppingBag.webp";
import { FaBars } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItem = [
    { id: 1, name: "About us", link: "/" },
    { id: 2, name: "Our classes", link: "/" },
    { id: 3, name: "Blog", link: "/" },
    { id: 4, name: "Contact", link: "/" },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  return (
    <nav className="py-5 bg-gray-300">
      <Container className="px-4 ">
        <Flex className="items-center relative px-4">
          {/* Logo */}
          <div className="w-[20%] md:w-[15%] flex items-center">
            <img src={logo.src} alt="Logo" className="max-w-full h-auto" />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden ml-auto flex items-center p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
          {mobileMenuOpen ?(
             
                <MdOutlineClose />

          ):(
            <FaBars />
          )}

          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:block md:w-1/2">
            <ul className="flex justify-center gap-5 lg:gap-10 items-center">
              {navItem.map((item) => (
                <li
                  key={item.id}
                  className="text-[#1A2434] font-outfit text-base lg:text-xl"
                >
                  <Link href={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`${
              mobileMenuOpen ? "block" : "hidden"
            } absolute top-full left-0 right-0 bg-gray-300 z-50 py-4 md:hidden`}
          >
            <ul className="flex flex-col items-center gap-4">
              {navItem.map((item) => (
                <li
                  key={item.id}
                  className="text-[#1A2434] font-outfit text-lg"
                >
                  <Link href={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 px-4">
              <input
                type="text"
                placeholder="Search "
                className="w-full outline-none border-2 border-[#f5f5f5] py-1.5 px-1.5 rounded-md bg-white"
              />
            </div>
          </div>

          {/* Search and Shopping Bag */}
          <div className="hidden md:block md:w-[35%] lg:w-[30%]">
            <Flex className="justify-end items-center gap-2.5">
              <div className="">
                <img src={bag.src} alt="bag" />
              </div>
              <div className="">
                <input
                  type="text"
                  placeholder="Search "
                  className="outline-none border-2 border-[#f5f5f5] py-1.5 px-1.5 rounded-md bg-white"
                />
              </div>
            </Flex>
          </div>

          {/* Mobile Shopping Bag */}
          <div className="md:hidden flex items-center mr-4">
            <img src={bag.src} alt="bag" className="w-6 h-6" />
          </div>
        </Flex>
      </Container>
    </nav>
  );
}

export default Header;
