'use client';
import { cards} from './data';
import { Card } from './Card';

export const Explore = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-[#0b477f] mb-10 px-5">
        What You Will Explore
      </h1>

      {/* Mobile: horizontal scroll with snap */}
      <div className="relative z-99 lg:hidden w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide">
        <div className=" flex gap-4 px-4 pb-4 w-max">
          {cards.map((card) => (
            <div key={card.id} className="snap-center shrink-0">
              <Card {...card} />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: 3x2 grid */}
      <div className="hidden lg:grid grid-cols-3 gap-8">
        {cards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
};