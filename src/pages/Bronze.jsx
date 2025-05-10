import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import BronzeHero from '../components/SecondaryHero/BronzeHero'
import Footer from '../components/Footer/Footer'
import Pricing from '../components/Pricing/Pricing'
import FAQ from '../components/FAQ/FAQ'
import ServerCompare from '../components/ServerCompare/ServerCompare'

const plans = [
    {
      title: "Ryzen VDS",
      price: "24.99",
      labels: [],
      features: [
        "Ryzen CPU",
        "Unlimited Bandwidth",
        "Custom OS Allowed",
        "NVMe Storage",
        "24/7 Support",
        "Nightly Backups",
        "DDoS Protection"
      ],
      location: "Ashburn, Virginia & Dallas, Texas"
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
        "NVMe or HDD Storage",
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
        "Ryzen 7 Series CPU",
        "Unlimited Bandwidth",
        "Bare Metal Server",
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
    title: 'Bronze Plan FAQ',
    description: 'Learn about our Bronze tier hosting services.'
  },
  {
    title: 'Bronze Technical Support',
    description: 'Technical details and support information.'
  },
  {
    title: 'Billing & Upgrades',
    description: 'Payment, billing cycles, and upgrade options.'
  }
];

const faqData = {
  'Bronze Plan FAQ': [
    {
      question: 'What makes the Bronze plan unique?',
      answer: 'The Bronze plan offers an excellent balance of performance and affordability, ideal for small to medium websites, developers, and startups. It features reliable Intel processors, NVMe or HDD storage options, and our standard security package.'
    },
    {
      question: 'Is the Bronze plan sufficient for my website?',
      answer: 'The Bronze plan is ideal for websites with moderate traffic, personal projects, development environments, and small business sites. If you experience consistent high traffic volumes or need advanced features, you might consider our Silver or Gold plans.'
    }
  ],
  'Bronze Technical Support': [
    {
      question: 'What kind of technical support is included?',
      answer: 'Bronze plan customers receive 24/7 technical support through our ticket system and email with typical response times under 2 hours. Live chat is available during business hours.'
    },
    {
      question: 'Can I upgrade my hardware specifications later?',
      answer: 'Yes, you can seamlessly upgrade your Bronze plan to higher specs or different plans without downtime. Our system allows for easy vertical scaling as your needs grow.'
    }
  ],
  'Billing & Upgrades': [
    {
      question: 'How does billing work for the Bronze plan?',
      answer: 'Bronze plans are billed monthly by default, but we offer discounts for quarterly, semi-annual, and annual billing cycles. You can change your billing cycle at any time through your account dashboard.'
    },
    {
      question: 'Is there a money-back guarantee?',
      answer: 'Yes, all Bronze plans come with a 14-day money-back guarantee, allowing you to test our services risk-free.'
    }
  ]
};

function Bronze() {
  return (
    <div>
      <Navbar />
      <BronzeHero />
      <div className='container mx-auto max-w-[95%] md:max-w-[85%] lg:max-w-[85%] px-4'>
        <div className="flex items-center justify-center gap-4 mb-4 mt-20">
          <div className="h-[1px] w-[300px] bg-[#007BFF]"></div>
          <div className="border border-[#1D90F9] px-[133.35px] py-[8.5px] shadow-[0_10px_10px_rgba(29,144,249,0.6)]">
            <p className="text-[#1D90F9] text-sm ">FEATURED THIS MONTH</p>
          </div>
          <div className="h-[1px] w-[300px] bg-[#007BFF]"></div>
        </div> 

        <div className="relative">
          <div className="absolute -left-[6%] top-[50px] z-0">
            <img src="/blue-ball.png" alt="Blue ball" className="w-96 h-96 opacity-90" />
          </div>
          <Pricing plans={plans}/>
        </div>

        <div className="relative">
          <div className="absolute -right-[11%] top-[50px] z-0">
            <img src="/purple-ball.png" alt="Purple ball" className="w-96 h-96" />
          </div>
          <ServerCompare />
        </div>

        <div className="relative">
          <div className="absolute -left-[9%] top-[50px] z-0">
            <img src="/blue-ball.png" alt="Blue ball" className="w-96 h-96 opacity-90" />
          </div>
          <FAQ categories={faqCategories} faqData={faqData} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Bronze
