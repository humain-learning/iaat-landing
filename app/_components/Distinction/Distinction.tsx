'use client';
import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { videos, features } from './data';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { VideoCard } from '../../ui/VideoCard';


export const Distinction = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef<SwiperType | null>(null);

    const goToSlide = (index: number) => {
        swiperRef.current?.slideTo(index);
    };

    return (
        <div className="w-full flex flex-col p-5" id="why-this-course">
            <h1 className="w-full text-3xl font-normal pb-4">What Makes PGC-IB Distinctive</h1>
            
            <div className="w-full max-w-4xl mx-auto">
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    centeredSlides={true}
                    grabCursor={true}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
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
                
                <div className=''>
                    {features.map((feature) => (
                        <div key={feature.id} className="flex items-center py-2">
                            <img src={feature.icon} alt={`Feature ${feature.id} icon`} className="h-12 w-12 shrink-0" />
                            <div className="text-normal pl-5">
                                <p>{feature.line1}</p>
                                <p>{feature.line2}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='py-5'><span className='text-sm text-blue-500'>Portfolio:</span><span className='text-sm'> Showcase of growth and authentic voice</span></div>
            </div>
        </div>
    );
};