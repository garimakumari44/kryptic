 

export interface CheckProps {
    size: "sm" | "md" | "lg",
     color : "amber" | "purple"
}


export interface ChevronProps {
    size: "sm" | "md" | "lg",
    color: "black" | "red",
    onClick?: () => void;
    
}

export interface PlusIconProps {
    size: "sm" | "md" | "lg",
    color: "gray" | "black",
    onClick?: () => void;
}


export const sizeStyles = {
    "sm" : "size-4",
    "md": "size-6",
    "lg": "size-10"
}




export const colorStyle = {
    "amber" : "text-amber-300",
    "purple" : "text-purple-300",
    "black": "text-black",
    "red" : "text-[#FFC0C0]",
    "gray" : "text-[#F8D6D6]"
}





