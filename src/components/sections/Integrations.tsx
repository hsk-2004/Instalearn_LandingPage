"use client";

import Image from "next/image";

export default function Integrations() {
    const tags = [
        ["Open APIs", "Enterprise grade security"],
        ["Performance systems", "CRM integration"],
        ["SSO & role based access", "HRIS integration"]
    ];

    const apps = [
        { name: "Placeholder 1", icon: "/whatsapp.svg", top: "32%", left: "70%", size: "56px" },
        { name: "Placeholder 2", icon: "/gmail.svg", top: "35%", left: "8%", size: "52px" },
        { name: "Placeholder 3", icon: "/telegram.svg", top: "38%", left: "35%", size: "52px" },
        { name: "Placeholder 4", icon: "/link.svg", top: "50%", left: "85%", size: "54px" },
        { name: "Placeholder 5", icon: "/slack.svg", top: "55%", left: "20%", size: "48px" },
        { name: "Placeholder 6", icon: "/calender.svg", top: "55%", left: "65%", size: "50px" },
    ];

    return (
        <section className="bg-white overflow-hidden">
            <div className="pt-20 pb-10 bg-[#FFF9EE]">
                <div className="max-w-4xl mx-auto px-4 flex flex-col items-center">
                    {/* 1. Header Pill */}
                    <div className="mb-10 bg-white border border-[#E5E0D8] rounded-[18px] p-1.5 shadow-sm">
                        <div className="bg-[#F3E9DD] border border-[#DED4C7] rounded-[14px] px-6 py-2 flex items-center justify-center">
                            <span className="text-[#8B8374] font-semibold text-[15px]">Integration & Security</span>
                        </div>
                    </div>

                    {/* 2. Heading */}
                    <h2 className="text-[20px] md:text-[24px] font-semibold text-[#8B8374] text-center max-w-[300px] md:max-w-xl leading-relaxed mb-14">
                        Seamlessly integrate with your existing systems without disrupting workflows.
                    </h2>

                    {/* 3. Staggered Tag Cloud */}
                    <div className="flex flex-col gap-4 items-center mb-16 w-full max-w-[500px]">
                        {/* Row 1 */}
                        <div className="flex gap-3 items-center w-full justify-start translate-x-4">
                            <div className="bg-[#FED8B1] px-5 py-3 rounded-[16px] text-[#5D4037] font-semibold text-[15px] shadow-sm whitespace-nowrap">Open APIs</div>
                            <div className="bg-[#FED8B1] px-5 py-3 rounded-[16px] text-[#5D4037] font-semibold text-[15px] shadow-sm whitespace-nowrap">Enterprise grade security</div>
                            <div className="bg-[#FED8B1]/60 w-16 h-12 rounded-l-[16px] flex-shrink-0" />
                        </div>
                        {/* Row 2 */}
                        <div className="flex gap-3 items-center w-full justify-end -translate-x-4">
                            <div className="bg-[#FED8B1]/60 w-16 h-12 rounded-r-[16px] flex-shrink-0" />
                            <div className="bg-[#FED8B1] px-5 py-3 rounded-[16px] text-[#5D4037] font-semibold text-[15px] shadow-sm whitespace-nowrap">Performance systems</div>
                            <div className="bg-[#FED8B1] px-5 py-3 rounded-[16px] text-[#5D4037] font-semibold text-[15px] shadow-sm whitespace-nowrap">CRM integration</div>
                        </div>
                        {/* Row 3 */}
                        <div className="flex gap-3 items-center w-full justify-start translate-x-4">
                            <div className="bg-[#FED8B1] px-5 py-3 rounded-[16px] text-[#5D4037] font-semibold text-[15px] shadow-sm whitespace-nowrap">SSO & role based access</div>
                            <div className="bg-[#FED8B1] px-5 py-3 rounded-[16px] text-[#5D4037] font-semibold text-[15px] shadow-sm whitespace-nowrap">HRIS integration</div>
                            <div className="bg-[#FED8B1]/60 w-16 h-12 rounded-l-[16px] flex-shrink-0" />
                        </div>
                    </div>

                    {/* 4. Orbital Diagram Area */}
                    <div className="relative w-full max-w-[380px] aspect-[1/1.2] mt-4">
                        {/* Concentric Orbits (Arches) */}
                        <div className="absolute top-[25%] left-1/2 -translate-x-1/2 w-[220%] h-[110%] border border-[#8B8374]/30 rounded-t-full border-b-0" />
                        <div className="absolute top-[35%] left-1/2 -translate-x-1/2 w-[180%] h-[90%] border border-[#8B8374]/30 rounded-t-full border-b-0" />
                        <div className="absolute top-[45%] left-1/2 -translate-x-1/2 w-[140%] h-[70%] border border-[#8B8374]/30 rounded-t-full border-b-0" />
                        <div className="absolute top-[55%] left-1/2 -translate-x-1/2 w-[100%] h-[50%] border border-[#8B8374]/30 rounded-t-full border-b-0" />

                        {/* App Icons (Positioned according to mobile view image) */}
                        {apps.map((app) => (
                            <div
                                key={app.name}
                                className={`absolute flex items-center justify-center z-20 ${!app.icon ? "bg-white p-2 rounded-full shadow-md border border-[#E5E0D8]/50 overflow-hidden" : "overflow-visible"
                                    }`}
                                style={{
                                    top: app.top,
                                    left: app.left,
                                    width: app.size,
                                    height: app.size
                                }}
                            >
                                {app.icon ? (
                                    <img
                                        src={app.icon}
                                        alt={app.name}
                                        className="w-full h-full object-contain drop-shadow-sm"
                                    />
                                ) : (
                                    <div className="w-[60%] h-[60%] border-2 border-dashed border-[#E5E0D8] rounded-full flex items-center justify-center">
                                        <span className="text-[#DED4C7] text-[18px]">+</span>
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* Central Area Hub (Bottom) */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full flex flex-col items-center z-10">
                            {/* The Hub Component */}
                            <div className="relative flex flex-col items-center mb-8">
                                {/* The Logo Image (No Box) */}
                                <div className="relative flex items-center justify-center">
                                    <img
                                        src="/logo.png"
                                        alt="Instalearn Logo"
                                        className="h-24 w-auto object-contain drop-shadow-xl"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Full-width Bottom Border (Exactly at the color transition) */}
            <div className="w-full border-t-2 border-[#8B8374]/30 relative z-20" />
        </section>
    );
}
