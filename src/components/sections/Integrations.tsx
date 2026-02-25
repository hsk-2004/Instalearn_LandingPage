export default function Integrations() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-4">Plays well with others</h2>
                <p className="text-gray-500 mb-12">Connect your favorite tools in seconds.</p>
                <div className="flex flex-wrap justify-center gap-8 grayscale opacity-50">
                    {["Slack", "Notion", "Github", "Teams", "Jira", "Zendesk"].map((tool) => (
                        <div key={tool} className="text-xl font-bold uppercase tracking-tighter">{tool}</div>
                    ))}
                </div>
            </div>
        </section>
    );
}
