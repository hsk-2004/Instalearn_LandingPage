import Image from "next/image";

export default function Results() {
    return (
        <section className="py-12 px-4 flex flex-col items-center">
            {/* Results Pill */}
            <div className="bg-white border border-gray-200 rounded-full px-6 py-2 shadow-sm mb-12 relative">
                <span className="text-sm font-medium text-brand-gray">Result from instalearn</span>
                <div className="absolute -top-4 -right-2 text-2xl">📈</div>
            </div>

            {/* Stats Grid */}
            <div className="w-full grid grid-cols-2 gap-4">
                {/* Card 1 */}
                <div className="col-span-1 bg-[#FFDAB9] rounded-3xl p-6 flex flex-col justify-between aspect-square relative overflow-hidden">
                    <div className="text-4xl font-bold text-brand-dark">
                        80<span className="text-xl font-normal opacity-60">%</span>
                    </div>
                    <div className="text-xs font-bold text-brand-dark opacity-80 leading-tight">
                        Engagement rate
                    </div>
                    {/* <Image src="/result_card_1.png" alt="Stat icon" className="absolute bottom-2 right-2 opacity-20" width={40} height={40} /> */}
                </div>

                {/* Card 2 */}
                <div className="col-span-1 bg-[#FFDAB9] rounded-3xl p-6 flex flex-col justify-between aspect-square">
                    <div className="text-4xl font-bold text-brand-dark">
                        4x <span className="text-xs font-normal opacity-60 block">higher</span>
                    </div>
                    <div className="text-xs font-bold text-brand-dark opacity-0">Hidden</div>
                </div>

                {/* Card 3 - Wide */}
                <div className="col-span-2 bg-[#FFDAB9] rounded-3xl p-6 flex flex-col justify-between min-h-[140px]">
                    <div className="flex items-baseline gap-2">
                        <div className="text-4xl font-bold text-brand-dark">3-5</div>
                        <div className="text-lg font-medium text-brand-dark opacity-60">min</div>
                    </div>
                    <div className="text-right text-xs font-bold text-brand-dark opacity-80 uppercase tracking-wide">
                        Average lesson time
                    </div>
                </div>

                {/* Card 4 */}
                <div className="col-span-1 bg-[#FFDAB9] rounded-3xl p-6 flex flex-col justify-between aspect-square">
                    <div className="flex items-baseline gap-1">
                        <div className="text-3xl font-bold text-brand-dark">2-3</div>
                        <div className="text-sm font-medium text-brand-dark opacity-60">min</div>
                    </div>
                    <div className="text-xs font-bold text-brand-dark opacity-0">Hidden</div>
                </div>
            </div>
        </section>
    );
}

