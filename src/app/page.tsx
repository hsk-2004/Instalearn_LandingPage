import Hero from "@/components/sections/Hero";
import Comparison from "@/components/sections/Comparison";
import Results from "@/components/sections/Results";
import HowItWorks from "@/components/sections/HowItWorks";
import SocialLearning from "@/components/sections/SocialLearning";
import Analytics from "@/components/sections/Analytics";
import Industries from "@/components/sections/Industries";
import Integrations from "@/components/sections/Integrations";

export default function Home() {
    return (
        <div className="flex flex-col bg-brand-cream min-h-screen">
            <Hero />
            <Comparison />
            <Results />
            <HowItWorks />
            <SocialLearning />
            <Analytics />
            <Integrations />
        </div>
    );
}
