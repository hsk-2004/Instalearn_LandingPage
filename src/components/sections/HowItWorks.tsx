import Image from "next/image";

export default function HowItWorks() {

    return (
        <section id="howitworks" className="py-12 px-6 flex flex-col items-center bg-[#FCF6E3]">
            {/* Header Pill */}
            <div className="mb-10">
                <div className="bg-white border border-[#8A7B6A] rounded-[14px] p-1 flex items-center justify-center">
                    <div className="bg-[#F4E9DB] border border-[#8A7B6A] rounded-[12px] w-[120px] h-[33px] p-[6px] flex items-center justify-center">
                        <span className="text-[#8B8374] font-asap font-medium text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-[21px] tracking-[-0.32px] capitalize">
                            How It Works
                        </span>
                    </div>
                </div>
            </div>

            {/* Description */}
            <p className="text-[#8B8374] text-center text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] font-medium max-w-[320px] mb-12 leading-relaxed">
                An experienced professional can record or generate a 5-minute module in just 30 seconds.
            </p>

            {/* Steps Vertical List */}
            <div className="w-full flex flex-col gap-6 items-center">
                {[
                    { title: "Create", desc: "Record or generate lesson", img: "/h1.svg", imgWidth: "w-[138px]" },
                    { title: "Share", desc: "Distribute instantly", img: "/h2.svg", imgWidth: "w-[186px]" },
                    { title: "Track", desc: (<>Track engagement &<br />completion</>), img: "/h3.svg", imgWidth: "w-[138px]" }
                ].map((step, index) => (
                    <div key={index} className="w-full max-w-[400px] h-[193px] bg-white border border-[#8A7B6A] rounded-[12px] p-[16px] flex flex-row items-center gap-[12px] shadow-sm transition-all hover:shadow-md hover:scale-[1.01] mx-auto relative">
                        {/* Step Number in Top Right */}
                        <div className="absolute top-4 right-4 text-[#9C9184] font-asap font-medium text-[14px] opacity-40">
                            {index + 1}
                        </div>

                        {/* Icon Container on the left */}
                        <div className={`relative ${step.imgWidth} h-[169px] shrink-0 flex items-center justify-center`}>
                            <Image
                                src={step.img}
                                alt={step.title}
                                fill
                                className="object-contain"
                            />
                        </div>

                        <div className="flex flex-col text-right items-end justify-end flex-1 h-[90px] self-end pb-1">
                            <span className="text-[#5D4037] font-asap font-bold text-[32px] sm:text-[34px] md:text-[38px] lg:text-[44px] leading-[1] mb-0.5 whitespace-nowrap">
                                {step.title}
                            </span>
                            <p className="text-[#8B8374] font-asap font-medium text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] leading-[1.2] tracking-[-0.32px]">
                                {step.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
