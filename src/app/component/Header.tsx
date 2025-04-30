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
    <nav className="py-3 md:py-5 bg-gray-300 sticky top-0 z-50 shadow-sm">
      <Container className="px-4">
        <Flex className="items-center relative">
          {/* Logo */}
          <div className="w-[20%] md:w-[15%] flex items-center">
            <img src={logo.src} alt="Logo" className="max-w-full h-auto" />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden ml-auto text-xl p-2 hover:bg-gray-400/20 rounded-lg transition-colors duration-200"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
          {mobileMenuOpen ?(
             
                <MdOutlineClose className="w-6 h-6" />

          ):(
            <FaBars className="w-6 h-6" />
          )}

          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:block md:w-1/2">
            <ul className="flex justify-center gap-5 lg:gap-10 items-center">
              {navItem.map((item) => (
                <li
                  key={item.id}
                  className="text-[#1A2434] font-outfit text-base lg:text-xl hover:text-[#A4074D] transition-colors duration-200"
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
            } absolute top-full left-0 right-0 bg-gray-300 shadow-lg  md:hidden`}
          >
            <ul className="flex flex-col items-center gap-4 py-6">
              {navItem.map((item) => (
                <li
                  key={item.id}
                  className="text-[#1A2434] font-outfit text-lg hover:text-[#A4074D] transition-colors duration-200 w-full text-center"
                >
                  <Link href={item.link} className="block px-4 py-2">{item.name}</Link>
                </li>
              ))}
            </ul>
            <div className="px-4 pb-6">
              <input
                type="text"
                placeholder="Search"
                className="w-full outline-none border-2 border-[#f5f5f5] py-2 px-4 rounded-lg bg-white focus:border-[#A4074D] transition-colors duration-200"
              />
            </div>
          </div>

          {/* Search and Shopping Bag */}
          <div className="hidden md:block md:w-[35%] lg:w-[30%]">
            <Flex className="justify-end items-center gap-4">
              <div className="cursor-pointer hover:opacity-80 transition-opacity duration-200">
                <img src={bag.src} alt="Shopping bag" className="w-6 h-6" />
              </div>
              <div className="w-full max-w-[250px]">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full outline-none border-2 border-[#f5f5f5] py-2 px-4 rounded-lg bg-white focus:border-[#A4074D] transition-colors duration-200"
                />
              </div>
            </Flex>
          </div>

          {/* Mobile Shopping Bag */}
          <div className="md:hidden flex items-center mr-2">
            <div className="cursor-pointer hover:opacity-80 transition-opacity duration-200">
              <img src={bag.src} alt="Shopping bag" className="w-6 h-6" />
            </div>
          </div>
        </Flex>
      </Container>
    </nav>
  );
}

export default Header;
