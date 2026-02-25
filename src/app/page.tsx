import Hero from "@/components/sections/Hero";
import Comparison from "@/components/sections/Comparison";
import Results from "@/components/sections/Results";
import HowItWorks from "@/components/sections/HowItWorks";

export default function Home() {
    return (
        <div className="flex flex-col bg-brand-cream min-h-screen">
            <Hero />
            <Comparison />
            <Results />
            <HowItWorks />
        </div>
    );
}
