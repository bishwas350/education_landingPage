"use client";
import logo from "/public/footerlogo.svg";
import Container from "./Container";
import Flex from "./Flex";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className="bg-[#1A2434] py-10 px-4">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Logo and Description */}
            <div className="">
              <div className="flex gap-4 items-center mb-4 justify-center md:justify-normal">
                <img src={logo.src} alt="Logo" />
                <h4 className="font-semibold font-plus text-2xl text-white">Digilearn</h4>
              </div>
              <p className="text-white font-inter text-sm md:text-base  ">
                Unlock Digital Mastery Effortlessly! Explore and enhance your skills with our user-friendly platform.
              </p>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col items-center md:items-start">
              <h1 className="font-plus font-semibold text-white text-xl md:text-2xl">Quick links</h1>
              <ul className="text-white font-inter text-sm md:text-base mt-4 flex flex-col gap-2">
                <li>About us</li>
                <li>Our Class</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>

            {/* Resources */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h1 className="font-plus font-semibold text-white text-xl md:text-2xl">Resources</h1>
              <ul className="text-white font-inter text-sm md:text-base mt-4 flex flex-col gap-2">
                <li>Support</li>
                <li>Privacy policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>

            {/* Social Media */}
            <div >
              <h1 className="font-plus font-semibold text-white text-xl md:text-2xl">Social media</h1>
              <div className="flex gap-4 mt-4 text-white text-2xl">
                <FaFacebookF />
                <FaInstagram />
                <FaLinkedinIn />
                <FaYoutube />
                <FaTwitter />
              </div>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
