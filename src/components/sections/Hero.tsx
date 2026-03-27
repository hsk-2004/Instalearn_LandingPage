import Image from "next/image";

export default function Hero() {
    return (
        <section className="pt-32 lg:pt-40 pb-20 px-6 lg:pl-[120px] lg:pr-[120px] flex flex-col lg:flex-row items-center lg:justify-between text-center lg:text-left w-full max-w-[1440px] mx-auto overflow-hidden lg:gap-16">
            {/* Left Content Container */}
            <div className="flex flex-col items-center lg:items-start w-full lg:w-[50%] z-10">
                {/* Headline */}
                <h1 className="text-[#3D2C1E] font-lexend font-normal text-[56px] leading-[72px] tracking-[0.35px] mb-4 lg:text-left text-center">
                    Training that{" "}
                    <span className="font-caveat font-normal text-[56px] leading-[72px] tracking-[0.35px] text-[#CE510B]">
                        Actually
                    </span>{" "}
                    <br className="hidden lg:block" />
                    <span className="lg:whitespace-nowrap">reaches your Workforce</span>
                </h1>

                {/* Subtext */}
                <p className="text-[#8B8374] text-[16px] sm:text-[18px] lg:text-[22px] font-medium leading-[1.5] max-w-[540px] mb-6">
                    AI powered micro learning directly through the tools your people already use.
                </p>

                {/* ROI Button */}
                <div className="mb-8 flex justify-center lg:justify-start w-full">
                    <button className="flex items-center justify-center bg-white border border-[#181815] rounded-[56px] w-[186px] h-[45px] shadow-sm hover:shadow-md transition-all active:scale-95 group">
                        <span className="text-[#181815] font-asap font-semibold text-[16px]">
                            Calculate Your ROI
                        </span>
                    </button>
                </div>

                {/* Bottom Highlight Box */}
                <div
                    className="w-full lg:w-[625px] min-h-[72px] lg:h-auto bg-[#FFF9EE] border border-[#FFD9B3]/50 rounded-[12px] flex items-center px-[24px] py-4 text-left shadow-sm overflow-hidden"
                >
                    <p
                        className="text-[#CE510B] font-medium text-[16px] lg:text-[20px] leading-relaxed italic opacity-90"
                        style={{ fontFamily: "'Avenir Next', 'Avenir', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif" }}
                    >
                        Mobile First Learning, Training delivered instantly to your <br />
                        workforce through the devices they already use.
                    </p>
                </div>
            </div>

            {/* Right Content Container (Simple Image) */}
            <div className="relative w-full lg:w-auto mx-auto lg:mx-0 mt-16 lg:mt-0 flex justify-center lg:justify-end">
                <Image
                    src="/ImageArea.svg"
                    alt="Hero Image"
                    width={514}
                    height={426}
                    className="max-w-full h-auto object-contain"
                    priority
                />
            </div>
        </section>
    );
}

