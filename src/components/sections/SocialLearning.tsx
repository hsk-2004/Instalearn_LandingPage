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
            <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center lg:items-center justify-between gap-12 lg:gap-0 w-full lg:px-[80px] xl:px-[130px]">

                {/* Left Content */}
                <div className="w-full sm:w-[80%] md:w-full lg:w-[50%] flex flex-col text-left md:text-center lg:text-left items-start md:items-center lg:items-start md:mr-auto lg:mr-auto px-0 lg:px-0 lg:-translate-y-16 xl:-translate-y-24">
                    <h2
                        className="text-[#3D2C1E] font-lexend font-normal leading-[1.1] tracking-tight mb-2 md:whitespace-nowrap"
                        style={{ fontSize: "clamp(32px, 5.0vw, 56px)" }}
                    >
                        Learning That <br className="hidden md:block" />
                        Spreads <br className="md:hidden" /> <span style={{ fontFamily: "'Parabole', cursive" }}>Naturally</span>
                    </h2>
                    <p
                        className="text-[#8B8374] font-medium leading-relaxed mb-4 lg:mb-20 xl:mb-32 lg:mx-0 max-w-[420px] md:mx-auto lg:mx-0 opacity-80 md:whitespace-nowrap"
                        style={{ fontSize: "clamp(15px, 2.0vw, 22px)" }}
                    >
                        InstaLearn combines AI driven micro <br className="hidden md:block" /> learning with social learning
                    </p>

                    {/* Bottom Quote Box */}
                    <div
                        className="hidden lg:flex bg-[#FCF6E3] rounded-[24px] items-center relative px-8 lg:translate-y-28 xl:translate-y-36"
                        style={{ width: "465px", height: "72px" }}
                    >
                        <p
                            className="text-[#CE510B] italic leading-tight font-medium md:whitespace-nowrap"
                            style={{ fontSize: "18px" }}
                        >
                            Training that spreads through your organisation, <br className="hidden md:block" />
                            the way Information does through WhatsApp
                        </p>
                    </div>
                </div>

                {/* Right Visual Area - Mobile/Tablet staggered view */}
                <div className="w-full max-w-[361px] sm:max-w-[450px] md:max-w-[550px] lg:hidden h-[265px] sm:h-[330px] md:h-[400px] relative mt-2 md:mt-8">
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

                {/* Bottom Quote Box (Mobile/Small Tablet) */}
                <div className="flex lg:hidden bg-[#FCF6E3] rounded-[16px] p-4 sm:p-6 w-full max-w-[361px] sm:max-w-[450px] md:max-w-[500px] h-auto min-h-[90px] relative items-center justify-start mt-4 mx-auto">
                    <p className="text-[#CE510B] italic text-[16px] sm:text-[18px] leading-snug font-medium text-left">
                        Training that spreads through your organisation, <br className="hidden lg:block" />
                        the way Information does through WhatsApp
                    </p>
                </div>
            </div>
        </section>
    );
}
