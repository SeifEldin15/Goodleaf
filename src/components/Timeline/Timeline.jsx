import React, { useEffect, useState, useRef } from 'react';

const Timeline = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [itemsVisibility, setItemsVisibility] = useState([]);
  const [circleStates, setCircleStates] = useState([]);
  const timelineRef = useRef(null);
  const itemRefs = useRef([]);
  const progressBarRef = useRef(null);
  const requestRef = useRef(null);
  
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
      const timelineHeight = rect.height;
      const viewportHeight = window.innerHeight;
      
      // Calculate how far the timeline is scrolled into view as a raw value
      let rawProgress = 0;
      
      // If timeline is in view
      if (timelineTop < viewportHeight && timelineTop + timelineHeight > 0) {
        // Calculate base progress
        const effectiveViewportHeight = window.innerWidth < 768 ? viewportHeight * 0.9 : viewportHeight;
        rawProgress = (effectiveViewportHeight - timelineTop) / (effectiveViewportHeight + timelineHeight * 0.7);
        
        // Constrain raw progress between 0 and 1
        rawProgress = Math.max(0, Math.min(1, rawProgress));
      }
      
      // Calculate which checkpoint we're at or between
      let finalProgress = 0;
      
      // Find the current and next checkpoints based on raw progress
      if (rawProgress > 0) {
        // Get all checkpoint positions
        const checkpoints = timelineItems.map((_, index) => {
          return index / (timelineItems.length - 1);
        });
        
        // Find the closest checkpoint below our raw progress
        let currentCheckpointIndex = 0;
        for (let i = 0; i < checkpoints.length; i++) {
          if (rawProgress >= checkpoints[i]) {
            currentCheckpointIndex = i;
          } else {
            break;
          }
        }
        
        // Calculate progress between checkpoints
        if (currentCheckpointIndex < checkpoints.length - 1) {
          const currentCheckpoint = checkpoints[currentCheckpointIndex];
          const nextCheckpoint = checkpoints[currentCheckpointIndex + 1];
          const progressBetweenCheckpoints = 
            (rawProgress - currentCheckpoint) / (nextCheckpoint - currentCheckpoint);
          
          // Smooth out the progression between checkpoints with easing
          const easedProgressBetweenCheckpoints = easeInOutCubic(progressBetweenCheckpoints);
          
          // Calculate final progress based on current checkpoint and progress to next
          finalProgress = currentCheckpoint + 
            (easedProgressBetweenCheckpoints * (nextCheckpoint - currentCheckpoint));
        } else {
          // If at or beyond the last checkpoint
          finalProgress = checkpoints[currentCheckpointIndex];
          
          // If we're beyond the last checkpoint, allow progress to continue beyond
          if (rawProgress > checkpoints[currentCheckpointIndex]) {
            // Calculate how much to extend beyond the last checkpoint (scale appropriately)
            const extraProgress = (rawProgress - checkpoints[currentCheckpointIndex]) * 0.15;
            finalProgress = Math.min(1.1, checkpoints[currentCheckpointIndex] + extraProgress);
          }
        }
      }
      
      // Set the progress for the bar
      setScrollProgress(finalProgress);
      
      // Get the progress bar's actual height for accurate calculations
      const progressBarHeight = progressBarRef.current.offsetHeight;
      
      // Check if the progress bar is touching each circle
      // We need to measure actual DOM elements for pixel-perfect detection
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
        
        // The progress bar's current height
        const progressBarCurrentHeight = progressBarHeight;
        
        // The circle is lit when the progress bar's bottom edge touches or passes the circle's top
        return progressBarCurrentHeight >= circleRelativeTop;
      });
      
      setCircleStates(newCircleStates);
      
      // Calculate visibility for each timeline item
      const newItemsVisibility = itemRefs.current.map((itemRef, index) => {
        if (!itemRef) return 0;
        
        const itemRect = itemRef.getBoundingClientRect();
        const itemTop = itemRect.top;
        
        // Calculate visibility as item enters viewport
        const visibilityTriggerPoint = 0.7; // Percentage of viewport height
        const itemVisiblePosition = (viewportHeight * visibilityTriggerPoint - itemTop) / (viewportHeight * 0.3);
        
        return Math.max(0, Math.min(1, itemVisiblePosition));
      });
      
      setItemsVisibility(newItemsVisibility);
    };

    // Easing functions for smoother animations
    const easeInOutCubic = (x) => {
      return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
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
        <div className="absolute top-0 h-[92%] left-0 md:left-1/2 md:-translate-x-1/2 w-1">
          {/* Background line */}
          <div className="absolute h-full w-full bg-gray-800/30"></div>
          
          {/* Progress line */}
          <div 
            ref={progressBarRef}
            className="absolute top-0 w-full transition-all duration-500 ease-out overflow-visible" 
            style={{ 
              height: `${scrollProgress * 100}%`,
              background: 'linear-gradient(to bottom, transparent, #1E75FF 15%, #1E75FF 85%, transparent)'
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
            
            // Determine if content should be on left or right side
            const isLeft = index % 2 === 0;
            
            return (
              <div 
                key={item.id} 
                ref={el => itemRefs.current[index] = el}
                className="relative flex items-center w-full mb-6 md:mb-10"
              >
                {/* Circle indicator - ONE per timeline item */}
                <div 
                  className={`timeline-circle absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 h-[13px] w-[13px] md:h-[16px] md:w-[16px] rounded-full border-2 z-10 transition-all duration-300 ${
                    isReached ? 'border-[#1E75FF] bg-[#1E75FF] shadow-[0_0_8px_rgba(30,117,255,0.6)]' : 'border-gray-600 bg-gray-900'
                  }`}
                ></div>
                
                {/* Content - alternate between left and right */}
                <div 
                  className={`w-full md:w-5/12 p-2 md:p-5 ml-7 md:ml-0 ${
                    isLeft 
                      ? 'md:mr-auto md:text-right md:pr-8 md:items-end' 
                      : 'md:ml-auto md:pl-8 md:items-start'
                  } transition-all duration-700 ease-out`}
                  style={{
                    opacity: itemVisibility,
                    transform: `translateY(${30 * (1 - itemVisibility)}px)`,
                    marginLeft: isLeft ? '0' : 'auto',
                    marginRight: isLeft ? 'auto' : '0',
                  }}
                >
                  <div className={`flex flex-col md:flex-row items-center mb-2 text-blue-500 text-2xl font-bold ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
                    <span className="mb-2 md:mb-0 md:mr-4">
                      <img 
                        src={item.icon} 
                        alt={item.title} 
                        className="h-8 w-8 md:h-12 md:w-12 object-contain"
                      />
                    </span>
                    <h3 className="text-xl md:text-2xl">{item.title}</h3>
                  </div>
                  <p className={`text-white/80 text-sm md:text-base ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
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
