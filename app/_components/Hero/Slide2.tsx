
export const Slide2 = () => {
    return (
        <div className="w-full h-full flex flex-col relative">
            <h1 className="text-[2rem] mb-2 text-foreground px-5 py-5 text-start">
                    Post-Graduate Certificate in IB Education
            </h1>

            <div className='text-[#124578] text-[1.5rem] px-5 py-5 text-start'>Dual Certificate</div>

            <div className='flex items-center p-5 text-start'>
                <img src='/logos/uni-mel-logo.svg' className='h-24 w-auto object-contain'/>
                <div className='flex flex-col pl-5'>
                    <span className='text-start font-bold'>The University of Melbourne</span>
                    <br />
                    <span className='text-start text-[#355f8b] text-[1.2rem] font-bold'>#1 <span className='text-[#4d8aab] font-normal text-[1rem]'>in Australia</span></span>
                    <span className='text-start text-[#355f8b] text-[1.2rem] font-bold'>#19 <span className='text-[#4d8aab] font-normal text-[1rem]'>in the world</span></span>

                </div>
            </div>
            <br />
            <div className='flex items-center p-5 text-start z-10'>
                <img src='/logos/ibec-logo.jpg' className='h-24 w-auto object-contain'/>
                <div className='flex flex-col pl-5'>
                    <span className='text-start font-bold'>The University of Melbourne</span>
                    <br />
                    <span className='text-start text-[#355f8b] text-[1.2rem] font-bold'>1.95M <span className='text-[#4d8aab] font-normal text-[1rem]'>Students</span></span>
                    <span className='text-start text-[#355f8b] text-[1.2rem] font-bold'>6000 <span className='text-[#4d8aab] font-normal text-[1rem]'>Schools in <span className='text-start text-[#355f8b] text-[1.2rem] font-bold'>160 <span className='text-[#4d8aab] font-normal text-[1rem]'>Countries</span></span></span></span>

                </div>
            </div>
        </div>
    );
};