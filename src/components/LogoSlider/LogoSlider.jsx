import React, { useEffect, useRef } from 'react';

const LogoSlider = () => {
  const logosRef = useRef(null);

  useEffect(() => {
    // Clone the logos list to create the infinite scroll effect
    if (logosRef.current) {
      const clone = logosRef.current.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      logosRef.current.parentNode.appendChild(clone);
    }
  }, []);

  return (
    <div className="logo-slider-container w-full">
      {/* Logo Carousel animation */}
      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <ul ref={logosRef} className="flex items-center justify-center md:justify-start [&_li]:mx-16 [&_img]:max-w-none animate-infinite-scroll">
          <li>
            <img src="/logos slider/logo1.png" alt="Facebook" />
          </li>
          <li>
            <img src="/logos slider/logo2.png" alt="Disney" />
          </li>
          <li>
            <img src="/logos slider/logo3.png" alt="Airbnb" />
          </li>
          <li>
            <img src="/logos slider/logo4.png" alt="Apple" />
          </li>
          <li>
            <img src="/logos slider/logo5.png" alt="Spark" />
          </li>
        </ul>
      </div>
      {/* End: Logo Carousel animation */}
    </div>
  );
};

export default LogoSlider;