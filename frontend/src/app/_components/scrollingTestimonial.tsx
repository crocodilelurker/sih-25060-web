// scrollingTestimonial.tsx
'use client';

import React from 'react';

const ScrollingTestimonial = () => {
  // Generate testimonial data
  const testimonials = Array.from({ length: 18 }, (_, i) => ({
    id: i + 1,
    name: [
      'Jen S.', 'Paul A,', 'Cindy J.', 'Danica W.', 'Peter H.', 'Lanny B.',
      'Alex F.', 'Claude O.', 'Max Q.', 'Jeff R.', 'Kevin K.', 'Andrea B.',
      'Danny G.', 'Ian D.', 'Ben S.', 'Matthew I.', 'Garrett P.', 'Xavier C.'
    ][i],
    role: 'Founder of XYZ',
    image: `/imgs/head-shots/${i + 1}.jpg`,
    quote: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
      Ipsa nostrum labore dolor facilis${i % 5 !== 0 ? ', nesciunt facere' : ''} 
      ${i % 3 === 0 ? 'mollitia nam aspernatur esse corporis' : ''}!`.replace(/\s+/g, ' ').trim()
  }));

  // Create repeated sets for infinite scroll effect
  const repeatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <div className="bg-gradient-to-br from-green-50 to-blue-50 py-8 min-h-[50vh]">
      <div className="p-3 overflow-x-hidden relative h-full">
        {/* Left gradient overlay */}
        <div className="absolute top-0 bottom-0 left-0 w-16 z-10 bg-gradient-to-r from-green-50 to-transparent"></div>
        
        {/* Forward moving row */}
        <div className="flex items-center mb-3" style={{ height: '50%' }}>
          <div 
            className="flex gap-3 px-2 forward-scroll"
          >
            {repeatedTestimonials.map((testimonial, index) => (
              <div 
                key={`forward-${testimonial.id}-${index}`} 
                className="shrink-0 w-[350px] grid grid-cols-[5rem,_1fr] rounded-lg overflow-hidden relative shadow-md"
              >
                <img 
                  src={testimonial.image} 
                  alt={`Testimonial image for ${testimonial.name}`} 
                  className="w-full h-32 object-cover"
                />
                <div className="bg-white text-gray-800 p-3">
                  <span className="block font-semibold text-base mb-1 text-green-700">{testimonial.name}</span>
                  <span className="block mb-2 text-xs font-medium text-blue-600">{testimonial.role}</span>
                  <span className="block text-xs text-gray-600">{testimonial.quote}</span>
                </div>
                <span className="text-5xl absolute top-1 right-1 text-green-200">"</span>
              </div>
            ))}
          </div>
        </div>

        {/* Backward moving row */}
        <div className="flex items-center" style={{ height: '50%' }}>
          <div 
            className="flex gap-3 px-2 backward-scroll"
          >
            {repeatedTestimonials.map((testimonial, index) => (
              <div 
                key={`backward-${testimonial.id}-${index}`} 
                className="shrink-0 w-[350px] grid grid-cols-[5rem,_1fr] rounded-lg overflow-hidden relative shadow-md"
              >
                <img 
                  src={testimonial.image} 
                  alt={`Testimonial image for ${testimonial.name}`} 
                  className="w-full h-32 object-cover"
                />
                <div className="bg-white text-gray-800 p-3">
                  <span className="block font-semibold text-base mb-1 text-green-700">{testimonial.name}</span>
                  <span className="block mb-2 text-xs font-medium text-blue-600">{testimonial.role}</span>
                  <span className="block text-xs text-gray-600">{testimonial.quote}</span>
                </div>
                <span className="text-5xl absolute top-1 right-1 text-green-200">"</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right gradient overlay */}
        <div className="absolute top-0 bottom-0 right-0 w-16 z-10 bg-gradient-to-l from-green-50 to-transparent"></div>
      </div>
    </div>
  );
};

export default ScrollingTestimonial;