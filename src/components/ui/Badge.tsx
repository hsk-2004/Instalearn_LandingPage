import { ReactNode } from "react";

interface BadgeProps {
    children: ReactNode;
    className?: string;
}

export default function Badge({ children, className = "" }: BadgeProps) {
    return (
        <span className={`px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 ${className}`}>
            {children}
        </span>
    );
}
