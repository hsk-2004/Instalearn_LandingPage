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
        <section id="analytics" className="bg-[#FCF6E3] py-24 px-6 lg:px-[120px] overflow-hidden">
            <div className="max-w-[1440px] mx-auto">
                {/* Header */}
                <div className="mb-20 text-left">
                    <h2 className="text-[#3D2C1E] font-lexend font-normal text-[48px] lg:text-[64px] leading-[1.1] mb-6 tracking-tight">
                        Analytics That Drive <br />
                        Learning
                    </h2>
                    <p className="text-[#8B8374] font-medium text-[16px] lg:text-[20px] max-w-[500px] leading-relaxed opacity-80">
                        Make data driven L&D decisions with real time insight into performance and skill development.
                    </p>
                </div>

                {/* Analytics Visual */}
                <div className="relative w-full lg:w-[1240px] h-[300px] lg:h-[344px] mt-10 mx-auto">
                    <Image 
                        src="/analytics.svg" 
                        alt="Analytics visualization" 
                        fill 
                        className="object-contain"
                    />
                </div>
            </div>
        </section>
    );
}

