import Image from "next/image";

export default function Hero() {
    return (
        <section className="pt-32 pb-12 px-4 flex flex-col items-center text-center overflow-hidden">
            {/* Badge */}
            <div className="mb-8">
                <div className="w-56 h-12 relative flex items-center justify-center">
                    <Image
                        src="/mobilefirst.png"
                        alt="Mobile First Learning"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
            </div>

            {/* Headline PNG */}
            <div className="mb-6 px-4 w-full flex justify-center">
                <img
                    src="/heading.png"
                    alt="Training that Actually reaches your Workforce"
                    className="w-full max-w-[360px] h-auto object-contain"
                />
            </div>

            {/* Main Image - No Box Container */}
            <div className="relative w-full max-w-[360px] mx-auto mt-2">
                <img
                    src="/mainimage.png"
                    alt="Main Learning Interface"
                    className="w-full h-auto object-contain"
                />

                {/* Emoji Placeholder - Floating on the image */}
                <div className="absolute top-[10%] right-[10%] text-4xl transform translate-x-1/2 -translate-y-1/2">
                    🤩
                </div>
            </div>
        </section>
    );
}

