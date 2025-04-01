import { ChevronProps, sizeStyles, colorStyle } from "."


export function Chevron(props: ChevronProps) {
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`${colorStyle[props.color]} ${sizeStyles[props.size]}`}>
    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
  </svg>
  
}