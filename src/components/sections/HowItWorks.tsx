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
                <div className="mb-8 text-left px-6 lg:px-0">
                    <h2
                        className="text-[#3D2C1E] font-lexend font-normal leading-[1.1] mb-6 tracking-tight"
                        style={{ fontSize: "clamp(32px, 4.4vw, 56px)" }}
                    >
                        How it <span style={{ fontFamily: "'Parabole', cursive" }}>works</span>
                    </h2>
                    <p
                        className="text-[#8B8374] font-medium max-w-[500px] leading-relaxed opacity-80"
                        style={{ fontSize: "clamp(16px, 1.4vw, 22px)" }}
                    >
                        An experienced professional can record or generate a 5-minute module in just 30 seconds.
                    </p>
                </div>

                {/* Overlapping Ovals Container */}
                <div className="flex flex-col lg:flex-row items-center justify-start -space-y-16 lg:-space-y-0 lg:-space-x-16 pt-4">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="relative w-full lg:w-[480px] max-w-[356px] sm:max-w-[500px] lg:max-w-none h-[255px] lg:h-[376px] flex flex-col justify-start pt-10 lg:pt-14 px-8 lg:px-16 transition-all duration-500 group lg:flex-shrink-0"
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
                                    className="text-[#FF6B00] font-gilroy font-semibold leading-tight mb-2 group-hover:scale-105 transition-transform origin-left text-[32px] lg:text-[clamp(56px,4.4vw,64px)]"
                                >
                                    {step.title}
                                </h3>
                                <p
                                    className="text-[#8B8374] font-avenirNext max-w-[180px] lg:max-w-[240px] leading-snug text-[18px] lg:text-[clamp(22px, 1.8vw, 24px)]"
                                >
                                    {step.desc}
                                </p>
                            </div>

                            {/* Icon Overlay */}
                            <div className="absolute bottom-10 right-10 lg:bottom-16 lg:right-20 w-[91px] h-[95px] lg:w-[106px] lg:h-[113px] opacity-90 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3 z-20">
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