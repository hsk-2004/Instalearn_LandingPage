export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-16">Workflow that works for you</h2>
                <div className="grid md:grid-cols-3 gap-12">
                    {[
                        { step: "01", title: "Connect", description: "Connect your existing documentation and tools." },
                        { step: "02", title: "Analyze", description: "Our AI analyzes and structures your knowledge." },
                        { step: "03", title: "Learn", description: "Team members access personalized learning paths." },
                    ].map((item) => (
                        <div key={item.step} className="relative">
                            <span className="text-8xl font-black text-blue-100 absolute -top-10 -left-4 -z-10">{item.step}</span>
                            <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                            <p className="text-gray-600">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
