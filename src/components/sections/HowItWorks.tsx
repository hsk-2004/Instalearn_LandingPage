"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HowItWorks() {
    const steps = [
        {
            title: "Create",
            desc: "Record or generate lesson",
            icon: "/oval2.svg"
        },
        {
            title: "Share",
            desc: "Distribute instantly",
            icon: "/oval3.svg"
        },
        {
            title: "Track",
            desc: "Track engagement & completion",
            icon: "/oval4.svg"
        }
    ];

    return (
        <section id="howitworks" className="bg-[#FCF6E3] py-24 px-0 overflow-hidden">
            <div className="max-w-[1440px] mx-auto lg:px-[80px] xl:px-[130px]">
                {/* Header */}
                <div className="mb-8 text-left md:text-center lg:text-left px-6 md:px-0 lg:px-0">
                    <h2
                        className="text-[#3D2C1E] font-lexend font-normal leading-[1.1] mb-6 tracking-tight"
                        style={{ fontSize: "clamp(32px, 5.5vw, 56px)" }}
                    >
                        How it <span style={{ fontFamily: "'Parabole', cursive" }}>works</span>
                    </h2>
                    <p
                        className="text-[#8B8374] font-medium max-w-[500px] md:mx-auto lg:mx-0 leading-relaxed opacity-80"
                        style={{ fontSize: "clamp(16px, 2.2vw, 22px)" }}
                    >
                        An experienced professional can record or generate a 5-minute module in just 30 seconds.
                    </p>
                </div>

                {/* Overlapping Ovals Container */}
                <div className="flex flex-col lg:flex-row items-center justify-start lg:justify-center -space-y-16 sm:-space-y-24 md:-space-y-32 lg:-space-y-0 lg:-space-x-12 xl:-space-x-16 pt-4">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`relative w-full max-w-[356px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-none 
                                h-[255px] sm:h-[320px] md:h-[430px] lg:h-[clamp(258px,26vw,376px)]
                                lg:w-[clamp(330px,33vw,480px)]
                                flex flex-col justify-start 
                                pt-10 sm:pt-16 md:pt-20 lg:pt-[clamp(40px,4vw,56px)] 
                                px-8 sm:px-14 md:px-20 lg:px-[clamp(40px,4.4vw,64px)] 
                                transition-all duration-500 group lg:flex-shrink-0`}
                            style={{
                                zIndex: 30 - index,
                                transform: `translateZ(0)`
                            }}
                        >
                            {/* SVG Background */}
                            <div className="absolute inset-0 w-full h-full pointer-events-none">
                                {/* Mobile Oval */}
                                <Image
                                    src="/oval1.svg"
                                    alt=""
                                    fill
                                    className="object-contain opacity-100 lg:hidden"
                                />
                                {/* Desktop Oval */}
                                <Image
                                    src="/oval.svg"
                                    alt=""
                                    fill
                                    className="object-contain opacity-100 transition-opacity hidden lg:block group-hover:opacity-90"
                                />
                            </div>

                            <div className="relative z-10 mb-4 lg:mb-10 pb-4">
                                <h3
                                    className="text-[#FF6B00] font-gilroy font-semibold leading-tight mb-2 group-hover:scale-105 transition-transform origin-left text-[32px] sm:text-[40px] md:text-[48px] lg:text-[clamp(24px,3.8vw,64px)]"
                                >
                                    {step.title}
                                </h3>
                                <p
                                    className="text-[#8B8374] font-avenirNext max-w-[180px] sm:max-w-[220px] md:max-w-[280px] lg:max-w-[240px] leading-snug text-[18px] sm:text-[20px] md:text-[22px] lg:text-[clamp(14px,1.4vw,24px)]"
                                >
                                    {step.desc}
                                </p>
                            </div>

                            {/* Icon Overlay */}
                            <div className="absolute bottom-10 right-10 sm:bottom-16 sm:right-16 md:bottom-20 md:right-20 lg:bottom-[clamp(40px,5vw,64px)] lg:right-[clamp(40px,6vw,80px)] w-[91px] h-[95px] sm:w-[110px] sm:h-[115px] md:w-[130px] md:h-[135px] lg:w-[clamp(80px,8vw,106px)] lg:h-[clamp(85px,8.5vw,113px)] opacity-90 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3 z-20">
                                <img
                                    src={step.icon}
                                    alt={step.title}
                                    className="w-full h-full object-contain filter drop-shadow-sm"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}