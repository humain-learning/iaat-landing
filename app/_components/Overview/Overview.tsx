import { features } from "./data";

export const Overview = () => {
    return (
        <div className="w-full h-full flex flex-col items-center scroll-offset-target" id='overview'>
            <h1 className="text-2xl md:text-3xl lg:text-4xl px-5 pt-5 text-[#0b477f] font-bold text-center">
                THE INTERNATIONAL SYMBOL OF EXCELLENCE
            </h1>

            <div className=" w-full px-5 py-5 md:max-w-[80%] lg:max-w-[70%] text-center">
                <span>Gain a competitive advantage in the international education community. PGC-IB provides a pathway for you to gain a deep understanding of what it means to teach and lead in an IB context. Transform learning and be a catalyst for infusing higher-order thinking skills into a new generation of students. This 10-month, online, synchronous programme helps explore innovative approaches that transcend boundaries.</span>
            </div>
            <div className="w-full md:max-w-[80%] lg:max-w-[70%] px-5">

            {/* MOBILE: one simple list */}
            <div className="grid grid-cols-1 gap-5 md:hidden">
                {features.map(feature => (
                <div key={feature.id} className="flex items-center py-2">
                    <img
                    src={feature.icon}
                    alt={`Feature ${feature.id} icon`}
                    className="h-12 w-12 shrink-0"
                    />
                    <div className="text-normal pl-5">
                    <p>{feature.line1}</p>
                    <p>{feature.line2}</p>
                    </div>
                </div>
                ))}
            </div>

            {/* DESKTOP/TABLET (md+): your shifted layout */}
            <div className="hidden md:block">
                {/* First 4 — shifted as a group */}
                <div
                className="
                    grid grid-cols-2 gap-5 
                    md:ml-[8%] lg:ml-[12%]
                "
                >
                {features
                    .filter(f => f.id !== 5)
                    .map(feature => (
                    <div key={feature.id} className="flex items-center py-2">
                        <img
                        src={feature.icon}
                        alt={`Feature ${feature.id} icon`}
                        className="h-12 w-12 shrink-0"
                        />
                        <div className="text-normal pl-5">
                        <p>{feature.line1}</p>
                        <p>{feature.line2}</p>
                        </div>
                    </div>
                    ))}
                </div>

                {/* 5th item — centered, no shift */}
                {features
                .filter(f => f.id === 5)
                .map(feature => (
                    <div
                    key={feature.id}
                    className="flex items-center justify-center py-4"
                    >
                    <img
                        src={feature.icon}
                        alt={`Feature ${feature.id} icon`}
                        className="h-12 w-12 shrink-0"
                    />
                    <div className="text-normal pl-5">
                        <p>{feature.line1}</p>
                        <p>{feature.line2}</p>
                    </div>
                    </div>
                ))}
            </div>
            </div>


            <div className='py-5'><span className='text-lg text-blue-500'>Portfolio:</span><span className='text-lg'> Showcase of growth and authentic voice</span></div>
        </div>
    );
};