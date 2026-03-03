"use client";

import Image from "next/image";
import { MessageSquare, Users, RotateCw, ThumbsUp } from "lucide-react";
import { Patrick_Hand } from "next/font/google";

const patrickHand = Patrick_Hand({ weight: "400", subsets: ["latin"] });

export default function SocialLearning() {
    const items = [
        {
            title: "Share In Existing Team Channels",
            image: "/l1.svg",
            translate: "md:translate-x-[-40px]",
            zIndex: "z-10"
        },
        {
            title: "Peer Driven Learning",
            image: "/l2.svg",
            translate: "md:translate-x-[60px]",
            zIndex: "z-20"
        },
        {
            title: "Continuous Engagement Loops",
            image: "/l3.svg",
            translate: "md:translate-x-[-20px]",
            zIndex: "z-10"
        },
        {
            title: "Real Time Reactions",
            image: "/l4.svg",
            translate: "md:translate-x-[40px]",
            zIndex: "z-20"
        }
    ];

    return (
        <section className="py-12 px-6 flex flex-col items-center bg-white overflow-hidden">
            {/* 1. Quote Heading */}
            <div className="w-full flex flex-col items-center justify-center mb-8">
                <h2 className={`text-[#CE510B] text-center text-[20px] sm:text-[23px] md:text-[26px] lg:text-[30px] font-normal leading-tight px-4 ${patrickHand.className}`}>
                    <div className="whitespace-nowrap">"Training That Spreads Through You Organisation</div>
                    <div className="whitespace-nowrap">The Way Information Does Through WhatsApp"</div>
                </h2>
            </div>

            {/* 2. Header Pill */}
            <div className="mb-10 bg-white border border-[#8A7B6A] rounded-[14px] p-1">
                <div className="bg-[#F4E9DB] border border-[#8A7B6A] rounded-[10px] px-5 py-1 flex items-center justify-center">
                    <span className="text-[#9C9184] font-asap font-medium text-[16px] sm:text-[16px] md:text-[17px] lg:text-[19px] tracking-tight">Learning That Spreads Naturally</span>
                </div>
            </div>

            {/* 3. Subtitle */}
            <div className="text-[#8B8374] text-[16px] sm:text-[15px] md:text-[16px] lg:text-[18px] font-medium mb-16 leading-relaxed opacity-90 flex flex-col items-center w-full">
                <span className="whitespace-nowrap">InstaLearn combines AI driven micro learning</span>
                <span className="whitespace-nowrap">with social learning</span>
            </div>

            {/* 4. Staggered Items - Spreading naturally but Right Aligned */}
            <div className="w-full max-w-[480px] flex flex-col gap-10 items-end">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`relative ${index % 2 === 1 ? "w-[195px]" : "w-[279px]"} ${item.translate} ${item.zIndex} transition-all duration-300 hover:scale-[1.02]`}
                    >
                        {/* SVG image only, without the container box */}
                        <div
                            className={`absolute -top-6 ${index % 2 === 0 ? "-right-4" : "-left-4"
                                } z-10 transition-transform w-11 h-11`}
                        >
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-contain"
                            />
                        </div>

                        {/* Content Box */}
                        <div className={`bg-[#F2E9DD] shadow-sm border border-[#DED4C7]/40 transition-all hover:bg-[#EFE4D5] flex flex-col items-center justify-center rounded-[12px] px-[12px] py-[16px] min-h-[53px]`}>
                            <span className={`text-[#5D4037] font-semibold text-[15px] sm:text-[15.5px] md:text-[16px] lg:text-[18px] leading-tight block text-center`}>
                                {item.title}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
