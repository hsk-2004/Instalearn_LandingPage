"use client";

import Image from "next/image";

const tags = [
    { text: "Open APIs", width: "w-[103px]", lgSize: "lg:w-[134px] lg:h-[56px]" },
    { text: "Enterprise grade security", width: "w-[209px]", lgSize: "lg:w-[266px] lg:h-[56px]" },
    { text: "Performance systems", width: "w-[180px]", lgSize: "lg:w-[230px] lg:h-[56px]" },
    { text: "CRM integration", width: "w-[145px]", lgSize: "lg:w-[187px] lg:h-[56px]" },
    { text: "SSO & role based access", width: "w-[205px]", lgSize: "lg:w-[262px] lg:h-[56px]" },
    { text: "HRIS integration", width: "w-[145px]", lgSize: "lg:w-[187px] lg:h-[56px]" },
];

const orbitIcons = [
    { src: "/whatsapp.svg", top: "10%", left: "30%", color: "bg-white" },
    { src: "/calender.svg", top: "25%", left: "60%", color: "bg-white" },
    { src: "/slack.svg", top: "50%", left: "80%", color: "bg-white" },
    { src: "/gmail.svg", top: "45%", left: "10%", color: "bg-white" },
    { src: "/telegram.svg", top: "80%", left: "15%", color: "bg-white" },
    { src: "/logo.svg", top: "15%", left: "85%", color: "bg-white" }, // Proxy for Teams
];

export default function Integrations() {
    return (
        <section id="integrations" className="bg-[#FCF6E3] pt-4 pb-0 lg:h-[650px] px-4 lg:px-[120px] overflow-hidden flex flex-col lg:flex lg:items-center">
            <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 w-full lg:h-full">

                {/* Left Content */}
                <div className="w-full lg:w-[45%] flex flex-col items-start text-left flex-1">
                    <h2 className="text-[#3D2C1E] font-lexend font-normal text-[32px] lg:text-[64px] leading-[1.1] tracking-tight mb-4 lg:mb-6 md:ml-[130px] lg:ml-[130px]">
                        Integration & <span style={{ fontFamily: "'Parabole', cursive" }}>Security</span>
                    </h2>
                    <p className="text-[#8B8374] font-medium text-[18px] lg:text-[20px] leading-relaxed mb-6 lg:mb-16 max-w-[500px] opacity-90 md:ml-[130px] lg:ml-[130px]">
                        Seamlessly integrate with your existing systems without disrupting workflows.
                    </p>

                    {/* Tags Grid - 2x3 layout on mobile */}
                    <div className="flex flex-wrap gap-2 lg:gap-4 max-w-[450px] lg:max-w-[500px] md:ml-[130px] lg:ml-[130px]">
                        {tags.map((tag, idx) => (
                            <div
                                key={idx}
                                className={`bg-[#FF7F1E] text-white ${tag.width} h-[38px] flex items-center justify-center rounded-[12px] font-lexend font-normal text-[10.5px] lg:text-[16px] ${'lgSize' in tag ? tag.lgSize : 'lg:w-fit lg:h-auto'} lg:px-4 lg:py-2.5 text-center shadow-sm transform transition-all hover:-translate-y-1 hover:brightness-110 cursor-default`}
                            >
                                {tag.text}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Visual Area - Desktop Only */}
                <div className="hidden lg:flex w-full lg:w-[50%] h-full relative items-end justify-center">
                    <Image
                        src="/integrationcircle.svg"
                        alt="Integration partners"
                        fill
                        className="object-contain object-bottom"
                    />
                </div>
            </div>

            {/* Mobile Only: Integration Image - outside container so it touches section bottom */}
            <div className="flex lg:hidden w-screen -mx-4 mt-14 justify-center">
                <div className="relative w-full h-auto leading-[0]">
                    <Image
                        src="/integration.svg"
                        alt="Integration visual"
                        width={1200}
                        height={600}
                        className="w-full h-auto object-contain block"
                    />
                </div>
            </div>
        </section>
    );
}

