"use client";

import Image from "next/image";
import { Lexend, Patrick_Hand } from "next/font/google";

const lexend = Lexend({ subsets: ["latin"] });
const patrickHand = Patrick_Hand({
    weight: "400",
    subsets: ["latin"]
});

const industries = [
    {
        name: "Manufacturing",
        image: "/b1.svg",
        x: "-60px",
        y: "0px",
    },
    {
        name: "Retail",
        image: "/b2.svg",
        x: "-30px",
        y: "0px",
    },
    {
        name: "Warehouses",
        image: "/b3.svg",
        x: "10px",
        y: "20px",
    },
    {
        name: "Field Sales",
        image: "/b4.svg",
        x: "50px",
        y: "20px",
    },
];

export default function Industries() {
    return (
        <section id="industries" className={`py-12 px-6 flex flex-col items-center bg-white overflow-hidden ${lexend.className}`}>
            {/* Header Badge */}
            <div className="mb-8 p-1 bg-white border border-[#9C9184]/30 rounded-[20px] shadow-sm">
                <div className="bg-[#F4E9DB] border border-[#9C9184]/20 rounded-[15px] px-8 py-2.5 flex items-center justify-center">
                    <span className="text-[#8B8374] font-semibold text-[15px] md:text-[17px] tracking-tight whitespace-nowrap">
                        Built For Frontline Teams
                    </span>
                </div>
            </div>

            {/* Main Heading */}
            <h2
                className="text-[#8B8374] text-center font-normal mb-16"
                style={{
                    width: '334px',
                    height: '44px',
                    fontSize: '16px',
                    lineHeight: '22px',
                    letterSpacing: '0.0024em',
                }}
            >
                Designed for teams that don't sit at desks but power your operations.
            </h2>

            {/* Grid of Industry Cards - Manual Position Layout */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 w-full max-w-[600px] mb-24 px-4">
                {industries.map((industry, index) => (
                    <div
                        key={index}
                        className="bg-[#F1E6D9] rounded-[12px] pt-[6px] px-[10px] flex flex-col items-center gap-[8px] w-[110px] h-[90px] relative overflow-hidden group hover:scale-[1.05] transition-all duration-300 shadow-sm border border-[#E5DACE]"
                        style={{
                            transform: `translate(${industry.x}, ${industry.y})`,
                        }}
                    >
                        <span className="text-[#5D4037] font-bold text-[12px] leading-tight text-center w-full z-10">
                            {industry.name}
                        </span>

                        {/* Industry Cutout Image */}
                        <div className="w-full flex-1 flex items-end justify-center relative overflow-visible">
                            <div className="relative w-[100px] h-[75px] transform translate-y-1 group-hover:scale-110 transition-transform duration-500 ease-out">
                                <Image
                                    src={industry.image}
                                    alt={industry.name}
                                    fill
                                    className="object-contain object-bottom"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom Support Bar */}
            <div className="flex flex-row items-center gap-4 w-full max-w-[800px] justify-center px-4">
                {/* Icons Container - Smaller Box */}
                <div className="bg-white border border-[#9C9184]/10 rounded-[20px] px-6 py-2.5 flex items-center gap-6 shadow-sm">
                    <div className="w-7 h-7 relative opacity-80 hover:opacity-100 transition-opacity">
                        {/* Apple Icon */}
                        <svg viewBox="0 0 384 512" className="w-full h-full fill-black">
                            <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                        </svg>
                    </div>
                    <div className="w-7 h-7 relative opacity-80 hover:opacity-100 transition-opacity">
                        {/* Android Icon */}
                        <svg viewBox="0 0 576 512" className="w-full h-full fill-[#A4C639]">
                            <path d="M420.55 301.93a24 24 0 1 1 24-24 24 24 0 0 1-24 24m-265.1 0a24 24 0 1 1 24-24 24 24 0 0 1-24 24m273.7-144.48l36.9-63.91a12.55 12.55 0 1 0-21.73-12.55l-37.37 64.73c-38.35-17.74-85-27.32-132.95-27.32s-94.6 9.58-132.95 27.32l-37.37-64.73a12.55 12.55 0 0 0-21.73 12.55l36.9 63.91C62.39 196.13 0 272.89 0 361.67h576c0-88.78-62.39-165.54-150.4-204.22" />
                        </svg>
                    </div>
                </div>

                {/* Text Container - Two Lines */}
                <div className={`bg-[#F9F3DC] border border-[#DECFB1]/30 rounded-[20px] px-5 py-2.5 flex items-center shadow-sm ${patrickHand.className}`}>
                    <span className="text-[#C25D23] text-[16px] md:text-[18px] font-medium leading-[1.2] text-left">
                        <span className="whitespace-nowrap">Fully supported on iOS and Android</span><br />
                        devices.
                    </span>
                </div>
            </div>
        </section>
    );
}
