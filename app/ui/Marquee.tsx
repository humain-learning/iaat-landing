'use client';

interface MarqueeProps {
    logos: { id: number; src: string; alt: string }[];
    speed?: number; // seconds for one full loop
    direction?: 'left' | 'right';
    pauseOnHover?: boolean;
}

export const Marquee = ({ 
    logos, 
    speed = 10, 
    direction = 'left',
    pauseOnHover = true 
}: MarqueeProps) => {
    // Duplicate logos multiple times for seamless loop
    const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

    return (
        <div className={`w-full overflow-hidden ${pauseOnHover ? 'group' : ''}`}>
            <div 
                className={`flex items-center gap-12 w-max ${direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'} ${pauseOnHover ? 'group-hover:[animation-play-state:paused]' : ''}`}
                style={{ animationDuration: `${speed}s` }}
            >
                {duplicatedLogos.map((logo, index) => (
                    <img
                        key={`${logo.id}-${index}`}
                        src={logo.src}
                        alt={logo.alt}
                        className="h-12 sm:h-16 w-auto object-contain shrink-0"
                    />
                ))}
            </div>
        </div>
    );
};
