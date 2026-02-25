import Image from "next/image";

export default function HowItWorks() {

    return (
        <section className="py-16 px-6 flex flex-col items-center bg-brand-cream">
            {/* Header SVG */}
            <div className="mb-8">
                <Image
                    src="/howitworks.svg"
                    alt="How It Works"
                    width={130}
                    height={40}
                    priority
                />
            </div>

            {/* Description */}
            <p className="text-[#8B8374] text-center text-base font-medium max-w-[320px] mb-12 leading-relaxed">
                An experienced professional can record or generate a 5-minute module in just 30 seconds.
            </p>

            {/* Steps Vertical List */}
            <div className="w-full flex flex-col gap-8 max-w-[400px]">
                {/* Step 1: Create */}
                <div className="relative">
                    <Image src="/create.svg" alt="Create" width={400} height={140} className="w-full h-auto" />
                </div>

                {/* Step 2: Share */}
                <div className="relative">
                    <Image src="/share.svg" alt="Share" width={400} height={140} className="w-full h-auto" />
                </div>

                {/* Step 3: Track */}
                <div className="relative">
                    <Image src="/track.svg" alt="Track" width={400} height={140} className="w-full h-auto" />
                </div>
            </div>
        </section>
    );
}
