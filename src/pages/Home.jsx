import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Pricing from '../components/Pricing/Pricing'
import LogoSlider from '../components/LogoSlider/LogoSlider'
import OSes from '../components/OSes/OSes'
import Table from '../components/Table/Table'
import Footer from '../components/Footer/Footer'
import Graph from '../components/Graph/Graph'
import FAQ from '../components/FAQ/FAQ'
import ReviewSlider from '../components/ReviewSlider/ReviewSlider'
import Refrences from '../components/Refrences/Refrences'
import Timeline from '../components/Timeline/Timeline'
import Map from '../components/Map/Map'

const plans = [
    {
      title: "Ryzen VDS",
      price: "24.99",
      labels: [], // Adapted from image (no labels shown)
      features: [
        "Ryzen CPU",
        "Unlimited Bandwidth",
        "Custom OS Allowed",
        "NVMe Storage",
        "24/7 Support",
        "Nightly Backups",
        "DDoS Protection" // Combined "Top Features" and "Always Includes"
      ],
      location: "Ashburn, Virginia & Dallas, Texas" // Kept existing location info
    },{
      title: "Intel+ VPS",
      price: "12.99",
      labels: [],
      features: [
        "Intel CPU",
        "Unlimited Bandwidth",
        "Custom OS Allowed",
        "NVMe Storage",
        "24/7 Support",
        "Nightly Backups",
        "DDoS Protection"
      ],
      location: "Ashburn, Virginia & Dallas, Texas"
    },{
      title: "Intel VPS",
      price: "9.99",
      labels: [],
      features: [
        "Intel CPU",
        "Unlimited Bandwidth",
        "Custom OS Allowed",
        "NVMe or HDD Storage", // Specific feature from image
        "24/7 Support",
        "Nightly Backups",
        "DDoS Protection"
      ],
      location: "Ashburn, Virginia & Dallas, Texas",
    },{
      title: "Dedicated",
      price: "99.99",
      labels: [],
      features: [
        "Ryzen 7 Series CPU", // Specific feature from image
        "Unlimited Bandwidth",
        "Bare Metal Server",    // Specific feature from image
        "NVMe Storage",
        "24/7 Support",
        "Nightly Backups",
        "DDoS Protection"
      ],
      location: "Ashburn, Virginia & Dallas, Texas"
    }
  ];

const faqCategories = [
  {
    title: 'General inquiries',
    description: 'New around here? Start with the basics.'
  },
  {
    title: 'VPS Hosting Features',
    description: 'Dive deeper into GoodLeaf\'s servers/features.'
  },
  {
    title: 'Permissions & Privacy',
    description: 'We take security & privacy seriously.'
  }
];

