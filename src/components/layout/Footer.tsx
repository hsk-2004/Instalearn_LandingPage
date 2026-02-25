import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="px-6 py-8 bg-brand-cream">
            <div className="bg-[#EFE3D4] border border-[#E5E0D8] rounded-[24px] p-6 max-w-[340px] flex flex-col gap-6">
                {/* Logo Section */}
                <div className="flex justify-start">
                    <Image
                        src="/logo.png"
                        alt="Instalearn Logo"
                        width={130}
                        height={43}
                        className="object-contain -ml-1"
                    />
                </div>

                {/* Quick Links */}
                <div className="flex flex-col gap-3">
                    <h3 className="text-base font-black text-[#5D4037]">Quick links</h3>
                    <div className="flex flex-col gap-2 text-[#8B8374] font-semibold text-sm">
                        <a href="/" className="hover:text-[#5D4037] transition-colors">Home</a>
                        <a href="/calculate-roi" className="hover:text-[#5D4037] transition-colors">Calculate ROI</a>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-base font-black text-[#5D4037]">Contact</h3>
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-2.5 group">
                            <div className="p-1.5 rounded-lg group-hover:bg-white/50 transition-colors">
                                <Mail size={16} className="text-[#D35400]" />
                            </div>
                            <span className="text-[#5D4037] font-semibold text-sm">abzcompany@gmail.com</span>
                        </div>

                        <div className="flex items-center gap-2.5 group">
                            <div className="p-1.5 rounded-lg group-hover:bg-white/50 transition-colors">
                                <Phone size={16} className="text-[#D35400]" />
                            </div>
                            <span className="text-[#5D4037] font-semibold text-sm">+91 9625-xxxxx</span>
                        </div>

                        <div className="flex items-start gap-2.5 group pt-1">
                            <div className="p-1.5 rounded-lg group-hover:bg-white/50 transition-colors shrink-0">
                                <MapPin size={16} className="text-[#D35400]" />
                            </div>
                            <span className="text-[#5D4037] font-semibold text-sm leading-tight">
                                7349, D-7 Vasant Kunj New Delhi,<br />
                                Delhi-110070
                            </span>
                        </div>
                    </div>
                </div>

                {/* Separator */}
                <div className="h-px bg-[#E5E0D8] w-full" />

                {/* Copyright */}
                <div className="text-[#8B8374] font-semibold text-xs">
                    © 2026 Instalearn. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
