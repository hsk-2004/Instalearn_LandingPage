"use client";

import Image from "next/image";
import { Lexend } from "next/font/google";

const lexend = Lexend({ subsets: ["latin"] });

export default function Analytics() {
    const items = [
        {
            title: "Behavioral insights",
            image: "/a1.svg",
            side: "left",
            top: "16px",
            left: "12px",
            width: "45px",
            height: "45px",
            textX: "-44px",
            textY: "0px"
        },
        {
            title: "Predictive analytics",
            image: "/a2.svg",
            side: "right",
            top: "16px",
            left: "36px",
            width: "45px",
            height: "45px",
            textX: "44px",
            textY: "0px"
        },
        {
            title: "Skill gap forecasting",
            image: "/a3.svg",
            side: "left",
            top: "16px",
            left: "12px",
            width: "45px",
            height: "45px",
            textX: "-44px",
            textY: "0px"
        },
        {
            title: "Learning impact metrics",
            image: "/a4.svg",
            side: "right",
            top: "16px",
            left: "36px",
            width: "45px",
            height: "45px",
            textX: "44px",
            textY: "0px"
        },
        {
            title: "Competitive benchmarking",
            image: "/a5.svg",
            side: "left",
            top: "16px",
            left: "12px",
            width: "45px",
            height: "45px",
            textX: "-44px",
            textY: "0px"
        }
    ];

    return (
        <section id="analytics" className={`py-24 px-6 flex flex-col items-center bg-[#FCF6E3] overflow-hidden ${lexend.className}`}>
            {/* 1. Header Pill */}
            <div className="mb-10 bg-white border border-[#9C9184]/40 rounded-[14px] p-1">
                <div className="bg-[#F4E9DB] border border-[#9C9184]/40 rounded-[10px] px-5 py-1 flex items-center justify-center">
                    <span className="text-[#9C9184] font-medium text-[15px] tracking-tight">Analytics That Drive Learning</span>
                </div>
            </div>

            {/* 2. Subtitle */}
            <p className="text-[#8B8374] text-center text-[15px] md:text-[17px] font-normal max-w-[420px] mb-20 leading-relaxed">
                Make data driven L&D decisions with real time insight into performance and skill development.
            </p>

            {/* 3. Staggered Items */}
            <div className="w-full max-w-[550px] flex flex-col gap-12">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`flex items-center gap-4 md:gap-8 ${item.side === "left" ? "flex-row self-start" : "flex-row-reverse self-end"
                            }`}
                    >
                        {/* SVG with White Box Background - Fixed Dimensions with Unique Icon Pos */}
                        <div className="bg-[#FFFCF1] rounded-[14px] w-[100px] h-[80px] shadow-lg shadow-orange-100/20 border border-[#E5E0D8]/40 relative group overflow-hidden flex-shrink-0">
                            <div
                                className="absolute transition-transform group-hover:scale-110 duration-300"
                                style={{
                                    top: item.top,
                                    left: item.left,
                                    width: item.width,
                                    height: item.height
                                }}
                            >
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>

                        {/* Text Box */}
                        <div
                            className="bg-[#FECE99] rounded-[16px] px-4 py-3 md:px-5 md:py-3.5 shadow-sm min-w-[160px] md:min-w-[210px] flex items-center justify-center transition-transform hover:scale-[1.02]"
                            style={{ transform: `translate(${item.textX}, ${item.textY})` }}
                        >
                            <span className="text-[#5D4037] font-semibold text-[14px] md:text-[16px] leading-snug text-center">
                                {item.title}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
