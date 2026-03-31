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
        <section id="analytics" className="bg-[#FCF6E3] py-0 lg:py-24 min-h-[566px] lg:h-auto px-0 overflow-hidden flex items-center lg:block">
            <div className="w-full max-w-[1440px] mx-auto lg:px-[80px] xl:px-[130px]">
                {/* Header */}
                <div className="pt-10 lg:pt-0 mb-8 md:mb-10 lg:mb-12 xl:mb-20 text-left md:text-center lg:text-left px-6 md:px-0 lg:px-0">
                    <h2
                        className="text-[#3D2C1E] font-lexend font-normal leading-[1.1] mb-6 tracking-tight"
                        style={{ fontSize: "clamp(32px, 5.0vw, 64px)" }}
                    >
                        <span style={{ fontFamily: "'Parabole', cursive" }}>Analytics</span> That Drive <br />
                        Learning
                    </h2>
                    <p
                        className="text-[#8B8374] font-medium max-w-[500px] md:mx-auto lg:mx-0 leading-relaxed opacity-80"
                        style={{ fontSize: "clamp(15px, 2.0vw, 20px)" }}
                    >
                        Make data driven L&D decisions with real time insight into performance and skill development.
                    </p>
                </div>

                {/* Analytics Visual - Scrollable on mobile, Fixed on desktop */}
                <div className="w-full overflow-x-auto lg:overflow-x-visible pb-10 lg:pb-4 scrollbar-hide touch-pan-x px-0 scroll-smooth">
                    <div className="relative h-[300px] lg:h-[400px] xl:h-[480px] w-[1081px] lg:w-full shrink-0">
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

