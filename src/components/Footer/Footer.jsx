import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaDiscord, FaInstagram } from 'react-icons/fa';
import { SiX } from 'react-icons/si';
import LazyImage from '../LazyImage/LazyImage';

const Footer = () => {
    return (
        <footer className="bg-[#0F1429] text-white py-12 mt-20">
            <div className="container px-4 md:px-0 mx-auto flex flex-col md:flex-row justify-between max-w-7xl">
                <div className="flex flex-col mb-8 md:mb-4 items-center md:items-start">
                    <Link to="/">
                        <div className="max-w-48 md:max-w-56 mb-4">
                            <LazyImage src="/logo.webp" alt="GoodLeaf" className="w-full" />
                        </div>
                    </Link>
                    <p className="text-sm max-w-56 text-center md:text-left text-gray-400">
                        Fast, Affordable, Game Servers<br />
                        Rated 4.8/5 by TrustPilot
                    </p>
                    <div className="flex space-x-8 mt-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#1D90F0] hover:text-blue-300 transition-colors">
                            <FaFacebook size={20} />
                        </a>
                        <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-[#1D90F0] hover:text-blue-300 transition-colors">
                            <SiX size={20} />
                        </a>
                        <a href="https://discord.gg/goodleaf" target="_blank" rel="noopener noreferrer" className="text-[#1D90F0] hover:text-blue-300 transition-colors">
                            <FaDiscord size={20} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#1D90F0] hover:text-blue-300 transition-colors">
                            <FaInstagram size={20} />
                        </a>
                    </div>
                </div>
                <div className="flex flex-col mb-8 md:mb-4 text-center md:text-left">
                    <h3 className="font-[600] text-[24px] text-[#1D90F0] mb-4 font-['Rajdhani']">Help Center</h3>
                    <Link to="/contact" className="text-gray-400 mb-2">Contact Us</Link>
                    <a href="https://discord.gg/goodleaf" target="_blank" rel="noopener noreferrer" className="text-gray-400 mb-2">Report Abuse</a>
                    <a href="https://discord.gg/goodleaf" target="_blank" rel="noopener noreferrer" className="text-gray-400 mb-2">Discord</a>
                </div>
                <div className="flex flex-col mb-8 md:mb-4 text-center md:text-left">
                    <h3 className="font-[600] text-[24px] text-[#1D90F0] mb-4 font-['Rajdhani']">Partners</h3>
                    <a href="https://discord.com/oauth2/authorize?response_type=code&client_id=1266077438396338197&state=RAb__dmpA7lezjXsRnysvf7X3Xwl9eRvf5Uul_QaeDs&scope=identify+email&redirect_uri=https%3A%2F%2Fapi.cdev.bot%2Fapi%2Fauth%2Fsign-in%2Fcallback" target="_blank" rel="noopener noreferrer" className="text-gray-400 mb-2">Community Development (cDev)</a>
                    <a href="https://www.baddbloodcustoms.com/#/" target="_blank" rel="noopener noreferrer" className="text-gray-400 mb-2">Badd Blood Customs</a>
                    <a href="https://deltarix-scripts.tebex.io/" target="_blank" rel="noopener noreferrer" className="text-gray-400 mb-2">Deltarix Scripts</a>
                    <a href="https://rep.tebex.io/" target="_blank" rel="noopener noreferrer" className="text-gray-400 mb-2">Rep Scripts</a>
                    <a href="https://www.quasar-store.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 mb-2">Quasar Store</a>
                    <a href="#" className="text-gray-400 mb-2">StnScripts</a>
                    <a href="https://fivem.apx-studios.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 mb-2">Apex Studios</a>
                </div>
                <div className="flex flex-col mb-8 md:mb-4 text-center md:text-left">
                    <h3 className="font-[600] text-[24px] text-[#1D90F0] mb-4 font-['Rajdhani']">Our Products</h3>
                    <Link to="/silver" className="text-gray-400 mb-2">(High Performance) Ryzen VDS Hosting</Link>
                    <Link to="/gold" className="text-gray-400 mb-2">Intel+ VPS Hosting</Link>
                    <Link to="/bronze" className="text-gray-400 mb-2">Intel VPS Hosting</Link>
                    <Link to="/Colocation" className="text-gray-400 mb-2">Colocation</Link>
                    <a href="#" className="text-gray-400 mb-2">Web Hosting</a>
                    <a href="#" className="text-gray-400 mb-2">Reseller Web Hosting</a>
                    <a href="https://goodleaf.cloud/dedi-server" target="_blank" rel="noopener noreferrer" className="text-gray-400 mb-2">Dedicated Servers</a>
                    <Link to="/affiliate-program" className="text-gray-400 mb-2">Affiliate Program</Link>
                </div>
                <div className="flex flex-col mb-8 md:mb-4 text-center md:text-left">
                    <h3 className="font-[600] text-[24px] text-[#1D90F0] mb-4 font-['Rajdhani']">Account</h3>
                    <a href="#" className="text-gray-400 mb-2">Client Area</a>
                    <a href="#" className="text-gray-400 mb-2">Support Tickets</a>
                    <a href="#" className="text-gray-400 mb-2">Renewals & Billing</a>
                    <Link to="/login" className="text-gray-400 mb-2">Create an Account</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
