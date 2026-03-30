"use client";

import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-white py-12 px-6 lg:px-[120px]">
            <div className="bg-[#FECE99] rounded-[32px] p-8 lg:p-16 lg:w-[1240px] lg:h-[435px] mx-auto flex flex-col gap-12 shadow-sm">

                {/* Main Content Row */}
                <div className="flex flex-col lg:flex-row justify-start lg:gap-32 gap-12">

                    {/* Logo & Quick Links */}
                    <div className="flex flex-col gap-8 md:min-w-[200px]">
                        <Image
                            src="/logo.svg"
                            alt="Instalearn Logo"
                            width={160}
                            height={50}
                            className="object-contain"
                        />
                        <div className="flex flex-col gap-3">
                            <h3 className="text-[#3D2C1E] font-bold text-[18px] lg:text-[20px]">Quick links</h3>
                            <a href="/" className="text-[#CE510B] font-medium text-[16px] lg:text-[18px] hover:opacity-80 transition-opacity">Home</a>
                            <a href="/calculate-roi" className="text-[#CE510B] font-medium text-[16px] lg:text-[18px] hover:opacity-80 transition-opacity">Calculate ROI</a>
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className="flex flex-col gap-6">
                        <h3 className="text-[#3D2C1E] font-bold text-[18px] lg:text-[20px]">Contact</h3>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-3">
                                <Mail size={20} className="text-[#CE510B]" />
                                <span className="text-[#CE510B] font-medium text-[16px] lg:text-[18px]">abzcompany@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone size={20} className="text-[#CE510B]" />
                                <span className="text-[#CE510B] font-medium text-[16px] lg:text-[18px]">+91 9625 xxxxx</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <MapPin size={20} className="text-[#CE510B] mt-1 shrink-0" />
                                <span className="text-[#CE510B] font-medium text-[16px] lg:text-[18px] leading-relaxed">
                                    7349, D-7 Vasant Kunj New <br className="hidden lg:block" />
                                    Delhi, Delhi-110070
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Divider */}
                <div className="w-full h-[1px] bg-[#3D2C1E]/10" />

                {/* Copyright Section */}
                <div className="text-[#CE510B] font-bold text-[16px] lg:text-[20px]">
                    © 2026 Instalearn. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
