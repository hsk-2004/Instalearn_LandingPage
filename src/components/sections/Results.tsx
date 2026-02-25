"use client";

import Image from "next/image";

export default function Results() {
    return (
        <section className="py-12 px-4 flex flex-col items-center">
            {/* Results Pill */}
            <div className="mb-12">
                <Image
                    src="/results.svg"
                    alt="Results from InstaLearn"
                    width={189}
                    height={58}
                    priority
                />
            </div>

            {/* Scrollable Container with two rows */}
            <div className="w-full overflow-x-auto no-scrollbar pb-8">
                <div className="flex flex-col gap-4 min-w-max px-6">
                    {/* Top Row */}
                    <div className="flex gap-4">
                        {/* Card 1 - Small */}
                        <div className="w-[180px] h-[140px] bg-[#FEC893] rounded-[32px] p-6 flex flex-col justify-between shrink-0">
                            <div className="text-4xl font-bold text-[#5D4037]">
                                80%+
                            </div>
                            <div className="text-sm font-semibold text-[#5D4037] text-right">
                                Engagement rate
                            </div>
                        </div>

                        {/* Card 2 - Big */}
                        <div className="w-[280px] h-[140px] bg-[#FEC893] rounded-[32px] p-6 flex flex-col justify-between shrink-0">
                            <div className="flex items-baseline gap-1">
                                <div className="text-4xl font-bold text-[#5D4037]">4x</div>
                                <div className="text-xl font-medium text-[#5D4037] opacity-60">higher</div>
                            </div>
                            <div className="text-sm font-semibold text-[#5D4037] text-right">
                                Completion vs LMS
                            </div>
                        </div>
                    </div>

                    {/* Bottom Row */}
                    <div className="flex gap-4">
                        {/* Card 3 - Big */}
                        <div className="w-[300px] h-[140px] bg-[#FEC893] rounded-[32px] p-6 flex flex-col justify-between shrink-0">
                            <div className="flex items-baseline gap-2">
                                <div className="text-4xl font-bold text-[#5D4037]">3-5</div>
                                <div className="text-xl font-medium text-[#5D4037] opacity-60">min</div>
                            </div>
                            <div className="text-sm font-semibold text-[#5D4037] text-right">
                                Average lesson time
                            </div>
                        </div>

                        {/* Card 4 - Small */}
                        <div className="w-[180px] h-[140px] bg-[#FEC893] rounded-[32px] p-6 flex flex-col justify-between shrink-0">
                            <div className="flex items-baseline gap-1">
                                <div className="text-4xl font-bold text-[#5D4037]">2-3</div>
                                <div className="text-xl font-medium text-[#5D4037] opacity-60">min</div>
                            </div>
                            <div className="text-sm font-semibold text-[#5D4037] text-right">
                                Content creation
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
}
