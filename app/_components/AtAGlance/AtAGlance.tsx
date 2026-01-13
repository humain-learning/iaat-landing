import { PrimaryButton } from "../../ui/PrimaryButton";


export const AtAGlance = () => {
    return (
        <div className="w-full flex flex-col p-5 scroll-offset-target" id="overview">
            <h2 className=" w-full text-3xl font-bold pb-4 text-[#004b8c]">At A Glance</h2>

            <div className="w-full md:max-w-[25vw] text-xl h-auto flex flex-col items-start justify-start p-5 rounded-2xl border shadow-[1vmin_1vmin_0_0_#004b8c]">
                <span className="pb-0.5 font-normal">Course:</span>
                <span className="py-0.5 font-bold">PG Certificate in IB Education</span>
                <span className="pb-0.5 pt-5 font-normal">Mode:</span>
                <span className="py-0.5 font-bold">Online, Synchronous</span>
                <span className="pb-0.5 pt-5 font-normal">Duration:</span>
                <span className="py-0.5 font-bold">10 Months</span>
                <button className="text-lg pt-7 flex items-end justify-center underline underline-offset-4">
                    <span className="">Download FAQs</span>
                    <img src="/icons/download.svg" alt="Download Icon" className="h-[80%] ml-2 object-contain pb-0.5" />
                </button>
                <PrimaryButton 
                    text="Download Brochure" 
                    href="/apply" 
                    className="mt-5 w-full"
                    icon={<img src="/icons/download.svg" alt="Play Icon" className="h-5 w-5 object-contain ml-2" />}
                />
            </div>
        </div>
    );
};