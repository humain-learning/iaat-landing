'use client';
import { useRef, useState } from "react";
import { Slide1 } from "./Slide1";
import { Slide2 } from "./Slide2";
import { PrimaryButton } from "../../ui/PrimaryButton";

// Color bands for slide 2
const slide2Colors = ['#ffffff', '#bee2f0', '#9bc7e0', '#4e8aac', '#3a7ea5', '#1c638f', '#0b477f'];

export const Hero = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [index, setIndex] = useState(0);
    const [scrollProgress, setScrollProgress] = useState(0);

    const goTo = (i: number) => {
        const c = containerRef.current;
        if (!c) return;
        const slide = c.children[i] as HTMLElement | undefined;
        slide?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
    };

    const handleScroll = () => {
        const c = containerRef.current;
        if (!c) return;
        const progress = c.scrollLeft / c.clientWidth;
        setScrollProgress(Math.min(1, Math.max(0, progress)));
        const idx = Math.round(progress);
        setIndex(idx);
    };

    return (
        <div className="w-full h-[90vh] relative overflow-hidden">
            {/* Gradient bands - expand from bottom on slide 2 */}
            <div 
                className="absolute bottom-0 left-0 w-[200%] flex flex-col z-0"
                style={{ 
                    height: `${scrollProgress * 35}%`,
                    transition: 'height 0.3s ease-out'
                }}
            >
                {slide2Colors.map((color, i) => (
                    <div 
                        key={i} 
                        className="w-full flex-1" 
                        style={{ backgroundColor: color }} 
                    />
                ))}
            </div>

            <div
                ref={containerRef}
                onScroll={handleScroll}
                className="w-full h-full overflow-x-scroll overflow-y-hidden snap-x snap-mandatory flex scrollbar-hide relative z-10"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                <div className="w-full h-full shrink-0 snap-start snap-always flex items-center justify-center">
                    <Slide1 />
                </div>

                <div className="w-full h-full shrink-0 snap-start snap-always flex items-center justify-center">
                    <Slide2 />
                </div>
            </div>

            {/* Left button (static) */}
            <button
                aria-label="Previous slide"
                onClick={() => goTo(0)}
                className="absolute left-1 xs:left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-transparent z-50"
            >
                <img src="/icons/prev.svg" alt="prev" className="w-4 h-4 xs:w-4 xs:h-4 sm:w-6 sm:h-6" />
            </button>

            {/* Right button (static) */}
            <button
                aria-label="Next slide"
                onClick={() => goTo(1)}
                className="absolute right-1 xs:right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-transparent z-50"
            >
                <img src="/icons/next.svg" alt="next" className="w-4 h-4 xs:w-4 xs:h-4 sm:w-6 sm:h-6" />
            </button>

            {/* Static CTA buttons */}
            <div className="absolute bottom-5 left-5 z-50">
                <PrimaryButton text='Apply Now!' href='https://forms.gle/zRXAexLH1Z49VVKE8' external={true}/>
            </div>
            <div className="absolute bottom-5 right-5 z-50">
                <PrimaryButton text="Explore More" href="#journey/" />
            </div>
        </div>
    );
};