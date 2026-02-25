import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-32px)] max-w-7xl z-50">
            <div className="bg-white/80 backdrop-blur-xl border border-white/20 rounded-full p-1.5 flex justify-between items-center shadow-lg">
                {/* Logo Section - Left */}
                <div className="pl-2">
                    <div className="w-32 h-12 relative overflow-hidden">
                        <Image
                            src="/logo.png"
                            alt="Instalearn Logo"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </div>
                </div>

                {/* Book a Demo - Right */}
                <button className="bg-[#2D2D2D] hover:bg-black text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-md active:scale-95 transition-all">
                    Book a Demo
                </button>
            </div>
        </nav>
    );
}
