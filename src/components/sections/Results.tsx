"use client";

import Image from "next/image";

export default function Results() {
    return (
        <section id="results" className="py-24 px-0 bg-white overflow-hidden">
            <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-16 lg:gap-16 xl:gap-24 lg:px-[80px] xl:px-[130px]">

                {/* Left Content */}
                <div className="w-full lg:w-[45%] flex flex-col text-left md:text-center lg:text-left items-start md:items-center lg:items-start px-6 lg:px-0">
                    <h2
                        className="text-[#3D2C1E] font-lexend font-normal leading-[1.1] tracking-tight mb-8"
                        style={{ fontSize: "clamp(32px, 5.5vw, 64px)" }}
                    >
                        What Teams <br className="hidden lg:block" />
                        <span style={{ fontFamily: "'Parabole', cursive" }}>Achieve</span> <br className="lg:hidden" /> with <br className="hidden lg:block" />
                        InstaLearn
                    </h2>
                    <p
                        className="text-[#8B8374] font-medium leading-[1.6] max-w-[540px] lg:max-w-[clamp(380px,38vw,540px)] md:mx-auto lg:mx-0 opacity-80 mb-12 lg:mb-0 lg:whitespace-nowrap"
                        style={{ fontSize: "clamp(16px, 2.2vw, 22px)" }}
                    >
                        Short lessons, mobile access, AI-powered <br className="hidden lg:block" />
                        creation drive engagement & faster team <br className="hidden lg:block" />
                        training.
                    </p>

                    {/* Mobile Metrics SVG (Shown only on mobile) */}
                    <div className="lg:hidden w-full overflow-x-auto pb-4 scrollbar-hide md:flex md:justify-center">
                        <div className="w-[361px] md:w-[600px] aspect-[361/252] md:aspect-[600/418] relative shrink-0 md:mx-auto">
                            <Image
                                src="/Metrics.svg"
                                alt="Metrics visualization"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>

                {/* Right Content - Stats Grid (Hidden on mobile) */}
                <div className="hidden lg:flex lg:w-[55%] flex-col gap-2 lg:gap-2.5 lg:-translate-x-6 xl:-translate-x-12">

                    {/* Top Row */}
                    <div className="flex flex-col sm:flex-row gap-2 lg:gap-2.5">
                        {/* 80% - Engagement rate */}
                        <div className="w-[40%] min-h-[160px] xl:min-h-[188px] bg-[#FECE99] rounded-[16px] p-6 xl:p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300 shrink-0">
                            <div className="flex items-start">
                                <span className="text-[#3D2C1E] font-bold text-[50px] xl:text-[64px] leading-none tracking-tight">80</span>
                                <span className="text-[#3D2C1E] font-medium text-[20px] xl:text-[24px] mt-2 ml-1 opacity-60">%</span>
                            </div>
                            <div className="text-[#3D2C1E] font-medium text-[15px] xl:text-[18px] text-right mt-4 opacity-80">
                                Engagement rate
                            </div>
                        </div>

                        {/* 4x higher - Completion vs LMS */}
                        <div className="flex-1 min-h-[160px] xl:min-h-[188px] bg-[#FECE99] rounded-[16px] p-6 xl:p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                            <div className="flex items-baseline">
                                <span className="text-[#3D2C1E] font-bold text-[50px] xl:text-[64px] leading-none tracking-tight">4x</span>
                                <span className="text-[#3D2C1E] font-medium text-[20px] xl:text-[24px] ml-2 opacity-60">higher</span>
                            </div>
                            <div className="text-[#3D2C1E] font-medium text-[15px] xl:text-[18px] text-right mt-4 opacity-80">
                                Completion vs LMS
                            </div>
                        </div>
                    </div>

                    {/* Bottom Row */}
                    <div className="flex flex-col sm:flex-row gap-2 lg:gap-2.5">
                        {/* 3-5 min - Average lesson time */}
                        <div className="flex-1 min-h-[160px] xl:min-h-[188px] bg-[#FECE99] rounded-[16px] p-6 xl:p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                            <div className="flex items-baseline">
                                <span className="text-[#3D2C1E] font-bold text-[50px] xl:text-[64px] leading-none tracking-tight">3-5</span>
                                <span className="text-[#3D2C1E] font-medium text-[20px] xl:text-[24px] ml-2 opacity-60">min</span>
                            </div>
                            <div className="text-[#3D2C1E] font-medium text-[15px] xl:text-[18px] text-right mt-4 opacity-80">
                                Average lesson time
                            </div>
                        </div>

                        {/* 2-3 min - Content creation */}
                        <div className="w-[40%] min-h-[160px] xl:min-h-[188px] bg-[#FECE99] rounded-[16px] p-6 xl:p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300 shrink-0">
                            <div className="flex items-baseline">
                                <span className="text-[#3D2C1E] font-bold text-[50px] xl:text-[64px] leading-none tracking-tight">2-3</span>
                                <span className="text-[#3D2C1E] font-medium text-[20px] xl:text-[24px] ml-2 opacity-60">min</span>
                            </div>
                            <div className="text-[#3D2C1E] font-medium text-[15px] xl:text-[18px] text-right mt-4 opacity-80">
                                Content creation
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}