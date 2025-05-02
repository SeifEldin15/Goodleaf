import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import SilverHero from '../components/SecondaryHero/SilverHero'
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
    title: 'Silver Plan FAQ',
    description: 'Learn about our enhanced Silver tier hosting.'
  },
  {
    title: 'Performance & Features',
    description: 'Technical specifications and performance details.'
  },
  {
    title: 'Support & Services',
    description: 'Priority support and additional services.'
  }
];

const faqData = {
  'Silver Plan FAQ': [
    {
      question: 'What makes the Silver plan different from Bronze?',
      answer: 'The Silver plan offers enhanced performance with dedicated Intel+ CPUs, guaranteed higher resource allocation, faster NVMe storage, and priority support. It\'s designed for businesses and applications that require more reliable performance and resources.'
    },
    {
      question: 'Who is the Silver plan ideal for?',
      answer: 'The Silver plan is perfect for growing businesses, medium-traffic websites, e-commerce stores, development teams, and applications that require consistent performance. It balances performance and cost-effectiveness.'
    }
  ],
  'Performance & Features': [
    {
      question: 'What performance improvements can I expect?',
      answer: 'Silver plans offer up to 2x the performance of Bronze plans with dedicated CPU resources, optimized I/O operations, and premium network routes. You\'ll experience faster response times, better handling of traffic spikes, and improved database performance.'
    },
    {
      question: 'Do Silver plans include any additional features?',
      answer: 'Yes, Silver plans include enhanced DDoS protection, more frequent backups (twice daily), dedicated IP addresses, and advanced monitoring tools. You also get higher resource limits and better isolation from other customers.'
    }
  ],
  'Support & Services': [
    {
      question: 'What support benefits come with Silver plans?',
      answer: 'Silver plan customers receive priority support with faster response times, dedicated account managers, and access to phone support during business hours in addition to 24/7 ticket and chat support.'
    },
    {
      question: 'Are there any professional services included?',
      answer: 'Silver plans include one free server migration, quarterly performance reviews, and basic security audits. Additional professional services like load balancing setup, CDN configuration, and custom security hardening are available at discounted rates.'
    }
  ]
};

function Silver() {
  return (
    <div>
      <Navbar />
      <SilverHero />
      <div className='container mx-auto max-w-[95%] md:max-w-[85%] lg:max-w-[85%] px-4'>
        <Pricing plans={plans}/>
        <ServerCompare />
        <FAQ categories={faqCategories} faqData={faqData} />
      </div>
      <Footer />
    </div>
  )
}

export default Silver