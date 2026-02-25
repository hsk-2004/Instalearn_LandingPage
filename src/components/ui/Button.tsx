import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    variant?: "primary" | "secondary" | "outline";
    className?: string;
    onClick?: () => void;
}

export default function Button({
    children,
    variant = "primary",
    className = "",
    onClick
}: ButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 rounded-md transition-all ${className}`}
        >
            {children}
        </button>
    );
}
