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
        <section id="integrations" className="bg-[#FCF6E3] py-24 px-6 lg:px-[120px] overflow-hidden">
            <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
                
                {/* Left Content */}
                <div className="w-full lg:w-[45%] flex flex-col items-start text-left">
                    <h2 className="text-[#3D2C1E] font-lexend font-normal text-[48px] lg:text-[64px] leading-[1.1] tracking-tight mb-6">
                        Integration & Security
                    </h2>
                    <p className="text-[#8B8374] font-medium text-[16px] lg:text-[20px] leading-relaxed mb-16 max-w-[450px]">
                        Seamlessly integrate with your existing systems without disrupting workflows.
                    </p>

                    {/* Tags Grid */}
                    <div className="flex flex-wrap gap-4 max-w-[550px]">
                        {tags.map((tag, idx) => (
                            <div 
                                key={idx} 
                                className={`${tag.className} bg-[#FF7F1E] text-white px-6 py-3 rounded-[12px] font-lexend font-bold text-[14px] lg:text-[18px] shadow-sm transform transition-all hover:-translate-y-1 hover:brightness-110 cursor-default`}
                            >
                                {tag.text}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Visual Orbital Area */}
                <div className="w-full lg:w-[50%] h-[400px] lg:h-[600px] relative flex items-center justify-center">
                    {/* Concentric Rings */}
                    <div className="absolute w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] border border-[#DECFB1]/60 rounded-full" />
                    <div className="absolute w-[450px] h-[450px] lg:w-[700px] lg:h-[700px] border border-[#DECFB1]/40 rounded-full" />
                    <div className="absolute w-[600px] h-[600px] lg:w-[900px] lg:h-[900px] border border-[#DECFB1]/20 rounded-full" />

                    {/* Orbiting Icons */}
                    <div className="absolute inset-0">
                        {orbitIcons.map((icon, idx) => (
                            <div 
                                key={idx}
                                className={`absolute ${icon.color} p-3 lg:p-4 rounded-[16px] shadow-xl border border-white/40 transform transition-all duration-700 hover:scale-125 z-20`}
                                style={{ top: icon.top, left: icon.left }}
                            >
                                <div className="w-8 h-8 lg:w-10 lg:h-10 relative">
                                    <Image src={icon.src} alt="Integration" fill className="object-contain" />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Central Hub */}
                    <div className="relative z-10 bg-white p-6 rounded-[24px] shadow-2xl border border-[#DECFB1]/50 transform -rotate-6">
                        <div className="w-[140px] lg:w-[180px] h-[40px] lg:h-[50px] relative">
                            <Image src="/logo.svg" alt="Instalearn Hub" fill className="object-contain" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

