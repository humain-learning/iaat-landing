
export const Slide2 = () => {
    return (
        <div className="w-full h-full flex flex-col relative">
            <h1 className="text-3xl text-start px-5 pt-10">
                <span>Unlock a new teaching mindset</span>
            </h1>

            <div className='text-[#124578] text-base xs:text-lg sm:text-xl md:text-[1.5rem] px-5 xs:px-4 sm:px-5 py-3 xs:py-4 sm:py-5 text-start'>Dual Certificate</div>

            <div className='flex items-center p-5 xs:p-4 sm:p-5 text-start'>
                <img src='/logos/uni-mel-logo.svg' className='h-16 xs:h-18 sm:h-20 md:h-24 w-auto object-contain'/>
                <div className='flex flex-col pl-3 xs:pl-4 sm:pl-5'>
                    <span className='text-start font-bold text-sm xs:text-base'>The University of Melbourne</span>
                    <br />
                    <span className='text-start text-[#355f8b] text-base xs:text-lg sm:text-[1.2rem] font-bold'>#1 <span className='text-[#4d8aab] font-normal text-sm xs:text-base sm:text-[1rem]'>in Australia</span></span>
                    <span className='text-start text-[#355f8b] text-base xs:text-lg sm:text-[1.2rem] font-bold'>#19 <span className='text-[#4d8aab] font-normal text-sm xs:text-base sm:text-[1rem]'>in the world</span></span>

                </div>
            </div>
            <br />
            <div className='flex items-center p-5 xs:p-4 sm:p-5 text-start z-10'>
                <img src='/logos/ibec-logo.jpg' className='h-16 xs:h-18 sm:h-20 md:h-24 w-auto object-contain'/>
                <div className='flex flex-col pl-3 xs:pl-4 sm:pl-5'>
                    <span className='text-start font-bold text-sm xs:text-base'>International Baccalaureate</span>
                    <br />
                    <span className='text-start text-[#355f8b] text-base xs:text-lg sm:text-[1.2rem] font-bold'>1.95M <span className='text-[#4d8aab] font-normal text-sm xs:text-base sm:text-[1rem]'>Students</span></span>
                    <span className='text-start text-[#355f8b] text-base xs:text-lg sm:text-[1.2rem] font-bold'>6000 <span className='text-[#4d8aab] font-normal text-sm xs:text-base sm:text-[1rem]'>Schools in <span className='text-start text-[#355f8b] text-base xs:text-lg sm:text-[1.2rem] font-bold'>160 <span className='text-[#4d8aab] font-normal text-sm xs:text-base sm:text-[1rem]'>Countries</span></span></span></span>
                </div>
            </div>
        </div>
    );
};