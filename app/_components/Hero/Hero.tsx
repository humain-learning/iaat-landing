'use client';
import { useRef, useState } from "react";
import { Slide1 } from "./Slide1";
import { Slide2 } from "./Slide2";
import { Slide3 } from "./Slide3";
import { PrimaryButton } from "../../ui/PrimaryButton";

// Color bands for slide 2
const slide2Colors = ['#ffffff', '#bee2f0', '#9bc7e0', '#4e8aac', '#3a7ea5', '#1c638f', '#0b477f'];

export const Hero = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [index, setIndex] = useState(0);
    const [bandProgress, setBandProgress] = useState(0);

    const goTo = (i: number) => {
        const c = containerRef.current;
        if (!c) return;
        const slide = c.children[i] as HTMLElement | undefined;
        slide?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
    };

    const handleScroll = () => {
        const c = containerRef.current;
        if (!c) return;

        const rawProgress = c.scrollLeft / c.clientWidth;   // 0 → 1 → 2 for three slides
        const idx = Math.round(rawProgress);
        setIndex(idx);

        // Make bands peak on Slide 2 (rawProgress ≈ 1)
        // and shrink on BOTH Slide 1 and Slide 3
        const p = 1 - Math.abs(rawProgress - 1); // 1 at slide 2, 0 at slides 1 & 3
        setBandProgress(Math.min(1, Math.max(0, p)));
    };

    return (
        <div className="w-full h-[90vh] relative">
            <div 
                className="absolute bottom-0 left-0 w-full flex flex-col z-0"
                style={{ 
                    height: `${bandProgress * 35}%`,
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
                
                <div className="w-full h-full shrink-0 snap-start snap-always flex items-center justify-center">
                    <Slide3 />
                </div>
            </div>

            <button
                aria-label="Previous slide"
                onClick={() => goTo(Math.max(0, index - 1))}
                className="absolute left-1 xs:left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-transparent z-50"
            >
                <img src="/icons/prev.svg" alt="prev" className="w-4 h-4 xs:w-4 xs:h-4 sm:w-6 sm:h-6" />
            </button>

            {/* Right button */}
            <button
                aria-label="Next slide"
                onClick={() => goTo(Math.min(2, index + 1))}
                className="absolute right-1 xs:right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-transparent z-50"
            >
                <img src="/icons/next.svg" alt="next" className="w-4 h-4 xs:w-4 xs:h-4 sm:w-6 sm:h-6" />
            </button>

            <div className="absolute bottom-5 left-5 z-50">
                <PrimaryButton text='Apply Now!' href='https://forms.gle/zRXAexLH1Z49VVKE8' external={true}/>
            </div>
            <div className="absolute bottom-5 right-5 z-50">
                <PrimaryButton text="Explore More" href="#journey" />
            </div>
        </div>
    );
};
