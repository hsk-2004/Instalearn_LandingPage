"use client";

import Image from "next/image";

export default function Analytics() {
    const items = [
        {
            title: "Competitive benchmarking",
            image: "/a5.svg",
            labelPos: "bottom"
        },
        {
            title: "Skill gap forecasting",
            image: "/a3.svg",
            labelPos: "top"
        },
        {
            title: "Learning impact metrics",
            image: "/a4.svg",
            labelPos: "bottom"
        },
        {
            title: "Predictive analytics",
            image: "/a2.svg",
            labelPos: "top"
        },
        {
            title: "Behavioral insights",
            image: "/a1.svg",
            labelPos: "bottom"
        },
        {
            title: "Adaptive Recommendations",
            image: "/a3.svg", // Reusing a3 as a placeholder for the 6th illustration
            labelPos: "top"
        }
    ];

    return (
        <section id="analytics" className="bg-[#FCF6E3] py-0 lg:py-24 min-h-[566px] lg:h-auto px-0 lg:px-[120px] overflow-hidden flex items-center lg:block">
            <div className="w-full max-w-[1440px] mx-auto">
                {/* Header */}
                <div className="pt-10 lg:pt-0 mb-8 lg:mb-20 text-left px-6 lg:px-0">
                    <h2 className="text-[#3D2C1E] font-lexend font-normal text-[32px] lg:text-[64px] leading-[1.1] mb-6 tracking-tight lg:ml-[130px]">
                        <span style={{ fontFamily: "'Parabole', cursive" }}>Analytics</span> That Drive <br />
                        Learning
                    </h2>
                    <p className="text-[#8B8374] font-medium text-[18px] lg:text-[20px] max-w-[500px] leading-relaxed opacity-80 lg:ml-[130px]">
                        Make data driven L&D decisions with real time insight into performance and skill development.
                    </p>
                </div>

                {/* Analytics Visual - Scrollable on mobile, Fixed on desktop */}
                <div className="w-full overflow-x-scroll lg:overflow-x-auto pb-10 lg:pb-4 scrollbar-hide touch-pan-x px-0 scroll-smooth">
                    <div className="relative h-[300px] lg:h-[344px] w-[1081px] lg:w-[1240px] shrink-0">
                        <Image
                            src="/analytics.svg"
                            alt="Analytics visualization"
                            fill
                            className="object-contain lg:object-center object-left"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

