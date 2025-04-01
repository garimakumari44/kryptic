
import  { ReactElement } from 'react'

type Variants = "first" | "second" | "third"
 
type Width = "light" | "Bold"


const fontStyles = {
    "rubik": "font-family-rubik",
    "lora": "font-lora"
}


interface ButtonProps{
    title: string,
    icon?: ReactElement,
    variant: Variants, 
    size:  "vsm"| "sm" | "md"| "lg" | "vlg"     ,
    width: Width , 
    onClick?: () => void;
    font: "rubik" | "lora",
    textstyle: "size-6"| "size-7" | 'size-8'



}
const textstyles = {
    "size-5": "text-md",
    "size-6" : "text-lg",
    "size-7" : "text-2xl",
     "size-8": "text-3xl"
}



const sizeStyles = {
    "vsm" : "py-2 px-8 rounded-3xl text-center text-sm",
    "sm": "py-3 px-20 rounded-3xl text-center text-sm",
    "md": "py-4 px-12 rounded-3xl text-center text-md ",
    "lg": "py-4 px-14 rounded-3xl text-center text-lg",
    "vlg": "py-6 px-20 rounded-full text-center text-lg"
}

const variantStyles = {
    "first" : "bg-black text-white",
    "second" : "bg-secondary text-black",
    "third": "bg-white text-black",
    
}

const widthStyle = {
    "light": "font",
    "Bold": "font-bold"
}


const defaultStyles = "rounded-4xl"

const pointerStyles = "cursor-pointer" 





export const Button = ({title, icon, variant, size, width, onClick, font, textstyle }: ButtonProps) => {
    return <button onClick={onClick} className={" " +  variantStyles[variant] + " " + widthStyle[width]  + " " + sizeStyles[size] + " " + defaultStyles + " " + fontStyles[font] + " " + pointerStyles  + " " + textstyles[textstyle] }  >
     <div className='flex'> 
     {title}
    <div className="pl-2">
        {icon}
    </div >
    </div>  
    </button>
}