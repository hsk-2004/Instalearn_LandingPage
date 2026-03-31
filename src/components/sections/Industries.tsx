"use client";

import Image from "next/image";

const industries = [
    {
        name: "Manufacturing",
        image: "/b1.svg",
        top: "10%",
        left: "0%",
        labelColor: "bg-[#FECE99]/80"
    },
    {
        name: "Warehouses",
        image: "/b3.svg",
        top: "10%",
        left: "55%",
        labelColor: "bg-[#FECE99]/80"
    },
    {
        name: "Retail",
        image: "/b2.svg",
        top: "40%",
        left: "30%",
        labelColor: "bg-[#FECE99]/80"
    },
    {
        name: "Logistics",
        image: "/b1.svg",
        top: "65%",
        left: "0%",
        labelColor: "bg-[#FECE99]/80"
    },
    {
        name: "Field Sales",
        image: "/b4.svg",
        top: "65%",
        left: "55%",
        labelColor: "bg-[#FECE99]/80"
    },
];

export default function Industries() {
    return (
        <section id="industries" className="bg-white py-0 lg:py-24 min-h-[708px] lg:min-h-0 lg:h-auto px-0 overflow-hidden flex items-center lg:block">
            <div className="w-full max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12 xl:gap-16 overflow-hidden lg:px-[80px] xl:px-[130px]">

                {/* Left Content */}
                <div className="w-full lg:w-[45%] flex flex-col text-left md:text-center lg:text-left items-start md:items-center lg:items-start px-6 md:px-0 lg:px-0">
                    <h2
                        className="text-[#3D2C1E] font-lexend font-normal leading-[1.1] tracking-tight mb-2 lg:mb-6"
                        style={{ fontSize: "clamp(32px, 5.0vw, 64px)" }}
                    >
                        Built For Frontline <br />
                        <span style={{ fontFamily: "'Parabole', cursive" }}>Teams</span>
                    </h2>
                    <p
                        className="text-[#8B8374] font-medium leading-relaxed mb-4 lg:mb-20 xl:mb-40 max-w-[420px] md:mx-auto lg:mx-0 opacity-80"
                        style={{ fontSize: "clamp(15px, 2.0vw, 20px)" }}
                    >
                        Designed for teams that don't sit at desks <br className="hidden lg:block" />
                        but power your operations.
                    </p>

                    {/* Support Box - Desktop only */}
                    <div
                        className="hidden lg:flex bg-[#FCF6E3] rounded-[24px] items-center gap-8 shadow-sm px-8"
                        style={{ width: "465px", height: "72px" }}
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 lg:w-11 lg:h-11 bg-white rounded-full flex items-center justify-center p-2.5 shadow-sm">
                                <Image src="/logo.svg" alt="Apple" width={22} height={22} className="brightness-0" />
                            </div>
                            <div className="w-10 h-10 lg:w-11 lg:h-11 bg-white rounded-full flex items-center justify-center p-2.5 shadow-sm">
                                <Image src="/instalearn/i1.svg" alt="Android" width={22} height={22} />
                            </div>
                        </div>
                        <p
                            className="text-[#CE510B] italic leading-tight font-medium max-w-none"
                            style={{ fontSize: "20px" }}
                        >
                            Fully supported on iOS and Android devices
                        </p>
                    </div>
                </div>

                {/* Right Visual Area - Staggered Bubbles */}
                <div className="w-full lg:w-[55%] overflow-x-scroll md:overflow-x-visible lg:overflow-x-visible scrollbar-hide touch-pan-x px-4 md:px-0 lg:px-0 scroll-smooth pb-4">
                    <div className="w-[550px] md:w-[750px] md:mx-auto md:translate-x-16 lg:w-full h-[320px] md:h-[450px] lg:h-[480px] xl:h-[600px] relative mt-0 lg:mt-0">
                        {industries.map((item, index) => (
                            <div
                                key={index}
                                className="absolute flex items-center group transition-all duration-500 hover:scale-110"
                                style={{ top: item.top, left: item.left }}
                            >
                                {/* Profile Bubble */}
                                <div
                                    className="bg-[#F2E9DC] rounded-[60px] relative overflow-hidden shadow-sm border-0"
                                    style={{ width: "clamp(120px, 18vw, 200px)", height: "clamp(75px, 11vw, 122px)" }}
                                >
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-contain object-bottom -translate-x-3 pt-4"
                                    />
                                </div>

                                {/* Label */}
                                <div className={`${item.labelColor} backdrop-blur-md px-4 py-2 lg:px-5 xl:px-6 lg:py-2.5 xl:py-3 rounded-[12px] shadow-sm ml-[-35px] relative z-10 border border-white/50`}>
                                    <span
                                        className="text-[#3D2C1E] font-lexend font-bold"
                                        style={{ fontSize: "clamp(11px, 1.5vw, 18px)" }}
                                    >
                                        {item.name}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Support Box - Mobile only */}
                <div className="flex lg:hidden bg-[#FCF6E3] rounded-[16px] md:rounded-[20px] p-4 md:p-5 items-center gap-6 shadow-sm mt-0 mx-6 md:mx-auto md:max-w-[465px] md:justify-center md:-translate-y-8 relative z-20">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 md:w-11 md:h-11 bg-white rounded-full flex items-center justify-center p-2.5 shadow-sm">
                            <Image src="/logo.svg" alt="Apple" width={24} height={24} className="brightness-0" />
                        </div>
                        <div className="w-10 h-10 md:w-11 md:h-11 bg-white rounded-full flex items-center justify-center p-2.5 shadow-sm">
                            <Image src="/instalearn/i1.svg" alt="Android" width={24} height={24} />
                        </div>
                    </div>
                    <p className="text-[#CE510B] italic text-[16px] md:text-[18px] leading-tight font-medium max-w-[200px] md:max-w-none">
                        Fully supported on iOS and Android devices
                    </p>
                </div>
            </div>
        </section>
    );
}