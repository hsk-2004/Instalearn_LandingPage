import Image from "next/image";

export default function Comparison() {
    return (
        <section className="py-12 px-4 flex flex-col items-center">
            {/* Comparison Pill */}
            <div className="bg-white border border-gray-200 rounded-full px-6 py-2 shadow-sm mb-12">
                <span className="text-sm font-medium text-brand-gray">Why you should switch to instalearn</span>
            </div>

            {/* Traditional LMS Section */}
            <div className="w-full mb-12">
                <h3 className="text-brand-dark font-bold text-lg mb-6 ml-2">Traditional LMS</h3>
                <div className="grid grid-cols-3 gap-3">
                    {[
                        { label: "Desktop-first", icon: "💻" },
                        { label: "Slow setup", icon: "🐚" },
                        { label: "Long courses", icon: "⏳" },
                    ].map((item, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                            <div className="w-full aspect-square bg-[#F5F5F5] rounded-2xl flex items-center justify-center mb-2 overflow-hidden relative">
                                <span className="text-3xl grayscale opacity-50">{item.icon}</span>
                                {/* <Image src="/traditional_lms_logos.png" alt={item.label} fill className="object-contain" /> */}
                            </div>
                            <div className="w-full bg-[#FFEEDD] rounded-full py-2 px-1 text-center text-[10px] font-bold text-[#8B4513] whitespace-nowrap">
                                {item.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* InstaLearn Section */}
            <div className="w-full">
                <h3 className="text-brand-dark font-bold text-lg mb-6 ml-2">InstaLearn</h3>
                <div className="grid grid-cols-3 gap-3">
                    {[
                        { label: "Mobile-first", icon: "📱", color: "#FF7D29" },
                        { label: "Ready instantly", icon: "⚡", color: "#FF7D29" },
                        { label: "3-5 min lessons", icon: "⏱️", color: "#FF7D29" },
                    ].map((item, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                            <div className="w-full aspect-square bg-[#FFFFFF] border border-[#FFD0B5] rounded-2xl flex items-center justify-center mb-2 overflow-hidden shadow-sm">
                                <span className="text-3xl">{item.icon}</span>
                            </div>
                            <div className="w-full bg-[#FF7D29] rounded-full py-2 px-1 text-center text-[10px] font-bold text-white whitespace-nowrap">
                                {item.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

