export default function Footer() {
    return (
        <footer className="bg-gray-50 border-t py-12">
            <div className="max-w-7xl mx-auto px-4 text-center text-gray-500">
                <p>© {new Date().getFullYear()} Instalearn. All rights reserved.</p>
            </div>
        </footer>
    );
}
