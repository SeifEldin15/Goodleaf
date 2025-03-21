import React, { useEffect, useState, useRef } from 'react';

const Timeline = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [itemsVisibility, setItemsVisibility] = useState([]);
  const timelineRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    // Initialize visibility state for each item
    setItemsVisibility(new Array(timelineItems.length).fill(0));
    
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
        // Calculate base progress - use 90% of viewport height for mobile, full height for desktop
        const effectiveViewportHeight = window.innerWidth < 768 ? viewportHeight * 0.9 : viewportHeight;
        progressValue = (effectiveViewportHeight - timelineTop) / (effectiveViewportHeight + timelineHeight * 0.8);
        
        // Add delay to the start by adjusting the progress curve
        progressValue = Math.max(0, (progressValue - 0.2) / 0.8);
        
        // Apply easing function
        progressValue = Math.pow(progressValue, 0.8);
        
        // Limit progress to 90% on all screen sizes
        progressValue = Math.max(0, Math.min(0.95, progressValue));
      }
      
      setScrollProgress(progressValue);
      
      // Calculate visibility for each timeline item
      const newItemsVisibility = itemRefs.current.map(itemRef => {
        if (!itemRef) return 0;
        
        const itemRect = itemRef.getBoundingClientRect();
        const itemVisiblePosition = (viewportHeight - itemRect.top) / viewportHeight;
        
        // Value between 0 and 1 indicating how visible the item is
        return Math.max(0, Math.min(1, (itemVisiblePosition - 0.2) * 1.5));
      });
      
      setItemsVisibility(newItemsVisibility);
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
    },
    {
      id: 6,
      title: "24/7 Support",
      description: "Round-the-clock technical support team ready to assist you with any questions or concerns.",
      icon: "/timeline/timeline5.png"
    }
  ];

  return (
    <div className='w-full'>
      <div className="text-center mb-12 md:mb-20">
        <p className="text-lg mb-4 text-white">Exactly what you can find inside Active Income</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          Unlock Your <span className="text-blue-500">Full Potential</span>
        </h2>
      </div>

      <div ref={timelineRef} className="relative min-h-[90vh] md:min-h-screen flex flex-col items-center justify-between py-8 md:py-16">
        {/* Vertical timeline line (background) - left on mobile, center on desktop */}
        <div className="absolute h-[90%] w-1 bg-gray-800/30 left-0 md:left-1/2 md:-translate-x-1/2"></div>
        
        {/* Filled progress line - left on mobile, center on desktop */}
        <div 
          className="absolute top-0 w-1 h-[90%] left-0 md:left-1/2 md:-translate-x-1/2 transition-all duration-100" 
          style={{ 
            height: `${scrollProgress * 100}%`,
            background: 'linear-gradient(to bottom, #080411, #1E75FF)'
          }}
        ></div>
        
        {/* Timeline items with circles */}
        <div className="w-full flex flex-col space-y-8 md:space-y-16">
          {timelineItems.map((item, index) => {
            // Special case for first item - activate as soon as there's any progress
            const activationThreshold = (index + 1.2) / (timelineItems.length + 1.2);
            const isReached = index === 0 
              ? scrollProgress > 0 
              : scrollProgress >= activationThreshold;
            const isLast = index === timelineItems.length - 1;
            const isFirst = index === 0;
            
            // Get the visibility value for this item (0 to 1)
            const itemVisibility = itemsVisibility[index] || 0;
            
            return (
              <div 
                key={item.id} 
                ref={el => itemRefs.current[index] = el}
                className={`relative flex items-center w-full ${
                  index % 2 === 0 
                    ? 'justify-start' 
                    : 'justify-start md:justify-end'
                }`}
              >
                {/* Circle indicator - left on mobile, center on desktop */}
                <div 
                  className={`absolute left-[-4px] md:left-1/2 md:-translate-x-1/2 h-[12px] w-[12px] md:h-[15px] md:w-[15px] rounded-full border-2 z-10 ${
                    isReached ? 'border-[#1E75FF] bg-[#1E75FF]' : 'border-gray-600 bg-gray-900'
                  }`}
                >
                </div>
                
                {/* Content - right side on mobile, alternating on desktop */}
                <div 
                  className={`w-full md:w-5/12 p-2 md:p-4 ml-6 ${
                    index % 2 === 0 
                      ? 'md:ml-0 md:mr-auto md:pr-6' 
                      : 'md:ml-auto md:pl-6'
                  } transition-all duration-500`}
                  style={{
                    opacity: itemVisibility,
                    transform: `translateY(${40 * (1 - itemVisibility)}px)`
                  }}
                >
                  <div className="flex flex-col md:flex-row items-center mb-2 text-blue-500 text-2xl md:text-4xl font-bold text-center md:text-left">
                    <span className="mb-2 md:mb-0 md:mr-4">
                      <img 
                        src={item.icon} 
                        alt={item.title} 
                        className="h-8 w-8 md:h-12 md:w-12 object-contain"
                      />
                    </span>
                    <h3 className="text-xl md:text-2xl">{item.title}</h3>
                  </div>
                  <p className="text-white/80 text-sm md:text-base text-center md:text-left">{item.description}</p>
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