const faqData = {
  'General inquiries': [
    {
      question: 'What is a Virtual Private Server (VPS)?',
      answer: 'A Virtual Private Server (VPS) is a virtualized server that mimics a dedicated server within a shared hosting environment. It provides dedicated resources and greater control than shared hosting while being more cost-effective than a fully dedicated server.'
    },
    {
      question: 'What about VPS vs. Dedicated?',
      answer: 'VPS hosting shares physical hardware with other users but guarantees you dedicated resources. Dedicated hosting gives you an entire physical server. VPS is more affordable and suitable for most websites, while dedicated servers offer maximum performance and are ideal for high-traffic or resource-intensive applications.'
    },
    {
      question: 'How do I get started with VPS hosting?',
      answer: 'To get started with VPS hosting, select a plan based on your resource needs, choose your operating system, complete the signup process, and then access your server through SSH or a control panel. We provide detailed setup guides and 24/7 support to help you get up and running.'
    },
    {
      question: 'Wait... if we\'re talking about a VPS, what is a VPN then?',
      answer: 'While they sound similar, a VPS (Virtual Private Server) is for hosting websites and applications, while a VPN (Virtual Private Network) is a service that encrypts your internet connection to protect your privacy and allow you to browse securely, especially on public networks.'
    },
    {
      question: 'When should I use VPS hosting over Shared?',
      answer: 'Consider VPS hosting over shared hosting when you need guaranteed resources, more control over your server environment, increased security, or when your website traffic is growing. It\'s also better for business websites, e-commerce stores, and applications that require specific server configurations.'
    },
    {
      question: 'I already have hosting, but want to switch to VPS. Any tips?',
      answer: 'When migrating to a VPS, first back up all your data, plan for potential downtime, check compatibility requirements, and consider whether you need managed or unmanaged hosting based on your technical skills. Our migration team can help make the transition smooth and minimize disruptions.'
    }
  ],
  'VPS Hosting Features': [
    {
      question: 'What operating systems do you support?',
      answer: 'We support a wide range of operating systems including various Linux distributions (Ubuntu, CentOS, Debian, etc.) and Windows Server options. You can choose your preferred OS during setup or change it later.'
    },
    {
      question: 'Do you offer managed VPS hosting?',
      answer: 'Yes, we offer both managed and unmanaged VPS hosting options. With managed hosting, we handle updates, security patches, and general maintenance, while unmanaged gives you complete control over your server environment.'
    }
  ],
  'Permissions & Privacy': [
    {
      question: 'How secure are your VPS solutions?',
      answer: 'Our VPS solutions include enterprise-grade security features like DDoS protection, firewall configuration, regular security updates, and nightly backups. We also use isolated virtualization technology to ensure one VPS cannot access another.'
    },
    {
      question: 'What kind of data privacy do you provide?',
      answer: 'We adhere to strict data privacy practices and comply with relevant regulations. Your data remains yours, and we implement comprehensive security measures to protect it. We don\'t access your VPS without permission except in emergency situations.'
    }
  ]
};

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container mx-auto max-w-[95%] md:max-w-[85%] lg:max-w-[85%] px-4 mb-[50px]'>
        <LogoSlider />
      </div>
      <OSes />
      <div className='container mx-auto max-w-[95%] md:max-w-[85%] lg:max-w-[85%] px-4'>
        <div className="relative">
          <div className="absolute -left-[6%] top-[50px] z-0">
            <img src="/blue-ball.png" alt="Blue ball" className="w-96 h-96 opacity-90" />
          </div>
          <Pricing plans={plans} />
        </div>

        <div className='mt-[100px] flex justify-center mx-auto max-w-[95%] md:max-w-[85%] lg:max-w-[85%] px-4'>
          <div className="relative">
            <div className="absolute -right-[30%] top-[100px] z-0">
              <img src="/purple-ball.png" alt="Purple ball" className="w-96 h-96" />
            </div>
            <div className="absolute -left-[30%] top-[600px] z-0">
              <img src="/blue-ball.png" alt="Blue ball" className="w-96 h-96 opacity-90" />
            </div>
            <div className="absolute -right-[30%] top-[1100px] z-0">
              <img src="/blue-ball.png" alt="Blue ball" className="w-96 h-96 opacity-90" />
            </div>
        
            <Timeline />
          </div>
        </div>

        <div className='mt-[50px] mx-auto max-w-[95%] px-4'>
          <div className="relative">
            <div className="absolute -left-[12%] top-[50px] z-0">
              <img src="/blue-ball.png" alt="Blue ball" className="w-96 h-96 opacity-90" />
            </div>
            <Table />
          </div>
        </div>

        <div className='mt-[100px] mx-auto max-w-[95%] px-4'>
          <div className="relative">
            <div className="absolute -right-[11%] top-[50px] z-0">
              <img src="/purple-ball.png" alt="Purple ball" className="w-96 h-96" />
            </div>
            <Graph />
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-[6%] top-[-60px] z-0">
            <img src="/blue-ball.png" alt="Blue ball" className="w-96 h-96 opacity-90" />
          </div>
          <Refrences />
        </div>
      </div>

      <div className="relative">
        <div className="absolute -right-[0%] top-[10px] z-0">
          <img src="/purple-ball.png" alt="Purple ball" className="w-96 h-96" />
        </div>
        <ReviewSlider />
      </div>

      <div className='container mx-auto max-w-[95%] md:max-w-[85%] lg:max-w-[85%] px-4'>
        <div className="relative">
          <div className="absolute -left-[9%] top-[50px] z-0">
            <img src="/blue-ball.png" alt="Blue ball" className="w-96 h-96 opacity-90" />
          </div>
          <FAQ categories={faqCategories} faqData={faqData} />
        </div>
      </div>

      <div className="relative">
        <div className="absolute -right-[0%] top-[50px] z-0">
          <img src="/purple-ball.png" alt="Purple ball" className="w-96 h-96" />
        </div>
        <Map />
      </div>

      <Footer />
    </div>
  )
}

export default Home