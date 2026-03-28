"use client";

import Image from "next/image";

export default function Results() {
    return (
        <section id="results" className="py-24 px-0 lg:px-[120px] bg-white overflow-hidden">
            <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-16 lg:gap-24">

                {/* Left Content */}
                <div className="w-full lg:w-[45%] flex flex-col text-center lg:text-left px-6 lg:px-0">
                    <h2 className="text-[#3D2C1E] font-lexend font-normal text-[48px] lg:text-[64px] leading-[1.1] tracking-[-0.02em] mb-8">
                        What Teams <br />
                        Achieve with <br />
                        InstaLearn
                    </h2>
                    <p className="text-[#8B8374] font-medium text-[18px] lg:text-[22px] leading-[1.6] max-w-[540px] opacity-80 mb-12 lg:mb-0">
                        Short lessons, mobile access, AI-powered creation drive engagement & faster team training.
                    </p>

                    {/* Mobile Metrics SVG (Shown only on mobile) */}
                    <div className="lg:hidden w-full overflow-x-auto pb-4 scrollbar-hide">
                        <div className="w-[361px] h-[252px] relative shrink-0">
                            <Image
                                src="/Metrics.svg"
                                alt="Metrics visualization"
                                width={361}
                                height={252}
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>

                {/* Right Content - Stats Grid (Hidden on mobile) */}
                <div className="hidden lg:flex lg:w-[55%] flex-col gap-2 lg:gap-2.5">

                    {/* Top Row */}
                    <div className="flex flex-col sm:flex-row gap-2 lg:gap-2.5">
                        {/* 80% - Engagement rate */}
                        <div className="w-full lg:w-[271px] lg:h-[188px] bg-[#FECE99] rounded-[16px] p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300 shrink-0">
                            <div className="flex items-start">
                                <span className="text-[#3D2C1E] font-bold text-[64px] leading-none tracking-tight">80</span>
                                <span className="text-[#3D2C1E] font-medium text-[24px] mt-2 ml-1 opacity-60">%</span>
                            </div>
                            <div className="text-[#3D2C1E] font-medium text-[16px] lg:text-[18px] text-right mt-4 opacity-80">
                                Engagement rate
                            </div>
                        </div>

                        {/* 4x higher - Completion vs LMS */}
                        <div className="w-full lg:w-[404px] lg:h-[188px] bg-[#FECE99] rounded-[16px] p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300 shrink-0">
                            <div className="flex items-baseline">
                                <span className="text-[#3D2C1E] font-bold text-[64px] leading-none tracking-tight">4x</span>
                                <span className="text-[#3D2C1E] font-medium text-[24px] ml-2 opacity-60">higher</span>
                            </div>
                            <div className="text-[#3D2C1E] font-medium text-[16px] lg:text-[18px] text-right mt-4 opacity-80">
                                Completion vs LMS
                            </div>
                        </div>
                    </div>

                    {/* Bottom Row */}
                    <div className="flex flex-col sm:flex-row gap-2 lg:gap-2.5">
                        {/* 3-5 min - Average lesson time */}
                        <div className="w-full lg:w-[404px] lg:h-[188px] bg-[#FECE99] rounded-[16px] p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300 shrink-0">
                            <div className="flex items-baseline">
                                <span className="text-[#3D2C1E] font-bold text-[64px] leading-none tracking-tight">3-5</span>
                                <span className="text-[#3D2C1E] font-medium text-[24px] ml-2 opacity-60">min</span>
                            </div>
                            <div className="text-[#3D2C1E] font-medium text-[16px] lg:text-[18px] text-right mt-4 opacity-80">
                                Average lesson time
                            </div>
                        </div>

                        {/* 2-3 min - Content creation */}
                        <div className="w-full lg:w-[271px] lg:h-[188px] bg-[#FECE99] rounded-[16px] p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300 shrink-0">
                            <div className="flex items-baseline">
                                <span className="text-[#3D2C1E] font-bold text-[64px] leading-none tracking-tight">2-3</span>
                                <span className="text-[#3D2C1E] font-medium text-[24px] ml-2 opacity-60">min</span>
                            </div>
                            <div className="text-[#3D2C1E] font-medium text-[16px] lg:text-[18px] text-right mt-4 opacity-80">
                                Content creation
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

