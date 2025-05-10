import React, { useEffect, useRef } from 'react';
import { FaStar } from 'react-icons/fa';
import LazyImage from '../LazyImage/LazyImage';

const ReviewSlider = ({ reviews = sampleReviews }) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    // Clone the reviews list to create the infinite scroll effect
    if (sliderRef.current) {
      const clone = sliderRef.current.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      sliderRef.current.parentNode.appendChild(clone);
    }
  }, []);

  return (
    <>
      <div className="flex items-center justify-center mb-6 max-w-2xl mx-auto mt-12">
        <div className="h-[1px] w-[30%] bg-gradient-to-r from-transparent via-[#1D8FEF] to-[#1D8FEF]" />
        <div className="mx-4">
          <div className="w-6">
            <LazyImage className="w-full" src="/header icons/review-icon.webp" alt="" />
          </div>
        </div>
        <div className="h-[1px] w-[30%] bg-gradient-to-r from-[#1D8FEF] via-[#1D8FEF] to-transparent" />
      </div>
      
      <div className="text-center max-w-4xl mx-auto mb-8 px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 md:mb-4">WHAT EVERYONE SAYS</h2>
        <p className="text-sm sm:text-base text-gray-400 max-w-3xl mx-auto">
          Customer feedback matters to us. It helps us improve and meet your needs with the
          highest standards. We value each voice and are committed to delivering excellence
          in our services.
        </p>
      </div>
      
      <div className="w-full py-8 overflow-hidden">
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <ul ref={sliderRef} className="flex items-center justify-center md:justify-start animate-infinite-scroll">
            {reviews.map((review, index) => (
              <li 
                key={`review-${index}`} 
                className="review-item flex-shrink-0 w-80 mx-4"
              >
                <div className="bg-gray-800 rounded-lg p-6 h-full">
                  <div className="flex flex-col items-center mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden mb-2">
                      <LazyImage 
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
              </li>
            ))}
          </ul>
          <ul className="flex items-center justify-center md:justify-start animate-infinite-scroll">
            {reviews.map((review, index) => (
              <li 
                key={`review-clone-${index}`} 
                className="review-item flex-shrink-0 w-80 mx-4"
              >
                <div className="bg-gray-800 rounded-lg p-6 h-full">
                  <div className="flex flex-col items-center mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden mb-2">
                      <LazyImage 
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
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
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
