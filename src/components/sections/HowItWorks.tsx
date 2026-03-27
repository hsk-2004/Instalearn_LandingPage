"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HowItWorks() {
    const steps = [
        { 
            title: "Create", 
            desc: "Record or generate lesson", 
            icon: "/h1.svg" 
        },
        { 
            title: "Share", 
            desc: "Distribute instantly", 
            icon: "/h2.svg" 
        },
        { 
            title: "Track", 
            desc: "Track engagement & completion", 
            icon: "/h3.svg" 
        }
    ];

    return (
        <section id="howitworks" className="bg-[#FCF6E3] py-24 px-6 lg:px-[120px] overflow-hidden">
            <div className="max-w-[1440px] mx-auto">
                {/* Header */}
                <div className="mb-20 text-left">
                    <h2 className="text-[#3D2C1E] font-lexend font-normal text-[48px] lg:text-[64px] leading-[1.1] mb-6 tracking-tight">
                        How it works
                    </h2>
                    <p className="text-[#8B8374] font-medium text-[16px] lg:text-[20px] max-w-[500px] leading-relaxed opacity-80">
                        An experienced professional can record or generate a 5-minute module in just 30 seconds.
                    </p>
                </div>

                {/* Overlapping Ovals Container */}
                <div className="flex flex-col lg:flex-row items-center justify-center -space-y-16 lg:-space-y-0 lg:-space-x-12 pt-10">
                    {steps.map((step, index) => (
                        <div 
                            key={index}
                            className="relative w-full sm:w-[500px] lg:w-[449px] h-[300px] lg:h-[351px] flex flex-col justify-center px-12 lg:px-20 transition-all duration-500 group"
                            style={{ 
                                zIndex: 30 - index,
                                transform: `translateZ(0)`
                            }}
                        >
                            {/* SVG Background */}
                            <div className="absolute inset-0 w-full h-full pointer-events-none">
                                <Image 
                                    src="/oval.svg" 
                                    alt="" 
                                    fill 
                                    className="object-contain opacity-100 transition-opacity group-hover:opacity-90"
                                />
                            </div>

                            <div className="relative z-10 mb-4 lg:mb-8 pb-4">
                                <h3 className="text-[#FF6B00] font-lexend font-bold text-[36px] lg:text-[52px] leading-tight mb-2 group-hover:scale-105 transition-transform origin-left">
                                    {step.title}
                                </h3>
                                <p className="text-[#8B8374] font-medium text-[16px] lg:text-[20px] max-w-[180px] lg:max-w-[220px] leading-snug">
                                    {step.desc}
                                </p>
                            </div>

                            {/* Icon Overlay */}
                            <div className="absolute bottom-10 right-10 lg:bottom-14 lg:right-16 w-24 h-24 lg:w-36 lg:h-36 opacity-90 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3 z-20">
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

