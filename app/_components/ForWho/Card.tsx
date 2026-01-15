import { desc } from "framer-motion/client";

interface CardProps {
    image: string;
    description: string;
}

export const Card = ({ image, description }: CardProps) => {
    return (
        <div className="w-full text-md h-auto aspect-3/4 md:aspect-4/3 flex flex-col items-start justify-start border p-5 rounded-2xl shadow-[1vmin_1vmin_0_0_#004b8c]">
            <div className="w-2/5 pb-3"><img src={image} alt={description} className="object-contain w-[80%]"/></div>
            <div className="w-full h-auto text-sm md:py-5">{description}</div>
        </div>
    );
};