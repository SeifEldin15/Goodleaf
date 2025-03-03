import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { MdOutlineEmail } from 'react-icons/md'
import { BsPhone, BsDiscord } from 'react-icons/bs'

function Contact() {
  return (
    <>
      <div className="bg-[url('/get-in-touch.png')] bg-cover bg-center min-h-screen ">
        <Navbar />
        <div className="container mx-auto px-4 py-24 text-white text-center">
          <h1 className="text-6xl font-bold mb-6 mt-20">GET IN TOUCH WITH US</h1>
          <p className="mb-16 max-w-3xl mx-auto text-xl">
            Every guide is trained and excited to work with you, whether you need help with a password reset or
            you're looking for a team to build your complete web presence.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="mb-6 p-4 rounded-full border-2 border-white">
                <MdOutlineEmail className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Email</h2>
              <p className="text-xl mb-2">support@goodleafdev.com</p>
              <p className="text-lg">Mail Us 24/7</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="mb-6 p-4 rounded-full border-2 border-white">
                <BsPhone className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Phone</h2>
              <p className="text-xl mb-2">+1 (609) 445-4316</p>
              <p className="text-lg">Contact Us (Mon-Fri)</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="mb-6 p-4 rounded-full border-2 border-white">
                <BsDiscord className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Discord</h2>
              <p className="text-xl mb-2">discord.gg/GZKfRnj2H</p>
              <p className="text-lg">Join our Discord</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact
