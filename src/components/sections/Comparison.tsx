"use client";

import Image from "next/image";

export default function Comparison() {
    return (
        <section className="py-12 bg-[#FCF6E3]">
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

                <div className="flex overflow-x-auto pt-10 pb-8 snap-x no-scrollbar">
                    <div className="flex gap-0 px-6 min-w-full">
                        {[
                            { id: 1, label: "Desktop-first", rot: "-8deg", imgRot: "0deg", boxRot: "-8deg", xOffset: "0px", imgXOffset: "-15px" },
                            { id: 2, label: "Complex UI", rot: "8deg", imgRot: "0deg", boxRot: "8deg", xOffset: "0px", imgXOffset: "15px" },
                            { id: 3, label: "Low completion", rot: "-8deg", imgRot: "0deg", boxRot: "-8deg", xOffset: "0px", imgXOffset: "-15px" },
                            { id: 4, label: "High cost", rot: "8deg", imgRot: "0deg", boxRot: "8deg", xOffset: "0px", imgXOffset: "15px" },
                            { id: 5, label: "Boring content", rot: "-8deg", imgRot: "0deg", boxRot: "-8deg", xOffset: "0px", imgXOffset: "-15px" },
                            { id: 6, label: "Slow updates", rot: "8deg", imgRot: "0deg", boxRot: "8deg", xOffset: "0px", imgXOffset: "15px" }
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="flex flex-col items-center flex-shrink-0 w-[138.6px] snap-center"
                            >
                                {/* Direct Image - No Box */}
                                <div
                                    className="w-16 h-16 flex items-center justify-center mb-4"
                                    style={{ transform: `rotate(${item.rot}) rotate(${item.imgRot}) translateX(${item.imgXOffset})` }}
                                >
                                    <img
                                        src={`/traditional/${item.id}.svg`}
                                        alt={`Traditional LMS ${item.id}`}
                                        className="w-full h-full object-contain"
                                        onError={(e) => {
                                            e.currentTarget.style.display = 'none';
                                            e.currentTarget.parentElement!.innerHTML = '<span class="text-4xl opacity-20">📦</span>';
                                        }}
                                    />
                                </div>
                                {/* Label Box */}
                                <div
                                    className="w-[140px] h-7 flex items-center justify-center rounded-xl text-[14px] leading-[20px] tracking-[-0.0024em] font-normal text-[#5D4037] font-lexend"
                                    style={{
                                        backgroundColor: '#FECE99',
                                        transform: `rotate(${item.rot}) rotate(${item.boxRot}) translateX(${item.xOffset})`,
                                        boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                                    }}
                                >
                                    {item.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* InstaLearn Section */}
            <div>
                <h3 className="text-[#5D4037] font-extrabold text-xl mb-12 px-6">InstaLearn</h3>

                <div className="flex overflow-x-auto pt-10 pb-8 snap-x no-scrollbar">
                    <div className="flex gap-0 px-6 min-w-full">
                        {[
                            { id: 1, label: "Mobile-first", rot: "-8deg", imgRot: "0deg", boxRot: "-8deg", xOffset: "0px", imgXOffset: "-15px" },
                            { id: 2, label: "AI-powered", rot: "8deg", imgRot: "0deg", boxRot: "8deg", xOffset: "0px", imgXOffset: "15px" },
                            { id: 3, label: "80%+ Engagement", rot: "-8deg", imgRot: "0deg", boxRot: "-8deg", xOffset: "0px", imgXOffset: "-15px" },
                            { id: 4, label: "Quick creation", rot: "8deg", imgRot: "0deg", boxRot: "8deg", xOffset: "0px", imgXOffset: "15px" },
                            { id: 5, label: "5-min modules", rot: "-8deg", imgRot: "0deg", boxRot: "-8deg", xOffset: "0px", imgXOffset: "-15px" },
                            { id: 6, label: "Effortless share", rot: "8deg", imgRot: "0deg", boxRot: "8deg", xOffset: "0px", imgXOffset: "15px" }
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="flex flex-col items-center flex-shrink-0 w-[138.6px] snap-center"
                            >
                                {/* Direct Image - No Box */}
                                <div
                                    className="w-16 h-16 flex items-center justify-center mb-4"
                                    style={{ transform: `rotate(${item.rot}) rotate(${item.imgRot}) translateX(${item.imgXOffset})` }}
                                >
                                    <img
                                        src={`/instalearn/i${item.id}.svg`}
                                        alt={`InstaLearn ${item.id}`}
                                        className="w-full h-full object-contain"
                                        onError={(e) => {
                                            e.currentTarget.style.display = 'none';
                                            e.currentTarget.parentElement!.innerHTML = '<span class="text-4xl">✨</span>';
                                        }}
                                    />
                                </div>
                                {/* Label Box */}
                                <div
                                    className="w-[140px] h-7 flex items-center justify-center rounded-xl text-[14px] leading-[20px] tracking-[-0.0024em] font-normal text-[#5D4037] font-lexend"
                                    style={{
                                        backgroundColor: '#FECE99',
                                        transform: `rotate(${item.rot}) rotate(${item.boxRot}) translateX(${item.xOffset})`,
                                        boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                                    }}
                                >
                                    {item.label}
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
