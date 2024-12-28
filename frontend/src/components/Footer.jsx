
import footerLogo  from "../assets/footer-logo.png"
import React, { useEffect } from 'react';

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
import AOS from 'aos';
import 'aos/dist/aos.css';


const Footer = () => {
  useEffect(() => {
    AOS.init(); 
  }, []);

  return (
    
<footer className="bg-aqua text-gray-800 py-10 px-4">

<div data-aos="fade-up" data-aos-duration="1000">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,192L48,176C96,160,192,128,288,106.7C384,85,480,75,576,80C672,85,768,107,864,128C960,149,1056,171,1152,170.7C1248,171,1344,149,1392,138.7L1440,128V0H1392C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0H0V192Z"
          ></path>
        </svg>
      </div>
{/* Top Section */}
<div className="flex  justify-between w-full mb-4 md:mb-0">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
        <FaFacebook size={24} />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
        <FaTwitter size={24} />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
        <FaInstagram size={24} />
      </a>
    </div>


      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
       
        <div className="md:w-1/2 w-full">
          <img src={footerLogo} alt="Logo" className="mb-5 w-36" />
          {/* <ul className="flex flex-col md:flex-row gap-4">
            <li><a href="#home" className="hover:text-primary">Home</a></li>
            <li><a href="#services" className="hover:text-primary">Services</a></li>
            <li><a href="#about" className="hover:text-primary">About Us</a></li>
            <li><a href="#contact" className="hover:text-primary">Contact</a></li>
          </ul> */}
        </div>

        {/* Right Side - Newsletter */}
        <div className="md:w-1/2 w-full">
          <p className="mb-4">
          Stay Connected!


          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Send feedback "             

              className="w-full px-4 py-2 rounded-l-md text-black"
            />
            <button className="bg-primary px-6 py-2 rounded-r-md hover:bg-primary-dark">
              Send 
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center mt-10 border-t border-gray-700 pt-6">
      
        <ul className="flex gap-6 mb-4 md:mb-0">
            <li><a href="#home" className="hover:text-primary">Home</a></li>
            <li><a href="#services" className="hover:text-primary">Services</a></li>
            <li><a href="#about" className="hover:text-primary">About Us</a></li>
            <li><a href="#contact" className="hover:text-primary">Contact</a></li>
          
        
        </ul>
        <ul className="flex gap-6 mb-4 md:mb-0">
      
          
          <li><a href="#privacy" className="hover:text-primary">Privacy Policy</a></li>
          <li><a href="#terms" className="hover:text-primary">Terms of Service</a></li>
        </ul>

     
        <div className="flex gap-6">
        
        </div>
      </div>
      <div className="bg-gray-800 text-center text-white py-4 mt-6">
        <p>© 2024  BD, ALL RIGHTS RESERVED. DESIGNED & DEVELOPED BY MEER EHSAN RUMY</p>
      </div>
    </footer>
  )
}

export default Footer