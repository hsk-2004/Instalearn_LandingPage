"use client";

import Image from "next/image";

export default function Comparison() {
    return (
        <section className="py-12 bg-white/50">
            <div className="flex flex-col items-center mb-16 px-4">
                {/* Comparison Pill */}
                <div className="bg-white border border-[#E5E0D8] rounded-[18px] p-1.5 shadow-sm">
                    <div className="bg-[#F3E9DD] border border-[#DED4C7] rounded-[14px] px-5 py-2">
                        <span className="text-[15px] font-semibold text-[#8B8374]">Why you should switch to instalearn</span>
                    </div>
                </div>
            </div>

            {/* Traditional LMS Section */}
            <div className="mb-14">
                <h3 className="text-[#5D4037] font-extrabold text-xl mb-12 px-6">Traditional LMS</h3>

                <div className="flex overflow-x-auto pb-8 snap-x no-scrollbar">
                    <div className="flex gap-2 px-6 min-w-full">
                        {[1, 2, 3, 4, 5, 6].map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center flex-shrink-0 w-[160px] snap-center">
                                {/* Direct Image - No Box */}
                                <div className="w-48 h-48 flex items-center justify-center">
                                    <img
                                        src={`/traditional/${item}.svg`}
                                        alt={`Traditional LMS ${item}`}
                                        className="w-full h-full object-contain"
                                        onError={(e) => {
                                            e.currentTarget.style.display = 'none';
                                            e.currentTarget.parentElement!.innerHTML = '<span class="text-6xl opacity-20">📦</span>';
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* InstaLearn Section */}
            <div>
                <h3 className="text-[#5D4037] font-extrabold text-xl mb-12 px-6">InstaLearn</h3>

                <div className="flex overflow-x-auto pb-8 snap-x no-scrollbar">
                    <div className="flex gap-4 px-6 min-w-full">
                        {[
                            { label: "Mobile-first", id: 1 },
                            { label: "Ready instantly", id: 2 },
                            { label: "3-5 min lessons", id: 3 },
                            { label: "90% completion", id: 4 },
                        ].map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center flex-shrink-0 w-[140px] snap-center">
                                {/* Direct Image - No Box */}
                                <div className="w-20 h-20 flex items-center justify-center mb-[-10px] z-10">
                                    <img
                                        src={`/instalearn/${item.id}.svg`}
                                        alt={item.label}
                                        className="w-full h-full object-contain"
                                        onError={(e) => {
                                            e.currentTarget.style.display = 'none';
                                            e.currentTarget.parentElement!.innerHTML = '<span class="text-3xl">✨</span>';
                                        }}
                                    />
                                </div>
                                {/* Slanted Label */}
                                <div className="w-[160px] bg-[#FFD5CB] py-3.5 px-2 rounded-[12px] text-center transform -rotate-2 shadow-sm border border-[#F5C7BD]">
                                    <span className="text-[14px] font-bold text-[#5D4037] whitespace-nowrap italic">{item.label}</span>
                                </div>
                            </div>
                        ))}
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

