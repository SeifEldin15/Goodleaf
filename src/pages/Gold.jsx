import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import GoldHero from '../components/SecondaryHero/GoldHero'
import Footer from '../components/Footer/Footer'
import Pricing from '../components/Pricing/Pricing'
import FAQ from '../components/FAQ/FAQ'
import ServerCompare from '../components/ServerCompare/ServerCompare'
import LazyImage from '../components/LazyImage/LazyImage'

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
    title: 'Gold Plan Benefits',
    description: 'Learn about our premium Gold hosting tier.'
  },
  {
    title: 'Enterprise Features',
    description: 'Advanced features for business-critical applications.'
  },
  {
    title: 'Premium Support',
    description: 'White-glove service and dedicated resources.'
  }
];

const faqData = {
  'Gold Plan Benefits': [
    {
      question: 'What makes the Gold plan our premium offering?',
      answer: 'The Gold plan represents our highest tier of service with Ryzen VDS technology, dedicated resources, the fastest NVMe storage, and enterprise-grade features. It offers the best performance possible with guaranteed CPU time and priority on all infrastructure.'
    },
    {
      question: 'Who should choose the Gold plan?',
      answer: 'The Gold plan is ideal for high-traffic websites, mission-critical applications, e-commerce platforms handling numerous transactions, resource-intensive applications, and businesses that require maximum uptime and performance guarantees.'
    }
  ],
  'Enterprise Features': [
    {
      question: 'What enterprise features are included with Gold plans?',
      answer: 'Gold plans come with advanced load balancing, auto-scaling capabilities, multi-server synchronization, enterprise-grade security with intrusion detection, real-time monitoring with anomaly detection, and guaranteed 99.99% uptime SLA.'
    },
    {
      question: 'How does the performance compare to other plans?',
      answer: 'Gold plans deliver up to 4x the performance of our Bronze plans and 2x the performance of Silver plans. With dedicated Ryzen processors, maximum I/O priority, and premium network routes, you\'ll experience the fastest possible response times and processing capability.'
    }
  ],
  'Premium Support': [
    {
      question: 'What level of support comes with the Gold plan?',
      answer: 'Gold customers receive VIP support with 15-minute response guarantees, a dedicated technical account manager available 24/7, priority issue resolution, monthly performance consultations, and access to our senior engineering team.'
    },
    {
      question: 'Are there additional professional services included?',
      answer: 'Yes, Gold plans include complimentary server migrations, custom configuration assistance, security hardening, performance optimization, disaster recovery planning, and quarterly business reviews with our technical team.'
    }
  ]
};

function Gold() {
  return (
    <div>
      <Navbar />
      <GoldHero />
      <div className='container mx-auto max-w-[95%] md:max-w-[85%] lg:max-w-[85%] px-4'>
        <div className="relative">
          <div className="absolute -left-[35%] md:-left-[12%] lg:-left-[16%] top-[50px] z-0">
            <LazyImage src="/blue-ball.webp" alt="Blue ball" className="w-96 h-96 opacity-90" />
          </div>
          <Pricing plans={plans} />
        </div>

        <div className="relative">
          <div className="absolute -right-[40%] md:-right-[18%] lg:-right-[24%] top-[50px] z-0">
            <LazyImage src="/purple-ball.webp" alt="Purple ball" className="w-96 h-96" />
          </div>
          <ServerCompare />
        </div>

        <div className="relative">
          <div className="absolute -left-[35%] md:-left-[15%] lg:-left-[20%] top-[50px] z-0">
            <LazyImage src="/blue-ball.webp" alt="Blue ball" className="w-96 h-96 opacity-90" />
          </div>
          <FAQ categories={faqCategories} faqData={faqData} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Gold