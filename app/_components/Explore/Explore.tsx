'use client';
import { useState, useRef } from 'react';
import { cards} from './data';
import { Card } from './Card';

export const Explore = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const cardWidth = scrollRef.current.scrollWidth / cards.length;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(index);
    }
  };

  const goToSlide = (index: number) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.scrollWidth / cards.length;
      scrollRef.current.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="w-full flex flex-col items-start scroll-offset-target py-5" id='explore-what'>
      <h1 className="text-3xl font-bold text-[#0b477f] px-5 mb-5">
        What You Will Explore
      </h1>

      {/* Mobile: horizontal scroll with snap */}
      <div className="md:hidden w-full">
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="relative w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        >
          <div className="flex gap-4 px-4 w-max">
            {cards.map((card) => (
              <div key={card.id} className="snap-center shrink-0">
                <Card {...card} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 p-4">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === activeIndex ? 'bg-[#124477]' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Desktop: 3x2 grid */}
      <div className="hidden md:grid md:grid-cols-3 gap-8 items-center justify-center mx-auto">
        {cards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>


      <div className="flex w-full h-auto text-wrap px-5 justify-center lg:py-10">
        <div className='text-md text-center'>
          Grow into the educator you aspire to be, leading with clarity, compassion and a commitment to continuous development.
        </div>
      </div>x
  );
};