import React from 'react';
import { FaFacebook, FaDiscord, FaInstagram } from 'react-icons/fa';
import { SiX } from 'react-icons/si';

const Footer = () => {
    return (
        <footer className="bg-[#0F1429] text-white py-12">
            <div className="container px-4 md:px-0 mx-auto flex flex-col md:flex-row justify-between max-w-7xl">
                <div className="flex flex-col mb-8 md:mb-4 items-center md:items-start">
                    <img src="/logo.png" alt="GoodLeaf" className="max-w-48 md:max-w-56 mb-4" />
                    <p className="text-sm max-w-56 text-center md:text-left text-gray-400">
                        Fast, Affordable, Game Servers<br />
                        Rated 4.8/5 by TrustPilot
                    </p>
                    <div className="flex space-x-8 mt-4">
                        <a href="#" className="text-[#1D90F0] hover:text-blue-300 transition-colors">
                            <FaFacebook size={20} />
                        </a>
                        <a href="#" className="text-[#1D90F0] hover:text-blue-300 transition-colors">
                            <SiX size={20} />
                        </a>
                        <a href="#" className="text-[#1D90F0] hover:text-blue-300 transition-colors">
                            <FaDiscord size={20} />
                        </a>
                        <a href="#" className="text-[#1D90F0] hover:text-blue-300 transition-colors">
                            <FaInstagram size={20} />
                        </a>
                    </div>
                </div>
                <div className="flex flex-col mb-8 md:mb-4 text-center md:text-left">
                    <h3 className="font-[600] text-[24px] text-[#1D90F0] mb-4 font-['Rajdhani']">Help Center</h3>
                    <a href="#" className="text-gray-400 mb-2">Contact Us</a>
                    <a href="#" className="text-gray-400 mb-2">Report Abuse</a>
                    <a href="#" className="text-gray-400 mb-2">Discord</a>
                </div>
                <div className="flex flex-col mb-8 md:mb-4 text-center md:text-left">
                    <h3 className="font-[600] text-[24px] text-[#1D90F0] mb-4 font-['Rajdhani']">Partners</h3>
                    <a href="#" className="text-gray-400 mb-2">Community Development (cDev)</a>
                    <a href="#" className="text-gray-400 mb-2">Badd Blood Customs</a>
                    <a href="#" className="text-gray-400 mb-2">Deltarix Scripts</a>
                    <a href="#" className="text-gray-400 mb-2">Rep Scripts</a>
                    <a href="#" className="text-gray-400 mb-2">Quasar Store</a>
                    <a href="#" className="text-gray-400 mb-2">StnScripts</a>
                    <a href="#" className="text-gray-400 mb-2">Apex Studios</a>
                </div>
                <div className="flex flex-col mb-8 md:mb-4 text-center md:text-left">
                    <h3 className="font-[600] text-[24px] text-[#1D90F0] mb-4 font-['Rajdhani']">Our Products</h3>
                    <a href="#" className="text-gray-400 mb-2">(High Performance) Ryzen VDS Hosting</a>
                    <a href="#" className="text-gray-400 mb-2">Intel+ VPS Hosting</a>
                    <a href="#" className="text-gray-400 mb-2">Intel VPS Hosting</a>
                    <a href="#" className="text-gray-400 mb-2">Colocation</a>
                    <a href="#" className="text-gray-400 mb-2">Web Hosting</a>
                    <a href="#" className="text-gray-400 mb-2">Reseller Web Hosting</a>
                    <a href="#" className="text-gray-400 mb-2">Dedicated Servers</a>
                </div>
                <div className="flex flex-col mb-8 md:mb-4 text-center md:text-left">
                    <h3 className="font-[600] text-[24px] text-[#1D90F0] mb-4 font-['Rajdhani']">Account</h3>
                    <a href="#" className="text-gray-400 mb-2">Client Area</a>
                    <a href="#" className="text-gray-400 mb-2">Support Tickets</a>
                    <a href="#" className="text-gray-400 mb-2">Renewals & Billing</a>
                    <a href="#" className="text-gray-400 mb-2">Create an Account</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
