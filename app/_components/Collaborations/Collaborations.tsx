import { logos } from "./data";

export const Collaborations = () => {
    return (
        <div className="w-full flex flex-col p-5 scroll-offset-target items-center" id='collaborations'>
            <h1 className="w-full text-3xl font-bold text-[#0b477f] text-center">
                Collaborations
            </h1>

            <div className="grid grid-cols-3 gap-5 p-5 items-center justify-items-center w-full md:w-[90vw] lg:w-[70vw]">
                {logos.map((logo, index) => (
                    <div key={index} className="w-full aspect-square flex items-center justify-center md:max-w-20 lg:max-w-20">
                        <img src={logo.src} alt={`Logo ${index + 1}`} className="w-full h-full object-contain" />
                    </div>
                ))}
            </div>
        </div>
    );
};