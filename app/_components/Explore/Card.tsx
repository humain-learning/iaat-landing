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
    <div className="h-120 w-80 bg-transparent perspective-[1000rem] py-2">
      <div className={`relative h-full w-full p- transition-transform duration-600 transform-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        
        {/* Front */}
        <div className="absolute flex w-full h-full flex-col justify-between border backface-hidden rounded-lg overflow-hidden">
          <div className="w-full h-1/2">
            {frontColours.map((color, index) => (
              <div className='w-full h-1/5 flex flex-col' key={index} style={{backgroundColor:color}}/>
            ))}
          </div>
          
          
          <div className="relative w-full h-1/2 flex p-5 text-white flex-col items-start justify-between bg-[#0b477f]">
          
            <h2 className="text-xl font-semibold ">{title}</h2>
            <button
              onClick={handleFlip}
              className="absolute bottom-5 left-5 text-xs rounded-md underline underline-offset-2 pointer"
            >
              See More
            </button>
          </div>
        </div>
        
        {/* Back */}
        <div className="absolute flex h-full w-full rotate-y-180 flex-col border justify-start items-start p-5 bg-white backface-hidden rounded-lg">
          <p className="text-lg py-20">{description}</p>
          <button
              onClick={handleFlip}
              className="absolute bottom-5 left-5 text-xs rounded-md underline underline-offset-2"
            >
              See Less
            </button>
        </div>

      </div>
    </div>
  );
};