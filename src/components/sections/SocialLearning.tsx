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
        <section id="social-learning" className="bg-white py-12 lg:py-24 px-6 lg:px-[120px] min-h-[645px] lg:h-auto flex items-center overflow-hidden">
            <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6 lg:gap-0">

                {/* Left Content */}
                <div className="w-full lg:w-[45%] flex flex-col text-left">
                    <h2 className="text-[#3D2C1E] font-lexend font-normal text-[32px] lg:text-[56px] leading-[1.1] tracking-tight mb-2">
                        Learning That <br />
                        Spreads Naturally
                    </h2>
                    <p className="text-[#8B8374] font-medium text-[18px] lg:text-[22px] leading-relaxed mb-4 lg:mb-20 lg:mx-0 max-w-[420px] opacity-80">
                        InstaLearn combines AI driven micro learning <br /> with social learning
                    </p>

                    {/* Bottom Quote Box */}
                    <div className="hidden lg:flex bg-[#FCF6E3] rounded-[16px] p-4 lg:p-8 lg:w-full lg:h-auto lg:max-w-[460px] relative items-center">
                        <p className="text-[#CE510B] italic text-[16px] lg:text-[22px] leading-snug lg:leading-relaxed font-medium">
                            Training that spreads through your organisation, <br className="hidden lg:block" />
                            the way Information does through WhatsApp
                        </p>
                    </div>
                </div>

                {/* Right Visual Area */}
                <div className="w-full max-w-[361px] h-[265px] lg:w-[641px] lg:h-[470px] relative mt-2 lg:mt-0">
                    {/* The Hub (Top-Right) */}
                    <div className="absolute top-0 right-0 z-0 w-full h-full pointer-events-none">
                        <Image
                            src="/sl.svg"
                            alt=""
                            fill
                            className="object-contain lg:object-right-top object-center"
                        />
                    </div>

                </div>
                
                {/* Bottom Quote Box (Mobile only - Shown after image) */}
                <div className="flex lg:hidden bg-[#FCF6E3] rounded-[16px] p-4 w-full max-w-[361px] h-auto min-h-[90px] relative items-center justify-center mt-4 mx-auto">
                    <p className="text-[#CE510B] italic text-[16px] leading-snug font-medium text-center">
                        Training that spreads through your organisation, <br className="hidden lg:block" />
                        the way Information does through WhatsApp
                    </p>
                </div>
            </div>
        </section>
    );
}
