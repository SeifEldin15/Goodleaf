import React, { useEffect, useState, useRef } from 'react';

const Timeline = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [itemsVisibility, setItemsVisibility] = useState([]);
  const [circleStates, setCircleStates] = useState([]);
  const timelineRef = useRef(null);
  const itemRefs = useRef([]);
  const progressBarRef = useRef(null);
  const requestRef = useRef(null);
  const lastProgressRef = useRef(0); // Store the last progress value for smoother animation
  
  const timelineItems = [
    {
      id: 1,
      title: "4 Tbps DDoS Protection",
      description: "4 Tbps CosmicGuard's and GCore deliver unbeatable DDoS protection for ultimate reliability and security.",
      icon: "/timeline/timeline1.webp"
    },
    {
      id: 2,
      title: "Internet Speed",
      description: "From 10 Gbps to an incredible 20 Gbps—try matching that speed. Youcan't. It's unmatched and unrivaled.",
      icon: "/timeline/timeline2.webp"
    },
    {
      id: 3,
      title: "Powerful Hardware",
      description: "Powered by Ryzen & AMD EPYC CPUs, high-speed RAM, delivering unmatched performance and reliability.",
      icon: "/timeline/timeline3.webp"
    },
    {
      id: 4,
      title: "Windows OS",
      description: "Experience the full benefits of a Windows operating system with unmatched performance and ease.",
      icon: "/timeline/timeline4.webp"
    },
    {
      id: 5,
      title: "Worldwide Locations",
      description: "Strategically located data centers in various locations around the world for global performance.",
      icon: "/timeline/timeline5.webp"
    },
    {
      id: 6,
      title: "24/7 Support",
      description: "Round-the-clock technical support team ready to assist you with any questions or concerns.",
      icon: "/timeline/timeline5.webp"
    }
  ];
  
  // Easing function to slow down the animation
  const easeProgress = (progress) => {
    // This easing function makes the animation slower while maintaining the same overall distance
    return Math.pow(progress, 1.5); // Adjust the power (1.5) to control the slowdown amount
  };
  
  useEffect(() => {
    // Initialize visibility state for each item
    setItemsVisibility(new Array(timelineItems.length).fill(0));
    setCircleStates(new Array(timelineItems.length).fill(false));
    
    const timeline = timelineRef.current;
    
    const handleScroll = () => {
      if (!timeline || !progressBarRef.current) return;
      
      // Get timeline position data
      const rect = timeline.getBoundingClientRect();
      const timelineTop = rect.top;
      const timelineBottom = rect.bottom;
      const timelineHeight = rect.height;
      const viewportHeight = window.innerHeight;
      
      // Offset in pixels to start the progress earlier
      const startOffset = -200;
      
      let rawProgress = 0;
      
      // Start progress when timeline is 200px before entering the viewport
      // Adjust the condition to account for the offset
      if ((timelineTop - startOffset) < viewportHeight && timelineBottom > 0) {
        // Calculate visible portion of timeline, accounting for the offset
        const visibleStart = Math.max(0, viewportHeight - (timelineTop - startOffset));
        
        // Percentage of timeline that has passed the top of the viewport (with offset)
        rawProgress = visibleStart / timelineHeight;
        
        // Constrain progress between 0 and 1
        rawProgress = Math.max(0, Math.min(1, rawProgress));
      }
      
      // Apply easing to slow down the animation while maintaining the same distance
      const easedProgress = easeProgress(rawProgress);
      
      // Apply a smoother transition by interpolating between current and target progress
      const smoothingFactor = 0.10; // Lower value = slower/smoother transition
      const smoothedProgress = lastProgressRef.current + (easedProgress - lastProgressRef.current) * smoothingFactor;
      lastProgressRef.current = smoothedProgress;
      
      // Set the progress for the bar
      setScrollProgress(smoothedProgress);
      
      // Get the progress bar's actual height for accurate calculations
      const progressBarHeight = progressBarRef.current.offsetHeight;
      
      // Derive the smooth progress bar height from the smoothed progress
      const smoothProgressBarHeight = progressBarHeight * (smoothedProgress / rawProgress || 1);
      
      // Check if the progress bar is touching each circle
      const newCircleStates = itemRefs.current.map((itemRef, index) => {
        if (!itemRef) return false;
        
        // Find the circle element inside this item
        const circleElement = itemRef.querySelector('.timeline-circle');
        if (!circleElement) return false;
        
        // Get the circle's position relative to the timeline
        const circleRect = circleElement.getBoundingClientRect();
        const timelineRect = timeline.getBoundingClientRect();
        
        // Calculate the circle's top position relative to the timeline's top
        const circleRelativeTop = circleRect.top - timelineRect.top;
        
        // The progress bar's current height based on smoothed progress
        const progressBarCurrentHeight = smoothProgressBarHeight;
        
        // Apply a different offset for the first and last circle
        const isFirstCircle = index === 0;
        const isLastCircle = index === timelineItems.length - 1;
        const circleOffset = isFirstCircle ? 70 : isLastCircle ? 30 : 110; // Different offsets for first, last, and other circles
        
        // The circle is lit when the progress bar's bottom edge touches or passes the circle's top
        return progressBarCurrentHeight + circleOffset >= circleRelativeTop;
      });
      
      setCircleStates(newCircleStates);
      
      // Calculate visibility for each timeline item - adjust for smoother animation
      const newItemsVisibility = itemRefs.current.map((itemRef, index) => {
        if (!itemRef) return 0;
        
        const itemRect = itemRef.getBoundingClientRect();
        const itemTop = itemRect.top;
        
        // Calculate visibility as item enters viewport with slower transition
        const visibilityTriggerPoint = 0.85; // Increased from 0.7 to make text appear earlier
        const itemVisiblePosition = (viewportHeight * visibilityTriggerPoint - itemTop) / (viewportHeight * 0.4); // Widened transition window
        const rawVisibility = Math.max(0, Math.min(1, itemVisiblePosition));
        
        // Apply the same easing to item visibility to keep consistent with progress
        const smoothVisibility = easeProgress(rawVisibility);
        
        return smoothVisibility;
      });
      
      setItemsVisibility(newItemsVisibility);
    };
    
    // Smoothly update with requestAnimationFrame
    const smoothScrollHandler = () => {
      handleScroll();
      requestRef.current = requestAnimationFrame(smoothScrollHandler);
    };

    // Start the animation loop
    requestRef.current = requestAnimationFrame(smoothScrollHandler);
    
    // Also listen for resize events
    window.addEventListener('resize', handleScroll);
    
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Calculate the vertical position of each point along the timeline as a percentage
  const getPointPosition = (index) => {
    const totalItems = timelineItems.length;
    // Calculate percentage distance along total timeline height
    return index / (totalItems - 1);
  };

  return (
    <div className='w-full mx-auto max-w-[1800px]'>
      <div className="text-center mb-12 md:mb-20">
        <p className="text-lg mb-4 text-white">Exactly what you can find inside Active Income</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          Unlock Your <span className="text-blue-500">Full Potential</span>
        </h2>
      </div>

      <div ref={timelineRef} className="relative min-h-[100vh] md:min-h-[120vh] flex flex-col items-center justify-between py-10 md:py-16">
        {/* Timeline container */}
        <div className="absolute top-0 h-[92%] left-4 md:left-1/2 md:-translate-x-1/2 w-1">
          {/* Background line */}
          <div className="absolute h-full w-full bg-gray-800/30"></div>
          
          {/* Progress line */}
          <div 
            ref={progressBarRef}
            className="absolute top-0 w-full transition-none overflow-visible" 
            style={{ 
              height: `${scrollProgress * 100}%`,
              background: '#1E75FF',
              width: '4px',
              left: '-1.5px'
            }}
          ></div>
        </div>
        
        {/* Timeline items with circles - exactly 6 items with more spacing */}
        <div className="w-full h-full flex flex-col justify-between relative py-6 md:py-10">
          {timelineItems.map((item, index) => {
            // Use the accurate DOM-based detection for circles
            const isReached = circleStates[index];
            
            // Get the visibility value for this item's content (0 to 1)
            const itemVisibility = itemsVisibility[index] || 0;
            
            // Determine if content should be on left or right side (only on desktop)
            const isLeft = index % 2 === 0;
            
            return (
              <div 
                key={item.id} 
                ref={el => itemRefs.current[index] = el}
                className="relative flex items-center w-full mb-6 md:mb-10"
              >
                {/* Circle indicator - ONE per timeline item */}
                <div 
                  className={`timeline-circle absolute left-[calc(16px-5px)] md:left-1/2 md:-translate-x-1/2 h-[13px] w-[13px] md:h-[16px] md:w-[16px] rounded-full border-2 z-10 transition-all duration-0 ${
                    isReached ? 'border-[#1E75FF] bg-[#1E75FF] shadow-[0_0_8px_rgba(30,117,255,0.6)]' : 'border-gray-600 bg-gray-900'
                  }`}
                ></div>
                
                {/* Content - always on right for mobile, alternate for desktop */}
                <div 
                  className={`w-[calc(100%-40px)] md:w-5/12 p-2 md:p-5 ml-14 md:ml-0 ${
                    isLeft 
                      ? 'md:mr-auto md:text-right md:pr-8 md:items-end' 
                      : 'md:ml-auto md:pl-8 md:items-start'
                  } transition-all duration-700 ease-out`}
                  style={{
                    opacity: itemVisibility,
                    transform: `translateY(${30 * (1 - itemVisibility)}px)`,
                    filter: `blur(${8 * (1 - itemVisibility)}px)`,
                  }}
                >
                  <div className={`flex flex-col md:flex-row items-start md:items-center mb-2 text-blue-500 text-2xl font-bold ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
                    <span className="mb-2 md:mb-0 md:mr-4">
                      <img 
                        src={item.icon} 
                        alt={item.title} 
                        className="h-8 w-8 md:h-12 md:w-12 object-contain"
                      />
                    </span>
                    <h3 className="text-xl md:text-2xl">{item.title}</h3>
                  </div>
                  <p className={`text-white/80 text-sm md:text-base text-left ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                    {item.description}
                  </p>
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
