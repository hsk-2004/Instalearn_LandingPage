export default function Comparison() {
    return (
        <section className="bg-[#FCF6E3] py-24 px-6 lg:px-[120px] overflow-hidden">
            <div className="max-w-[1440px] mx-auto">
                {/* Header */}
                <div className="mb-20">
                    <h2 className="text-[#3D2C1E] font-lexend font-normal text-[40px] lg:text-[56px] leading-[1.1] tracking-[-0.02em]">
                        Why you should <br />
                        <span className="font-lexend font-normal opacity-90 italic">switch to instalearn</span>
                    </h2>
                </div>

                {/* Traditional LMS Section */}
                <div className="mb-28">
                    <h3 className="text-[#3D2C1E] font-lexend font-medium text-[24px] lg:text-[28px] mb-10 opacity-80">
                        Traditional LMS
                    </h3>
                    <div className="flex justify-start lg:justify-center px-4 w-full">
                        <img 
                            src="/traditional/t.svg" 
                            alt="Traditional LMS" 
                            className="w-full lg:w-[1191.5px] lg:h-[291.75px] h-auto object-contain"
                        />
                    </div>
                </div>

                {/* InstaLearn Section */}
                <div>
                    <h3 className="text-[#3D2C1E] font-lexend font-medium text-[24px] lg:text-[28px] mb-10 opacity-80">
                        InstaLearn
                    </h3>
                    <div className="flex justify-start lg:justify-center px-4 w-full">
                        <img 
                            src="/instalearn/i.svg" 
                            alt="InstaLearn" 
                            className="w-full lg:w-[1191.5px] lg:h-[291.75px] h-auto object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

