import React, { useEffect, useState, useRef } from 'react';

const Timeline = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const timelineRef = useRef(null);

  useEffect(() => {
    const timeline = timelineRef.current;
    
    const handleScroll = () => {
      if (!timeline) return;
      
      // Get timeline position data
      const rect = timeline.getBoundingClientRect();
      const timelineTop = rect.top;
      const timelineHeight = rect.height;
      const viewportHeight = window.innerHeight;
      
      // Calculate how far the timeline is scrolled into view
      let progressValue = 0;
      
      // If timeline is in view
      if (timelineTop < viewportHeight && timelineTop + timelineHeight > 0) {
        // Calculate base progress
        progressValue = (viewportHeight - timelineTop) / (viewportHeight + timelineHeight * 0.8);
        
        // Add delay to the start by adjusting the progress curve
        // This will make the progress bar move slower at the beginning
        progressValue = Math.max(0, (progressValue - 0.2) / 0.8);
        
        // Apply easing function
        progressValue = Math.pow(progressValue, 0.8);
        
        progressValue = Math.max(0, Math.min(1, progressValue));
      }
      
      setScrollProgress(progressValue);
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once to set initial state
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const timelineItems = [
    {
      id: 1,
      title: "4 Tbps DDoS Protection",
      description: "4 Tbps CosmicGuard's and GCore deliver unbeatable DDoS protection for ultimate reliability and security.",
      icon: "/timeline/timeline1.png"
    },
    {
      id: 2,
      title: "Internet Speed",
      description: "From 10 Gbps to an incredible 20 Gbps—try matching that speed. Youcan't. It's unmatched and unrivaled.",
      icon: "/timeline/timeline2.png"
    },
    {
      id: 3,
      title: "Powerful Hardware",
      description: "Powered by Ryzen & AMD EPYC CPUs, high-speed RAM, delivering unmatched performance and reliability.",
      icon: "/timeline/timeline3.png"
    },
    {
      id: 4,
      title: "Windows OS",
      description: "Experience the full benefits of a Windows operating system with unmatched performance and ease.",
      icon: "/timeline/timeline4.png"
    },
    {
      id: 5,
      title: "Worldwide Locations",
      description: "Strategically located data centers in various locations around the world for global performance.",
      icon: "/timeline/timeline5.png"
    }
  ];

  return (
    <div className='max-w-[1200px] mx-auto'>
      <div className="text-center mb-20 ">
        <p className="text-lg mb-4 text-white">Exactly what you can find inside Active Income</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white ">
          Unlock Your <span className="text-blue-500">Full Potential</span>
        </h2>
      </div>

      <div ref={timelineRef} className="relative min-h-screen flex flex-col items-center justify-between py-20">
        {/* Vertical timeline line (background) */}
        <div className="absolute h-full w-1 bg-gray-800/30"></div>
        
        {/* Filled progress line - this fills up as user scrolls */}
        <div 
          className="absolute top-0 w-1 transition-all duration-100" 
          style={{ 
            height: `${scrollProgress * 100}%`,
            background: 'linear-gradient(to bottom, #080411, #1E75FF)'
          }}
        ></div>
        
        {/* Timeline items with circles */}
        <div className="w-full flex flex-col space-y-24">
          {timelineItems.map((item, index) => {
            // Special case for first item - activate as soon as there's any progress
            const activationThreshold = (index + 1.2) / (timelineItems.length + 1.2);
            const isReached = index === 0 
              ? scrollProgress > 0 
              : scrollProgress >= activationThreshold;
            const isLast = index === timelineItems.length - 1;
            const isFirst = index === 0;
            
            return (
              <div 
                key={item.id} 
                className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} w-full`}
              >
                {/* Content - images on the left side */}
                <div 
                  className={`w-5/12 p-6 ${index % 2 === 0 ? 'text-left ml-8' : 'text-right mr-8'}`}
                >
                  <div className="flex items-center mb-2 text-blue-500 text-4xl font-bold text-center justify-center">
                    <span className="mr-4">
                      <img 
                        src={item.icon} 
                        alt={item.title} 
                        className="h-12 w-12 object-contain"
                      />
                    </span>
                    <h3 className="text-2xl text-center">{item.title}</h3>
                  </div>
                  <p className="text-white/80 text-center">{item.description}</p>
                </div>
                {/* Circle indicator */}
                <div 
                  className={`absolute left-1/2 transform -translate-x-1/2 h-[15px] w-[15px] rounded-full border-2 z-10 ${
                    isReached ? 'border-[#1E75FF] bg-[#1E75FF]' : 'border-gray-600 bg-gray-900'
                  }`}
                >
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
