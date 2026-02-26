import Image from "next/image";

export default function Hero() {
    return (
        <section className="pt-32 pb-12 px-4 flex flex-col items-center text-center overflow-hidden">
            {/* Badge */}
            <div className="mb-12 relative flex justify-center w-full">
                <div className="relative inline-flex items-center bg-[#FFF9F2] border border-[#FFD9B3] rounded-[56px] px-[24px] py-[8px] h-[37px] gap-[10px] shadow-sm">
                    {/* Icon Placeholder - Positioned to the top left as requested */}
                    <div className="absolute -left-2 -top-3 flex items-center justify-center">
                        {/* Actual imported Mobile icon directly placed */}
                        <div className="relative w-[38px] h-[38px] transform -rotate-12">
                            <Image
                                src="/mobile.svg"
                                alt="Mobile Icon"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>
                    {/* Text box */}
                    <span className="text-[#1A1A1A] font-asap font-normal text-[16px] leading-[21px] tracking-[-0.0032em] ml-[14px] whitespace-nowrap">
                        Mobile First Learning
                    </span>
                </div>
            </div>

            {/* Headline SVG */}
            <div className="mb-6 px-4 w-full flex justify-center">
                <img
                    src="/heading.svg"
                    alt="Training that Actually reaches your Workforce"
                    className="w-full max-w-[360px] h-auto object-contain"
                />
            </div>

            {/* Subtext */}
            <p className="text-[#8B8374] text-[16px] font-medium leading-relaxed max-w-[400px] mb-8 px-4">
                AI powered micro learning directly through the tools your people already use.
            </p>

            {/* ROI Button */}
            <div className="mb-12">
                <button className="flex items-center justify-center bg-white border border-[#181815] rounded-[56px] px-[24px] py-[12px] w-[200px] h-[46px] shadow-sm hover:shadow-md transition-all active:scale-95">
                    <span className="text-[#181815] font-asap font-semibold text-[16px] leading-[22px]">
                        Calculate Your ROI
                    </span>
                </button>
            </div>

            {/* Main Image - No Box Container */}
            <div className="relative w-full max-w-[360px] mx-auto mt-2">
                <img
                    src="/mainimage.svg"
                    alt="Main Learning Interface"
                    className="w-full h-auto object-contain"
                />

                {/* Emoji Placeholder - Floating on the image */}
                <div className="absolute top-[10%] right-[10%] text-4xl transform translate-x-1/2 -translate-y-1/2">
                    🤩
                </div>
            </div>
        </section>
    );
}

