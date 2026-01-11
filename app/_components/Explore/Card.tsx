import { useState } from 'react';
import { frontColours } from './data';

type CardProps = {
  id: number;
  title: string;
  description: string;
};



export const Card = ({ title, description }: CardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="h-120 w-80 bg-transparent perspective-midrange py-10">
      <div className={`relative h-full w-full p- transition-transform duration-1000 transform-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        
        {/* Front */}
        <div className="absolute flex w-full h-full flex-col justify-between border backface-hidden rounded-lg overflow-hidden drop-shadow-2xl">
          <div className="w-full h-1/2">
            {frontColours.map((color, index) => (
              <div className='w-full h-1/5 flex flex-col' key={index} style={{backgroundColor:color}}/>
            ))}
          </div>
          
          
          <div className="relative w-full h-1/2 flex p-5 text-white flex-col items-start justify-between bg-[#0b477f]">
          
            <h2 className="text-xl font-semibold ">{title}</h2>
            <button
              onClick={handleFlip}
              className="absolute bottom-5 left-5 text-xs rounded-md hover:bg-[#093a68] transition-colors underline underline-offset-4"
            >
              See More
            </button>
          </div>
        </div>
        
        {/* Back */}
        <div className="absolute flex h-full w-full rotate-y-180 flex-col border justify-start items-start p-5 bg-white backface-hidden rounded-lg">
          <p className="text-sm">{description}</p>
          <button
              onClick={handleFlip}
              className="absolute bottom-5 left-5 text-xs rounded-md hover:bg-[#093a68] transition-colors underline underline-offset-4"
            >
              See Less
            </button>
        </div>

      </div>
    </div>
  );
};