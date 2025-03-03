import React, { useState } from 'react';

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState('General inquiries');
  const [openQuestion, setOpenQuestion] = useState(null);

  const categories = [
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
      // Add questions for this category
    ],
    'Permissions & Privacy': [
      // Add questions for this category
    ]
  };

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <>

      
      <div className="flex items-center justify-center mb-2 max-w-2xl mx-auto mt-24 ">
        <div className="h-[1px] w-[30%] bg-gradient-to-r from-transparent via-[#1D8FEF] to-[#1D8FEF]" />
        <div className="mx-4">
        <img className='w-6' src="/header icons/faq-ico.png" alt="" />
        </div>
        <div className="h-[1px] w-[30%] bg-gradient-to-r from-[#1D8FEF] via-[#1D8FEF] to-transparent" />
      </div>
      <div className="text-center max-w-4xl mx-auto mb-8">
        <h2 className="text-4xl font-bold text-white">Got questions?</h2>
        <h2 className="text-4xl font-bold text-white">
          Well, we've got <span className="text-[#1D8FEF]">answers.</span>
        </h2>
      </div>
      <div className="flex flex-col md:flex-row text-white min-h-screen p-4 md:p-8">
      
      <div className="md:w-1/4 pr-0 md:pr-6">
        {categories.map((category) => (
          <div 
            key={category.title}
            className={`rounded-2xl p-5 mb-4 cursor-pointer transition-all duration-200 ${
              activeCategory === category.title ? 'bg-gray-800' : 'bg-gray-800/50 hover:bg-gray-800/70'
            }`}
            onClick={() => setActiveCategory(category.title)}
          >
            <h3 className="font-semibold text-lg">{category.title}</h3>
            <p className="text-sm text-gray-400 mt-1">{category.description}</p>
          </div>
        ))}
      </div>

      {/* FAQ Content */}
      <div className="md:w-3/4 bg-gray-800 rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-2">{activeCategory}</h2>
        <p className="text-gray-400 mb-6">
          {categories.find(cat => cat.title === activeCategory)?.description}
        </p>

        <div className="space-y-4">
          {faqData[activeCategory]?.map((item, index) => (
            <div key={index} className="border-b border-gray-700 last:border-b-0 overflow-hidden bg-gray-800/50">
              <button
                className="flex justify-between items-center w-full p-4 text-left"
                onClick={() => toggleQuestion(index)}
              >
                <span className="font-medium">{item.question}</span>
                <span className="text-blue-400 text-xl">
                  {openQuestion === index ? "−" : "+"}
                </span>
              </button>
              
              {openQuestion === index && (
                <div className="p-4 pt-0 text-gray-300">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default FAQ;
