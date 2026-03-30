export default function Comparison() {
    return (
        <section className="bg-[#FCF6E3] py-24 px-0 lg:px-0 xl:px-0 overflow-hidden">
            <div className="w-full max-w-[1440px] mx-auto lg:px-[80px] xl:px-[130px]">
                {/* Header */}
                <div className="mb-16 xl:mb-20 px-6 lg:px-0">
                    <h2 
                        className="text-[#3D2C1E] font-lexend font-normal leading-[1.1] tracking-tight"
                        style={{ fontSize: "clamp(32px, 4vw, 56px)" }}
                    >
                        Why you should <br />
                        <span style={{ fontFamily: "'Parabole', cursive" }}>switch</span><span className="font-lexend font-normal opacity-90 italic"> to instalearn</span>
                    </h2>
                </div>

                {/* Traditional LMS Section */}
                <div className="mb-20 xl:mb-24">
                    <h3 className="text-[#3D2C1E] font-medium mb-4 opacity-80 px-6 lg:px-0" style={{ fontFamily: "'Gilroy Medium', sans-serif", fontSize: "clamp(24px, 2vw, 28px)" }}>
                        Traditional LMS
                    </h3>
                    <div className="w-full overflow-x-auto pb-4 scrollbar-hide lg:flex lg:justify-center px-4 lg:px-0">
                        <img
                            src="/traditional/t.svg"
                            alt="Traditional LMS"
                            className="w-auto h-[171px] lg:w-[95%] xl:w-full lg:h-auto object-contain max-w-none lg:max-w-none"
                        />
                    </div>
                </div>

                {/* InstaLearn Section */}
                <div>
                    <h3 className="text-[#3D2C1E] font-medium mb-4 opacity-80 px-6 lg:px-0" style={{ fontFamily: "'Gilroy Medium', sans-serif", fontSize: "clamp(24px, 2vw, 28px)" }}>
                        InstaLearn
                    </h3>
                    <div className="w-full overflow-x-auto pb-4 scrollbar-hide lg:flex lg:justify-center px-4 lg:px-0">
                        <img
                            src="/instalearn/i.svg"
                            alt="InstaLearn"
                            className="w-auto h-[171px] lg:w-[95%] xl:w-full lg:h-auto object-contain max-w-none lg:max-w-none"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}


