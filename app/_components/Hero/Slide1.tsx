const circleClasses = "absolute w-[60%] h-[60%] rounded-full mix-blend-multiply bg-gradient-to-b from-[#98C6E0]/50 to-[#2475A0]/95 flex justify-center items-center text-center p-2 xs:p-3 sm:p-4 text-white text-[0.65rem] xs:text-xs sm:text-sm md:text-base lg:text-lg font-medium transition-transform duration-300 hover:scale-105 hover:z-50";

export const Slide1 = () => {
    return (
        <div className="w-full h-full flex flex-col relative">
            {/* --- Header Section --- */}
            <div className="flex-none z-30 relative text-foreground pt-10 px-5">
                <h1 className=" text-5xl mb-1 sm:mb-2">
                    Triad of Excellence
                </h1>
                <div className="flex flex-col text-2xl text-gray-600">
                    <span>IB Ready, Classroom Ready</span>
                    <span>and Future Ready.</span>
                </div>
            </div>

            <div className="grow flex items-center justify-center w-full z-20 relative">

                <div className="relative w-full max-w-[75vw] xs:max-w-[80vw] sm:max-w-[85vw] md:max-w-[450px] aspect-square">
                    
                    {/* Top Circle */}
                    <div className={`${circleClasses} top-0 left-1/2 -translate-x-1/2`}>
                        <span className="w-[80%]">International Baccalaureate (IB) Enquiry</span>
                    </div>

                    {/* Bottom Left Circle */}
                    <div className={`${circleClasses} bottom-0 left-0 -translate-x-[5%] -translate-y-[5%] justify-start`}>
                        <span className="w-[80%] pr-2 pt-5">The University of Melbourne’s Academic Rigour</span>
                    </div>

                    {/* Bottom Right Circle */}
                    <div className={`${circleClasses} bottom-0 right-0 translate-x-[5%] -translate-y-[5%] justify-end `}>
                        <span className="w-[80%] pl-2 pt-5">IAAT’s Human Centred Pedagogy</span>
                    </div>

                </div>
            </div>

            <div className="flex-none w-full flex justify-between items-center z-30 px-7.5 xs:px-4 sm:px-5 pb-12 xs:pb-14 sm:pb-15">
                
                <div className="flex flex-col">
                    <div className="flex items-center mb-3 xs:mb-4 sm:mb-5">
                        <img src="/logos/ibec-logo.jpg" alt="IB Logo" className="h-10 xs:h-12 sm:h-15 w-auto object-contain" />
                        <div className="h-10 xs:h-12 sm:h-16 w-px bg-black mx-5 xs:mx-6 sm:mx-7.5"></div>
                        <img src="/logos/iaat-logo.svg" alt="IAAT Logo" className="h-10 xs:h-12 sm:h-15 w-auto" />
                    </div>
                </div>

                <div className="flex flex-col">
                    <div className='flex items-center gap-3 xs:gap-4 sm:gap-6 mb-3 xs:mb-4 sm:mb-5'>
                        
                        <img src="/logos/uni-mel-logo.svg" alt="Uni Mel Logo" className="h-10 xs:h-12 sm:h-15 w-auto object-contain" />
                    </div>
                </div>

            </div>
        </div>
    );
};