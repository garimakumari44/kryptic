
import { useState } from "react"
import { PlusIcon } from "../icons/plus";
import { MinusIcon } from "../icons/minus";
import { ListButton } from "./listbutton";

 export interface AccordionItem {
    question: string,
    answer: string
}

 export interface AccordionProps {
    items: AccordionItem[];
   
}


  

export function Accordion({items}:AccordionProps) {


    
    
    const [activeIndex, setActiveIndex] = useState<number |null>(null);


    const handlePress = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);

    }


return (<div className="flex flex-col space-y-7 max-w-xl ">
    {items.map((item, index) => (
        <div className="flex    " key={item.question}>
            <div  className={`flex flex-col border-2 border-[#FFC7C7] p-5 rounded-4xl text-2xl font-family-rubik ${activeIndex === index? "bg-gray-50": "bg-primary"}` }   onClick={() => handlePress(index)}>

              <div className="flex"> 
                <div >{item.question} </div>
                <div >
                    {activeIndex === index ? <ListButton color="gray" size="md" icon={<MinusIcon/>}/> : <ListButton color="gray" size="md" icon={<PlusIcon/>}/>  }
                    </div>
                    </div>
                    {
                        activeIndex === index  && (
                            <div className="text-lg text-gray-500">{item.answer} </div>
                        )
                    }
                </div>
            </div>
    ))}
</div>)


}
    
    