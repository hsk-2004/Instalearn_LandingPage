export default function Analytics() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
                <div className="flex-1 space-y-6">
                    <h2 className="text-3xl font-bold">Deep Insights & Analytics</h2>
                    <p className="text-gray-600">Track progress, identify knowledge gaps, and optimize your team's performance with real-time data.</p>
                    <ul className="space-y-3">
                        {["Real-time tracking", "Knowledge gap analysis", "Progress reports"].map((item) => (
                            <li key={item} className="flex items-center gap-2">
                                <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs">✓</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex-1 w-full h-80 bg-gray-100 rounded-2xl flex items-center justify-center border-dashed border-2 border-gray-300">
                    <span className="text-gray-400 font-medium italic">[Analytics Dashboard Illustration]</span>
                </div>
            </div>
        </section>
    );
}
