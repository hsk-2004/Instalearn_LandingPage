import { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
    return (
        <div className={`p-6 bg-white border border-gray-200 rounded-xl shadow-sm ${className}`}>
            {children}
        </div>
    );
}
