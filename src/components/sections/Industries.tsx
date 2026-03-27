"use client";

import Image from "next/image";

const industries = [
    { 
        name: "Manufacturing", 
        image: "/b1.svg", 
        top: "10%", 
        left: "0%",
        labelColor: "bg-[#FECE99]/80"
    },
    { 
        name: "Warehouses", 
        image: "/b3.svg", 
        top: "15%", 
        left: "55%",
        labelColor: "bg-[#FECE99]/80"
    },
    { 
        name: "Retail", 
        image: "/b2.svg", 
        top: "40%", 
        left: "30%",
        labelColor: "bg-[#FECE99]/80"
    },
    { 
        name: "Logistics", 
        image: "/b1.svg", 
        top: "65%", 
        left: "0%",
        labelColor: "bg-[#FECE99]/80"
    },
    { 
        name: "Field Sales", 
        image: "/b4.svg", 
        top: "70%", 
        left: "55%",
        labelColor: "bg-[#FECE99]/80"
    },
];

export default function Industries() {
    return (
        <section id="industries" className="bg-white py-24 px-6 lg:px-[120px] overflow-hidden">
            <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
                
                {/* Left Content */}
                <div className="w-full lg:w-[45%] flex flex-col text-left">
                    <h2 className="text-[#3D2C1E] font-lexend font-normal text-[48px] lg:text-[64px] leading-[1.1] tracking-tight mb-6">
                        Built For Frontline <br />
                        Teams
                    </h2>
                    <p className="text-[#8B8374] font-medium text-[16px] lg:text-[20px] leading-relaxed mb-20 lg:mb-40 max-w-[420px] opacity-80">
                        Designed for teams that don't sit at desks <br className="hidden lg:block" />
                        but power your operations.
                    </p>
                    
                    {/* Support Box */}
                    <div className="bg-[#FCF6E3] rounded-[16px] p-4 lg:p-6 w-fit flex items-center gap-6 shadow-sm">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-full flex items-center justify-center p-2.5 shadow-sm">
                                <Image src="/logo.svg" alt="Apple" width={24} height={24} className="brightness-0" />
                            </div>
                            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-full flex items-center justify-center p-2.5 shadow-sm">
                                <Image src="/instalearn/i1.svg" alt="Android" width={24} height={24} />
                            </div>
                        </div>
                        <p className="text-[#CE510B] italic text-[16px] lg:text-[20px] leading-tight font-medium max-w-[200px]">
                            Fully supported on iOS and Android devices
                        </p>
                    </div>
                </div>

                {/* Right Visual Area - Staggered Bubbles */}
                <div className="w-full lg:w-[55%] h-[500px] lg:h-[600px] relative mt-10 lg:mt-0">
                    {industries.map((item, index) => (
                        <div 
                            key={index}
                            className="absolute flex items-center group transition-all duration-500 hover:scale-110"
                            style={{ top: item.top, left: item.left }}
                        >
                            {/* Profile Bubble */}
                            <div className="w-[120px] h-[100px] lg:w-[180px] lg:h-[130px] bg-[#F2E9DC] rounded-[60px] relative overflow-hidden shadow-sm border-[4px] border-white/40">
                                <Image 
                                    src={item.image} 
                                    alt={item.name} 
                                    fill 
                                    className="object-contain object-bottom pt-4"
                                />
                            </div>
                            
                            {/* Label */}
                            <div className={`${item.labelColor} backdrop-blur-md px-4 py-2 lg:px-6 lg:py-3 rounded-[12px] shadow-sm ml-[-20px] relative z-10 border border-white/50`}>
                                <span className="text-[#3D2C1E] font-lexend font-bold text-[14px] lg:text-[18px]">
                                    {item.name}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

