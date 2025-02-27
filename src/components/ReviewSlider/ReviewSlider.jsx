import React, { useEffect, useRef, useState } from 'react';
import { FaStar } from 'react-icons/fa';

const ReviewSlider = ({ reviews = sampleReviews }) => {
  const sliderRef = useRef(null);
  const [isMouseOver, setIsMouseOver] = useState(false);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    // Clone the first set of reviews and append to create infinite scroll effect
    const duplicateSlide = () => {
      const items = slider.querySelectorAll('.review-item');
      const clonedItems = Array.from(items).map(item => item.cloneNode(true));
      clonedItems.forEach(item => {
        slider.appendChild(item);
      });
    };
    
    duplicateSlide();

    // Animation for continuous scroll
    let scrollPosition = 0;
    const scrollSpeed = 0.5;
    
    const scroll = () => {
      if (isMouseOver) return;
      
      scrollPosition += scrollSpeed;
      
      // Reset position when we've scrolled the width of the original set of reviews
      const itemWidth = slider.querySelector('.review-item').offsetWidth;
      const containerWidth = itemWidth * reviews.length;
      
      if (scrollPosition >= containerWidth) {
        scrollPosition = 0;
      }
      
      slider.scrollLeft = scrollPosition;
      requestAnimationFrame(scroll);
    };
    
    const animationId = requestAnimationFrame(scroll);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [reviews.length, isMouseOver]);

  return (
    <div className="w-full bg-gray-900 py-8 overflow-hidden">
      <div 
        className="flex overflow-x-hidden"
        ref={sliderRef}
        onMouseEnter={() => setIsMouseOver(true)}
        onMouseLeave={() => setIsMouseOver(false)}
      >
        {reviews.map((review, index) => (
          <div 
            key={`review-${index}`} 
            className="review-item flex-shrink-0 w-80 px-4"
          >
            <div className="bg-gray-800 rounded-lg p-6 h-full">
              <div className="flex flex-col items-center mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden mb-2">
                  <img 
                    src={review.image} 
                    alt={`${review.name}'s profile`} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-blue-400 text-lg font-medium">{review.name}</h3>
                <div className="flex items-center mt-1">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <span className="text-white ml-2">{review.rating} Rating</span>
                </div>
              </div>
              <p className="text-gray-300 text-center">{review.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Sample data - replace with your actual review data
const sampleReviews = [
  {
    name: "Mary Hill",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: "4.9",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
  },
  {
    name: "Mary Hill",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: "4.9",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
  },
  {
    name: "Mary Hill",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: "4.9",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
  },
  {
    name: "Mary Hill",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: "4.9",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
  },
];

export default ReviewSlider;
