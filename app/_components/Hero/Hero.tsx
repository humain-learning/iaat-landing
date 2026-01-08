'use client';
import { useRef, useState } from "react";
import { Slide1 } from "./Slide1";
import { Slide2 } from "./Slide2";
import { Button } from "../../ui/Button";

// Color sets for the gradient bands
const slide1Colors = ['#ffffff', '#e6f4fa', '#d5e8f2', '#b8d0de', '#b0cbdb', '#a4c1d2', '#9db5cc'];
const slide2Colors = ['#ffffff', '#bee2f0', '#9bc7e0', '#4e8aac', '#3a7ea5', '#1c638f', '#0b477f'];

// Interpolate between two hex colors
const interpolateColor = (color1: string, color2: string, progress: number): string => {
    const hex = (c: string) => parseInt(c, 16);
    const r1 = hex(color1.slice(1, 3)), g1 = hex(color1.slice(3, 5)), b1 = hex(color1.slice(5, 7));
    const r2 = hex(color2.slice(1, 3)), g2 = hex(color2.slice(3, 5)), b2 = hex(color2.slice(5, 7));
    const r = Math.round(r1 + (r2 - r1) * progress);
    const g = Math.round(g1 + (g2 - g1) * progress);
    const b = Math.round(b1 + (b2 - b1) * progress);
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
};

export const getInterpolatedColors = (progress: number): string[] => {
    return slide1Colors.map((c1, i) => interpolateColor(c1, slide2Colors[i], progress));
};

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
            {/* Gradient bands - transitions color and height based on scroll */}
            <div 
                className="absolute bottom-0 left-0 w-[200%] flex flex-col z-0"
                style={{ 
                    height: `${100 - scrollProgress * 65}%`,
                    transition: 'height 0.3s ease-out'
                }}
            >
                {getInterpolatedColors(scrollProgress).map((color, i) => (
                    <div 
                        key={i} 
                        className="w-full flex-1" 
                        style={{ 
                            backgroundColor: color,
                            transition: 'background-color 0.3s ease-out'
                        }} 
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
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-transparent z-50"
            >
                <img src="/icons/prev.svg" alt="prev" className="" />
            </button>

            {/* Right button (static) */}
            <button
                aria-label="Next slide"
                onClick={() => goTo(1)}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-transparent z-50"
            >
                <img src="/icons/next.svg" alt="next" className="" />
            </button>

            {/* Static CTA buttons */}
            <div className="absolute bottom-15 left-10 z-50">
                <Button text='Apply Now!' href='/apply' />
            </div>
            <div className="absolute bottom-15 right-10 z-50">
                <Button text="Enquire Today!" href="/enquire" />
            </div>
        </div>
    );
};