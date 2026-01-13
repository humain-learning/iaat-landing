import { Card } from "./Card";
import { cardData } from "./data";

export const ForWho = () => {
    return (
        <div className="flex flex-col">
            <div className="w-full h-full bg-[#124477] px-5 py-2 flex items-center justify-start">
                <img src='/assets/for-who-title.svg' className="object-contain h-full w-auto px-5" />
                <h1 className="font-normal text-white text-3xl px-5">
                    Who Is It For?
                </h1>
            </div>

            <div className="grid grid-cols-2 p-5 gap-5">
                {cardData.map((card, index) => (
                    <Card 
                        key={index}
                        image={card.image}
                        description={card.description}
                    />
                ))}
            </div>

            <div className="w-full h-full bg-[#124477] px-5 py-2 flex items-center justify-start">
                <img src='/assets/elligibility-title.svg' className="object-contain h-full w-auto px-5" />
                <h1 className="font-normal text-white text-3xl px-5">
                    Elligibility
                </h1>
            </div>
            
            <div className="w-full p-5">
                <div className=" w-full md:max-w-[25vw] h-auto flex flex-col items-start justify-start p-5 rounded-2xl border shadow-[1vmin_1vmin_0_0_#004b8c]">
                    <img src='/assets/elligibility-icon1.png' className="object-contain w-[30%] h-auto px-5 " />
                    <div className="w-full h-auto text-xl pt-3">
                        <p className="font-bold">Bachelor’s in Education</p>
                        <p className="font-normal">(or equivalent qualification) from a recognised university</p>
                    </div>
                    <div className="text-3xl font-bold text-[#124477] py-3">OR</div>
                    <img src='/assets/elligibility-icon2.png' className="object-contain w-[30%] h-auto px-5 " />
                    <div className="w-full h-auto text-xl py-3">
                        <p className="font-bold">Bachelor’s Degree</p>
                        <p className="font-normal">in any discipline with a minimum of three years of teaching experience</p>
                    </div>
                </div>
            </div>
        </div>


    );
};