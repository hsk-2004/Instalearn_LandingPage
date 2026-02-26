import Image from "next/image";

export default function HowItWorks() {

    return (
        <section id="howitworks" className="py-12 px-6 flex flex-col items-center bg-[#FCF6E3]">
            {/* Header Pill */}
            <div className="mb-10">
                <div className="bg-white border border-[#9C9184]/30 rounded-[14px] p-1 flex items-center justify-center">
                    <div className="bg-[#F4E9DB] border border-[#9C9184]/30 rounded-[12px] w-[174px] h-[45px] p-[6px] flex items-center justify-center">
                        <span className="text-[#8B8374] font-asap font-medium text-[16px] leading-[21px] tracking-[-0.32px] capitalize">
                            How It Works
                        </span>
                    </div>
                </div>
            </div>

            {/* Description */}
            <p className="text-[#8B8374] text-center text-base font-medium max-w-[320px] mb-12 leading-relaxed">
                An experienced professional can record or generate a 5-minute module in just 30 seconds.
            </p>

            {/* Steps Vertical List */}
            <div className="w-full flex flex-col gap-6 items-center">
                {[
                    { title: "Create", desc: "Record or generate lesson", img: "/h1.svg", imgWidth: "w-[148px]" },
                    { title: "Share", desc: "Distribute instantly", img: "/h2.svg", imgWidth: "w-[196px]" },
                    { title: "Track", desc: "Track engagement & completion", img: "/h3.svg", imgWidth: "w-[148px]" }
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

                        {/* Text content on the right - Alligned Bottom Right */}
                        <div className="flex flex-col text-right items-end justify-end flex-1 h-[64px] self-end pb-1 overflow-hidden">
                            <span className="text-[#5D4037] font-asap font-bold text-[32px] leading-[1] mb-0.5 whitespace-nowrap">
                                {step.title}
                            </span>
                            <p className="text-[#8B8374] font-asap font-medium text-[14px] leading-[1.2] tracking-[-0.32px] whitespace-nowrap">
                                {step.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
