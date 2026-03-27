"use client";

import Image from "next/image";

export default function SocialLearning() {
    const items = [
        {
            title: "Continuous engagement loops",
            icon: "/l3.svg",
            className: "lg:translate-x-[0px]"
        },
        {
            title: "Real time reactions",
            icon: "/l4.svg",
            className: "lg:translate-x-[-100px]"
        },
        {
            title: "Peer driven learning",
            icon: "/l2.svg",
            className: "lg:translate-x-[-220px]"
        },
        {
            title: "Share in existing team channels",
            icon: "/l1.svg",
            className: "lg:translate-x-[-120px]"
        }
    ];

    return (
        <section id="social-learning" className="bg-white py-24 px-6 lg:px-[120px] overflow-hidden">
            <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-16 lg:gap-0">
                
                {/* Left Content */}
                <div className="w-full lg:w-[45%] flex flex-col text-left">
                    <h2 className="text-[#3D2C1E] font-lexend font-normal text-[48px] lg:text-[64px] leading-[1.1] tracking-tight mb-6">
                        Learning That <br />
                        Spreads Naturally
                    </h2>
                    <p className="text-[#8B8374] font-medium text-[16px] lg:text-[20px] leading-relaxed mb-20 lg:mx-0 max-w-[420px] opacity-80">
                        InstaLearn combines AI driven micro learning <br /> with social learning
                    </p>
                    
                    {/* Bottom Quote Box */}
                    <div className="bg-[#FCF6E3] rounded-[16px] p-6 lg:p-8 w-full max-w-[460px] relative">
                        <p className="text-[#CE510B] italic text-[18px] lg:text-[22px] leading-relaxed font-medium">
                            Training that spreads through you organisation, <br className="hidden lg:block" />
                            the way Information does through WhatsApp
                        </p>
                    </div>
                </div>

                {/* Right Visual Area */}
                <div className="w-full lg:w-[641px] h-[400px] lg:h-[470px] relative">
                    {/* The Hub (Top-Right) */}
                    <div className="absolute top-0 right-0 z-0 w-full h-full pointer-events-none">
                        <Image 
                            src="/sl.svg" 
                            alt="" 
                            fill 
                            className="object-contain object-right-top"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}
