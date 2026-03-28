"use client";

import Image from "next/image";

const tags = [
    { text: "Open APIs", className: "w-fit" },
    { text: "Enterprise grade security", className: "w-fit" },
    { text: "Performance systems", className: "w-fit" },
    { text: "CRM integration", className: "w-fit" },
    { text: "SSO & role based access", className: "w-fit" },
    { text: "HRIS integration", className: "w-fit" },
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
        <section id="integrations" className="bg-[#FCF6E3] pt-10 pb-0 lg:py-24 min-h-[715px] lg:min-h-0 lg:h-auto px-6 lg:px-[120px] overflow-hidden flex items-start lg:block">
            <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 w-full min-h-[665px] lg:min-h-0">
                
                {/* Left Content */}
                <div className="w-full lg:w-[45%] flex flex-col items-start text-left flex-1 h-full">
                    <h2 className="text-[#3D2C1E] font-lexend font-normal text-[42px] lg:text-[64px] leading-[1.1] tracking-tight mb-4 lg:mb-6">
                        Integration & Security
                    </h2>
                    <p className="text-[#8B8374] font-medium text-[19px] lg:text-[20px] leading-relaxed mb-6 lg:mb-16 max-w-[500px] opacity-90">
                        Seamlessly integrate with your existing systems without disrupting workflows.
                    </p>

                    {/* Tags Grid - 2x3 layout on mobile */}
                    <div className="flex flex-wrap gap-2 lg:gap-4 max-w-[450px]">
                        {tags.map((tag, idx) => (
                            <div 
                                key={idx} 
                                className={`${tag.className} bg-[#FF7F1E] text-white w-[103px] h-[38px] flex items-center justify-center rounded-[12px] font-lexend font-bold text-[10.5px] lg:text-[18px] lg:w-fit lg:h-auto lg:px-4 lg:py-2.5 text-center shadow-sm transform transition-all hover:-translate-y-1 hover:brightness-110 cursor-default`}
                            >
                                {tag.text}
                            </div>
                        ))}
                    </div>

                    {/* Mobile Only: Integration Image */}
                    <div className="flex lg:hidden w-screen -mx-6 mt-auto justify-center">
                        <div className="relative w-full h-auto">
                            <Image 
                                src="/integration.svg" 
                                alt="Integration visual" 
                                width={1200} 
                                height={600} 
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>

                {/* Right Visual – Hidden on mobile as per design change */}
                <div className="hidden lg:flex w-full lg:w-[50%] h-[600px] relative items-center justify-center">
                    {/* Content removed per user request */}
                </div>
            </div>
        </section>
    );
}

