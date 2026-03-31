import Image from "next/image";

export default function Hero() {
    const HighlightBox = ({ className }: { className?: string }) => (
        <div
            className={`w-full md:max-w-[485px] lg:max-w-[625px] md:mx-auto lg:mx-0 min-h-[72px] lg:h-auto bg-[#FFF9EE] border border-[#FFD9B3]/50 rounded-[12px] flex items-center px-[24px] py-4 shadow-sm overflow-hidden ${className}`}
        >
            <p
                className="text-[#CE510B] font-medium text-[14px] md:text-[17px] lg:text-[20px] leading-relaxed italic opacity-90"
                style={{ fontFamily: "'Avenir Next', sans-serif" }}
            >
                Mobile First Learning, Training delivered instantly to your <br className="hidden lg:block" />
                workforce through the devices they already use.
            </p>
        </div>
    );

    return (
        <section className="pt-32 lg:pt-40 pb-10 lg:pb-20 px-0 overflow-hidden flex justify-center w-full">
            <div className="w-full max-w-[1440px] flex flex-col lg:flex-row items-center lg:justify-between text-left md:text-center lg:text-left lg:gap-16 px-6 lg:px-[80px] xl:px-[100px]">
            {/* Left Content Container */}
            <div className="flex flex-col items-start md:items-center lg:items-start w-full lg:w-[50%] z-10">
                {/* Headline */}
                <h1 className="text-[#562F00] font-lexend font-normal text-[30px] md:text-[40px] lg:text-[clamp(40px,4vw,56px)] leading-[1.2] lg:leading-[clamp(52px,5.2vw,72px)] tracking-[0.35px] mb-4 text-left md:text-center lg:text-left">
                    Training that{" "}
                    <span className="font-normal text-[30px] md:text-[40px] lg:text-[clamp(40px,4vw,56px)] leading-[1] text-[#CE510B]" style={{ fontFamily: "'Parabole', cursive" }}>
                        Actually
                    </span>{" "}
                    <br className="hidden lg:block" />
                    <span className="whitespace-nowrap">reaches your Workforce</span>
                </h1>

                {/* Subtext */}
                <p className="text-[#8B8374] text-[16px] lg:text-[clamp(18px,1.8vw,22px)] font-medium leading-[1.5] max-w-[540px] lg:max-w-[clamp(420px,40vw,540px)] md:mx-auto lg:mx-0 mb-8 whitespace-nowrap" style={{ fontFamily: "'Avenir Next', sans-serif" }}>
                    AI powered micro learning directly through <br className="lg:hidden" />the tools your <br className="hidden lg:block" />people already use.
                </p>

                {/* ROI Button */}
                <div className="mb-12 lg:mb-8 flex justify-start md:justify-center lg:justify-start w-full">
                    <button className="flex items-center justify-center bg-white border border-[#181815] rounded-[56px] w-[186px] h-[45px] shadow-sm hover:shadow-md transition-all active:scale-95 group">
                        <span className="text-[#181815] font-semibold text-[14px]" style={{ fontFamily: "'Avenir Next', sans-serif" }}>
                            Calculate Your ROI
                        </span>
                    </button>
                </div>

                {/* Desktop Highlight Box (Hidden on mobile) */}
                <HighlightBox className="hidden lg:flex text-left" />
            </div>

            {/* Right Content Container (Image) */}
            <div className="relative w-full lg:w-[50%] mx-auto lg:mx-0 mt-4 lg:mt-0 flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[360px] lg:max-w-[514px] aspect-[361/345] lg:aspect-[514/426] w-full">
                    <Image
                        src="/mainimage.svg"
                        alt="Hero Image"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
            </div>

            {/* Mobile Highlight Box (Visible only on mobile, at the end) */}
            <HighlightBox className="mt-12 lg:hidden text-left md:text-center md:mx-auto" />
            </div>
        </section>
    );
}


