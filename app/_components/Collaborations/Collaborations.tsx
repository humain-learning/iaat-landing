import { logos } from "./data";

export const Collaborations = () => {
    return (
        <div className="w-full flex flex-col p-5">
            <h1 className="text-3xl font-bold text-[#0b477f]">
                Collaborations
            </h1>

            <div className="grid grid-cols-3 gap-5 p-5 items-center justify-items-center">
                {logos.map((logo, index) => (
                    <div key={index} className="w-full aspect-square flex items-center justify-center">
                        <img src={logo.src} alt={`Logo ${index + 1}`} className="w-full h-full object-contain" />
                    </div>
                ))}
            </div>
        </div>
    );
};