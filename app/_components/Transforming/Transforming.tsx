import { Marquee } from "../../ui/Marquee";
import { logos } from "./data";


export const Transforming = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center py-5">
            <h1 className="text-3xl font-bold text-[#0b477f] px-5 mb-5">
                Where Our Teachers Are Transforming Classrooms
            </h1>
            <div className="w-full overflow-hidden contain-layout_paint transform-[translateZ(0)]">
                <Marquee logos={logos} speed={70} pauseOnHover={false} />
            </div>
        </div>
    );
};