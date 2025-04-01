interface listButtonProps {
    color: "black"| "gray";
    size: "sm"| "md"| "lg";
    onClick?: () => void;
    icon?: React.ReactNode; 
    children?: React.ReactNode;
}

export const bgStyles = {
    "white": "bg-white"
};

export const sizeStyles = {
    "sm": "w-4 h-4",  // Changed from `size-4` (invalid) to `w-4 h-4`
    "md": "w-6 h-6",
    "lg": "w-10 h-10"
};

export const colorStyle = {
    "black": "text-black",
    "gray": "text-[#FFC7C7]"
};

export function ListButton({ size, icon, color, children }: listButtonProps) {
    return (
        <button className={`${sizeStyles[size]} ${colorStyle[color]}`}>
            {icon}
            {children}  {/* This allows additional elements like <Search /> */}
        </button>
    );
}
