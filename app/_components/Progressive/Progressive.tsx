'use client';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { videos } from "./data";
import type { Swiper as SwiperType } from "swiper";
import { useState, useRef } from "react";
import { VideoCard } from "../../ui/VideoCard";
import "swiper/css";
import "swiper/css/pagination";

export const Progressive = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef<SwiperType | null>(null);

    const goToSlide = (index: number) => {
        swiperRef.current?.slideTo(index);
    };
    return (
        <div className="w-full flex flex-col items-center justify-center py-5 px-5 scroll-offset-target" id="schools-looking">
            <h1 className="text-3xl font-bold text-[#0b477f] mb-5">
                What Progressive Schools Look For
            </h1>

            <div className="w-full max-w-6xl mx-auto">
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    centeredSlides={true}
                    grabCursor={true}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                    breakpoints={{
                        640: {
                            spaceBetween: 12,
                        },
                        1024: {
                            spaceBetween: 16,
                        },
                    }}
                    className="w-full"
                >
                    {videos.map((video, index) => (
                        <SwiperSlide key={video.id}>
                            <VideoCard video={video} index={index} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom pagination dots */}
                <div className="flex justify-center gap-2 p-4">
                    {videos.map((_, index) => (
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

        </div>
    );
};