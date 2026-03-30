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
        <section id="social-learning" className="bg-white py-12 lg:py-24 px-6 lg:px-0 xl:px-0 min-h-[645px] lg:h-auto flex items-center overflow-hidden">
            <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center lg:items-center justify-between gap-6 lg:gap-0 w-full lg:px-[80px] xl:px-[130px]">

                {/* Left Content */}
                <div className="w-full lg:w-[50%] flex flex-col text-left lg:items-start lg:mr-auto px-0 lg:px-0 lg:-translate-y-16 xl:-translate-y-24">
                    <h2
                        className="text-[#3D2C1E] font-lexend font-normal leading-[1.1] tracking-tight mb-2"
                        style={{ fontSize: "clamp(32px, 4.4vw, 56px)" }}
                    >
                        Learning That <br className="hidden lg:block" />
                        Spreads <br className="lg:hidden" /> <span style={{ fontFamily: "'Parabole', cursive" }}>Naturally</span>
                    </h2>
                    <p
                        className="text-[#8B8374] font-medium leading-relaxed mb-4 lg:mb-20 xl:mb-32 lg:mx-0 max-w-[420px] opacity-80"
                        style={{ fontSize: "clamp(18px, 1.4vw, 22px)" }}
                    >
                        InstaLearn combines AI driven micro <br className="hidden lg:block" /> learning with social learning
                    </p>

                    {/* Bottom Quote Box */}
                    <div
                        className="hidden lg:flex bg-[#FCF6E3] rounded-[24px] items-center relative px-8 lg:translate-y-28 xl:translate-y-36"
                        style={{ width: "465px", height: "72px" }}
                    >
                        <p
                            className="text-[#CE510B] italic leading-tight font-medium lg:whitespace-nowrap"
                            style={{ fontSize: "18px" }}
                        >
                            Training that spreads through your organisation, <br className="hidden lg:block" />
                            the way Information does through WhatsApp
                        </p>
                    </div>
                </div>

                {/* Right Visual Area - Mobile only */}
                <div className="w-full max-w-[361px] h-[265px] relative mt-2 lg:hidden">
                    <Image
                        src="/sl.svg"
                        alt=""
                        fill
                        className="object-contain object-center"
                    />
                </div>

                {/* Right Visual Area - Desktop only */}
                <div
                    className="hidden lg:block lg:ml-auto lg:flex-shrink-0 xl:-translate-x-24"
                    style={{ width: "clamp(300px, 44vw, 641px)" }}
                >
                    <img
                        src="/s2.svg"
                        alt=""
                        className="w-full h-auto"
                    />
                </div>

                {/* Bottom Quote Box (Mobile only - Shown after image) */}
                <div className="flex lg:hidden bg-[#FCF6E3] rounded-[16px] p-4 w-full max-w-[361px] h-auto min-h-[90px] relative items-center justify-start mt-4 mx-auto">
                    <p className="text-[#CE510B] italic text-[16px] leading-snug font-medium text-left">
                        Training that spreads through your organisation, <br className="hidden lg:block" />
                        the way Information does through WhatsApp
                    </p>
                </div>
            </div>
        </section>
    );
}
