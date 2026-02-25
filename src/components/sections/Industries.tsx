export default function Industries() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-12">Built for every industry</h2>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                    {["SaaS", "Fintech", "Healthcare", "E-commerce", "Education", "Real Estate"].map((industry) => (
                        <div key={industry} className="p-6 bg-white rounded-lg border hover:border-blue-400 transition-colors cursor-default">
                            <span className="font-semibold text-gray-800">{industry}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
